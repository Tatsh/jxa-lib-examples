import { beforeEach, describe, expect, it, jest } from '@jest/globals';

// This must be set up before importing jxa-lib.
global.ObjC = {
  bindFunction: jest.fn(),
  ['import']: jest.fn(),
  wrap: jest.fn() as unknown as {
    (x?: null | undefined): null;
    (input: string): NSString;
    (n: number): BridgedObject<number>;
    (xs: string[]): NSString[];
    <I = unknown, R = unknown>(x: I): R;
  },
  unwrap: jest.fn() as unknown as {
    (x: BridgedObject<number>): number;
    (x: BridgedObject<boolean>): boolean;
    <U>(value: U): U extends NSString ? string : U extends NSArray<infer V> ? V[] : unknown;
  },
  deepUnwrap: jest.fn() as unknown as {
    (x: NSArray<NSString>): string[];
    <T, U>(x: T): U;
  },
  registerSubclass: jest.fn(),
  castRefToObject: jest.fn(),
  castObjectToRef: jest.fn(),
  dict: jest.fn(),
  block: jest.fn(),
  super: () => {},
};
global.$ = {
  NSWorkspace: {
    sharedWorkspace: {
      runningApplications: [],
      getInfoForFileApplicationType: jest.fn(() => true),
      isFilePackageAtPath: jest.fn(() => true),
      iconForFile: jest.fn(() => ({}) as NSImage),
      iconForFileType: jest.fn(() => ({}) as NSImage),
      iconForFiles: jest.fn(() => ({}) as NSImage),
      launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier: jest.fn(
        () => true,
      ),
      setIconForFileOptions: jest.fn(() => true),
    },
  },
} as unknown as typeof global.$;
import * as jxaLib from 'jxa-lib';
import fetchGoogle from './fetch-google-command';
import getIconOfChromeAppsDirectory from './get-file-icon';
import { main } from './main';
import refreshSelectedTags from './refresh-selected-tags';
import refreshTags from './refresh-tags';
import resetFaceTimeBlockList from './reset-facetime-block-list';

jest.mock('jxa-lib');
jest.mock('./fetch-google-command');
jest.mock('./get-file-icon');
jest.mock('./refresh-selected-tags');
jest.mock('./refresh-tags');
jest.mock('./reset-facetime-block-list');

const chooseFromListMock = jest.fn();

(jxaLib.applicationWithStandardAdditions as jest.Mock).mockReturnValue({
  chooseFromList: chooseFromListMock,
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('main', () => {
  it('returns 0 if no item is selected', () => {
    chooseFromListMock.mockReturnValueOnce(undefined);
    expect(main()).toBe(0);

    chooseFromListMock.mockReturnValueOnce([]);
    expect(main()).toBe(0);
  });

  it('calls fetchGoogle for the fetch-google option', () => {
    chooseFromListMock.mockReturnValueOnce(['Fetch google.com with NSURLSession (fetch-like API)']);
    (fetchGoogle as jest.Mock).mockReturnValue('fetch-result');
    expect(main()).toBe('fetch-result');
    expect(fetchGoogle).toHaveBeenCalled();
  });

  it('calls refreshSelectedTags for the refresh-selected-tags option', () => {
    chooseFromListMock.mockReturnValueOnce(['Refresh selected tags in Music.app']);
    (refreshSelectedTags as jest.Mock).mockReturnValue('selected-tags');
    expect(main()).toBe('selected-tags');
    expect(refreshSelectedTags).toHaveBeenCalled();
  });

  it('calls refreshTags for the refresh-tags option', () => {
    chooseFromListMock.mockReturnValueOnce(['Refresh all tags in Music.app']);
    (refreshTags as jest.Mock).mockReturnValue('all-tags');
    expect(main()).toBe('all-tags');
    expect(refreshTags).toHaveBeenCalled();
  });

  it('calls resetFaceTimeBlockList for the reset-facetime-block-list option', () => {
    chooseFromListMock.mockReturnValueOnce(['Reset the FaceTime block list']);
    (resetFaceTimeBlockList as jest.Mock).mockReturnValue('reset-block-list');
    expect(main()).toBe('reset-block-list');
    expect(resetFaceTimeBlockList).toHaveBeenCalled();
  });

  it('calls getIconOfChromeAppsDirectory for the get-file-icon option', () => {
    chooseFromListMock.mockReturnValueOnce(['Get icon of Chrome Apps.localized']);
    (getIconOfChromeAppsDirectory as jest.Mock).mockReturnValue('icon-result');
    expect(main()).toBe('icon-result');
    expect(getIconOfChromeAppsDirectory).toHaveBeenCalled();
  });

  it('returns 1 for unknown option', () => {
    chooseFromListMock.mockReturnValueOnce(['Unknown option']);
    expect(main()).toBe(1);
  });
});
