import { describe, expect, jest, beforeEach, it } from '@jest/globals';
import refreshTags from './refresh-tags';
import { ItunesHelper } from 'jxa-lib';

jest.mock('jxa-lib', () => {
  return {
    ItunesHelper: jest.fn().mockImplementation((_app) => {
      return {
        clearOrphanedTracks: jest.fn(),
        fileTracks: ['track1', 'track2'],
      };
    }),
  };
});

const mockRefresh = jest.fn();
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

(global as typeof globalThis).Application = jest.fn().mockImplementation((appName: string) => {
  if (appName === 'Music') {
    return {
      refresh: mockRefresh,
    };
  }
  return {};
}) as unknown as typeof globalThis.Application;

describe('refreshTags', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should clear orphaned tracks and refresh all file tracks', () => {
    const result = refreshTags();
    expect((global as typeof globalThis).Application).toHaveBeenCalledWith('Music');
    expect(ItunesHelper).toHaveBeenCalled();
    const helperInstance = (ItunesHelper as jest.Mock).mock.results[0].value as {
      clearOrphanedTracks: jest.Mock;
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
    interface MockItunesHelper {
      clearOrphanedTracks: jest.Mock;
      fileTracks: string[];
    }

    (ItunesHelper as jest.Mock).mockImplementationOnce(
      (_: string): MockItunesHelper => ({
        clearOrphanedTracks: jest.fn(),
        fileTracks: [],
      }),
    );
    const result = refreshTags();
    expect(mockRefresh).not.toHaveBeenCalled();
    expect(result).toBe(0);
  });
});
