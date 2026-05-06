import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';

vi.hoisted(() => {
  global.ObjC = {
    bindFunction: vi.fn(),
    ['import']: vi.fn(),
    wrap: vi.fn() as unknown as {
      (x?: null | undefined): null;
      (input: string): NSString;
      (n: number): BridgedObject<number>;
      (xs: string[]): NSString[];
      <I = unknown, R = unknown>(x: I): R;
    },
    unwrap: vi.fn() as unknown as {
      (x: BridgedObject<number>): number;
      (x: BridgedObject<boolean>): boolean;
      <U>(value: U): U extends NSString ? string : U extends NSArray<infer V> ? V[] : unknown;
    },
    deepUnwrap: vi.fn() as unknown as {
      (x: NSArray<NSString>): string[];
      <T, U>(x: T): U;
    },
    registerSubclass: vi.fn(),
    castRefToObject: vi.fn(),
    castObjectToRef: vi.fn(),
    dict: vi.fn(),
    block: vi.fn(),
    super: () => {},
  };
  global.$ = {
    NSWorkspace: {
      sharedWorkspace: {
        runningApplications: [],
        getInfoForFileApplicationType: vi.fn(() => true),
        isFilePackageAtPath: vi.fn(() => true),
        iconForFile: vi.fn(() => ({}) as NSImage),
        iconForFileType: vi.fn(() => ({}) as NSImage),
        iconForFiles: vi.fn(() => ({}) as NSImage),
        launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier: vi.fn(
          () => true,
        ),
        setIconForFileOptions: vi.fn(() => true),
      },
    },
  } as unknown as typeof global.$;
});

import * as jxaLib from 'jxa-lib';
import fetchGoogle from './fetch-google-command';
import getIconOfChromeAppsDirectory from './get-file-icon';
import { main } from './main';
import refreshSelectedTags from './refresh-selected-tags';
import refreshTags from './refresh-tags';
import resetFaceTimeBlockList from './reset-facetime-block-list';

vi.mock('jxa-lib');
vi.mock('./fetch-google-command');
vi.mock('./get-file-icon');
vi.mock('./refresh-selected-tags');
vi.mock('./refresh-tags');
vi.mock('./reset-facetime-block-list');

const chooseFromListMock = vi.fn();

(jxaLib.applicationWithStandardAdditions as Mock).mockReturnValue({
  chooseFromList: chooseFromListMock,
});

beforeEach(() => {
  vi.clearAllMocks();
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
    (fetchGoogle as Mock).mockReturnValue('fetch-result');
    expect(main()).toBe('fetch-result');
    expect(fetchGoogle).toHaveBeenCalled();
  });

  it('calls refreshSelectedTags for the refresh-selected-tags option', () => {
    chooseFromListMock.mockReturnValueOnce(['Refresh selected tags in Music.app']);
    (refreshSelectedTags as Mock).mockReturnValue('selected-tags');
    expect(main()).toBe('selected-tags');
    expect(refreshSelectedTags).toHaveBeenCalled();
  });

  it('calls refreshTags for the refresh-tags option', () => {
    chooseFromListMock.mockReturnValueOnce(['Refresh all tags in Music.app']);
    (refreshTags as Mock).mockReturnValue('all-tags');
    expect(main()).toBe('all-tags');
    expect(refreshTags).toHaveBeenCalled();
  });

  it('calls resetFaceTimeBlockList for the reset-facetime-block-list option', () => {
    chooseFromListMock.mockReturnValueOnce(['Reset the FaceTime block list']);
    (resetFaceTimeBlockList as Mock).mockReturnValue('reset-block-list');
    expect(main()).toBe('reset-block-list');
    expect(resetFaceTimeBlockList).toHaveBeenCalled();
  });

  it('calls getIconOfChromeAppsDirectory for the get-file-icon option', () => {
    chooseFromListMock.mockReturnValueOnce(['Get icon of Chrome Apps.localized']);
    (getIconOfChromeAppsDirectory as Mock).mockReturnValue('icon-result');
    expect(main()).toBe('icon-result');
    expect(getIconOfChromeAppsDirectory).toHaveBeenCalled();
  });

  it('returns 1 for unknown option', () => {
    chooseFromListMock.mockReturnValueOnce(['Unknown option']);
    expect(main()).toBe(1);
  });
});
