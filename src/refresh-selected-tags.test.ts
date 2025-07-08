import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { applicationWithStandardAdditions } from 'jxa-lib';
import refreshSelectedTags from './refresh-selected-tags';

jest.mock('jxa-lib', () => ({
  applicationWithStandardAdditions: jest.fn(),
  stdlib: {},
}));

const mockDisplayDialog = jest.fn();
const mockRefresh = jest.fn();

function makeAppMock(selection: unknown[] = []) {
  return {
    selection: jest.fn(() => selection),
    displayDialog: mockDisplayDialog,
    refresh: mockRefresh,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('refreshSelectedTags', () => {
  it('shows dialog and returns 1 if no tracks are selected', () => {
    const appMock = makeAppMock([]);
    (applicationWithStandardAdditions as jest.Mock).mockReturnValue(appMock);

    const result = refreshSelectedTags();

    expect(appMock.selection).toHaveBeenCalled();
    expect(appMock.displayDialog).toHaveBeenCalledWith(
      'No tracks selected. Select some tracks with some stale tags.',
      {
        buttons: ['I will!'],
        defaultButton: 1,
        withIcon: 0,
      },
    );
    expect(result).toBe(1);
    expect(appMock.refresh).not.toHaveBeenCalled();
  });

  it('refreshes only file tracks and shows success dialog', () => {
    const fileTrack = { class: () => 'fileTrack' };
    const nonFileTrack = { class: () => 'otherTrack' };
    const appMock = makeAppMock([fileTrack, nonFileTrack]);
    (applicationWithStandardAdditions as jest.Mock).mockReturnValue(appMock);

    const result = refreshSelectedTags();

    expect(appMock.selection).toHaveBeenCalled();
    expect(appMock.refresh).toHaveBeenCalledTimes(1);
    expect(appMock.refresh).toHaveBeenCalledWith(fileTrack);
    expect(appMock.displayDialog).toHaveBeenCalledWith('Selected tags have been freshened up.', {
      buttons: ['Okay'],
      defaultButton: 1,
    });
    expect(result).toBe(0);
  });

  it('does not call refresh if no file tracks are selected', () => {
    const nonFileTrack = { class: () => 'otherTrack' };
    const appMock = makeAppMock([nonFileTrack]);
    (applicationWithStandardAdditions as jest.Mock).mockReturnValue(appMock);

    const result = refreshSelectedTags();

    expect(appMock.refresh).not.toHaveBeenCalled();
    expect(appMock.displayDialog).toHaveBeenCalledWith('Selected tags have been freshened up.', {
      buttons: ['Okay'],
      defaultButton: 1,
    });
    expect(result).toBe(0);
  });

  it('handles multiple file tracks', () => {
    const fileTrack1 = { class: () => 'fileTrack' };
    const fileTrack2 = { class: () => 'fileTrack' };
    const appMock = makeAppMock([fileTrack1, fileTrack2]);
    (applicationWithStandardAdditions as jest.Mock).mockReturnValue(appMock);

    const result = refreshSelectedTags();

    expect(appMock.refresh).toHaveBeenCalledTimes(2);
    expect(appMock.refresh).toHaveBeenCalledWith(fileTrack1);
    expect(appMock.refresh).toHaveBeenCalledWith(fileTrack2);
    expect(appMock.displayDialog).toHaveBeenCalledWith('Selected tags have been freshened up.', {
      buttons: ['Okay'],
      defaultButton: 1,
    });
    expect(result).toBe(0);
  });
});
