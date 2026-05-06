import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import { ItunesHelper } from 'jxa-lib';
import refreshTags from './refresh-tags';

vi.mock('jxa-lib', () => {
  return {
    ItunesHelper: vi.fn(function (this: { clearOrphanedTracks: Mock; fileTracks: string[] }) {
      this.clearOrphanedTracks = vi.fn();
      this.fileTracks = ['track1', 'track2'];
    }),
  };
});

const mockRefresh = vi.fn();
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

(global as typeof globalThis).Application = vi.fn().mockImplementation((appName: string) => {
  if (appName === 'Music') {
    return {
      refresh: mockRefresh,
    };
  }
  return {};
}) as unknown as typeof globalThis.Application;

describe('refreshTags', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should clear orphaned tracks and refresh all file tracks', () => {
    const result = refreshTags();
    expect((global as typeof globalThis).Application).toHaveBeenCalledWith('Music');
    expect(ItunesHelper).toHaveBeenCalled();
    const helperInstance = (ItunesHelper as Mock).mock.instances[0] as {
      clearOrphanedTracks: Mock;
      fileTracks: string[];
    };
    expect(helperInstance.clearOrphanedTracks).toHaveBeenCalled();
    expect(mockConsoleLog).toHaveBeenCalledWith('Please be patient!');
    expect(mockRefresh).toHaveBeenCalledTimes(2);
    expect(mockRefresh).toHaveBeenNthCalledWith(1, 'track1');
    expect(mockRefresh).toHaveBeenNthCalledWith(2, 'track2');
    expect(result).toBe(0);
  });

  it('should handle empty fileTracks gracefully', () => {
    (ItunesHelper as Mock).mockImplementationOnce(function (this: {
      clearOrphanedTracks: Mock;
      fileTracks: string[];
    }) {
      this.clearOrphanedTracks = vi.fn();
      this.fileTracks = [];
    });
    const result = refreshTags();
    expect(mockRefresh).not.toHaveBeenCalled();
    expect(result).toBe(0);
  });
});
