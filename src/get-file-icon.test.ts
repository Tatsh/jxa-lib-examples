import { beforeEach, expect, type Mock, test, vi } from 'vitest';
import getIconOfChromeAppsDirectory from './get-file-icon';

vi.mock('jxa-lib', () => ({
  Workspace: {
    shared: {
      iconForFile: vi.fn(),
    },
  },
}));

const mockStringByAppendingPathComponent = vi.fn();
const mockNSHomeDirectory = vi.fn();
const mockTIFFRepresentation = {};
const mockImage = {
  TIFFRepresentation: mockTIFFRepresentation,
};
const mockBitmapImageRep = {
  representationUsingTypeProperties: vi.fn(),
};
const mockPNGData = {
  writeToFileAtomically: vi.fn(),
};

global.$ = {
  NSHomeDirectory: mockNSHomeDirectory as unknown as () => NSString,
  NSPNGFileType: 4,
  NSBitmapImageRep: {
    imageRepWithData: vi.fn(),
    imageRepWithContentsOfFile: vi.fn(),
  },
} as unknown as typeof global.$;
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

beforeEach(async () => {
  vi.clearAllMocks();

  // Mock path building
  mockStringByAppendingPathComponent.mockImplementation(function (this: unknown, part: string) {
    return {
      stringByAppendingPathComponent: mockStringByAppendingPathComponent,
      toString: () => part,
    };
  });
  mockNSHomeDirectory.mockReturnValue({
    stringByAppendingPathComponent: mockStringByAppendingPathComponent,
  });

  // Mock iconForFile
  const jxa = await import('jxa-lib');
  (jxa.Workspace.shared.iconForFile as Mock).mockReturnValue(mockImage);

  // Mock imageRepWithData
  (global.$.NSBitmapImageRep.imageRepWithData as Mock).mockReturnValue(mockBitmapImageRep);

  // Mock representationUsingTypeProperties
  mockBitmapImageRep.representationUsingTypeProperties.mockReturnValue(mockPNGData);

  // Mock writeToFileAtomically
  mockPNGData.writeToFileAtomically.mockReturnValue(true);
});

test('calls NSWorkspace.iconForFile with correct path', async () => {
  getIconOfChromeAppsDirectory();
  const jxa = await import('jxa-lib');
  expect(jxa.Workspace.shared.iconForFile).toHaveBeenCalled();
});

test('builds the correct path for Chrome Apps.localized', () => {
  getIconOfChromeAppsDirectory();
  // Should be called three times: Applications, Chrome Apps.localized, TheIcon.png
  expect(mockStringByAppendingPathComponent).toHaveBeenCalledWith('Applications');
  expect(mockStringByAppendingPathComponent).toHaveBeenCalledWith('Chrome Apps.localized');
  expect(mockStringByAppendingPathComponent).toHaveBeenCalledWith('TheIcon.png');
});

test('calls imageRepWithData with TIFFRepresentation', () => {
  getIconOfChromeAppsDirectory();
  expect(global.$.NSBitmapImageRep.imageRepWithData).toHaveBeenCalledWith(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockTIFFRepresentation as any,
  );
});

test('calls representationUsingTypeProperties with NSPNGFileType', () => {
  (global.ObjC.wrap as Mock).mockReturnValue({});
  getIconOfChromeAppsDirectory();
  expect(mockBitmapImageRep.representationUsingTypeProperties).toHaveBeenCalledWith(
    global.$.NSPNGFileType,
    expect.any(Object),
  );
});

test('calls writeToFileAtomically with correct arguments', () => {
  getIconOfChromeAppsDirectory();
  expect(mockPNGData.writeToFileAtomically).toHaveBeenCalledWith(
    expect.objectContaining({ stringByAppendingPathComponent: expect.any(Function) }),
    false,
  );
});

test('returns 0', () => {
  expect(getIconOfChromeAppsDirectory()).toBe(0);
});
