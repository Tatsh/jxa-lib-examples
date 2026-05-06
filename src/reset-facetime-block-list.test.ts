import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import mockPath from 'ramda/es/path';
import resetFaceTimeBlockList from './reset-facetime-block-list';

vi.mock('ramda/es/path', () => ({ default: vi.fn() }));

const mockActivate = vi.fn();
const mockDelay = (global.delay = vi.fn());
const mockKeyCode = vi.fn();
vi.spyOn(console, 'log').mockImplementation(() => {});

const mockApplication = vi.fn().mockImplementation((name: string) => {
  if (name === 'System Events') {
    return { keyCode: mockKeyCode };
  }
  if (name === 'FaceTime') {
    return { activate: mockActivate };
  }
  return {};
});

(global as unknown as { Application: typeof mockApplication }).Application = mockApplication;

describe('resetFaceTimeBlockList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should activate FaceTime, delay, and send keyCode for each row', () => {
    (mockPath as Mock).mockReturnValue(3);

    const result = resetFaceTimeBlockList();

    expect(mockApplication).toHaveBeenCalledWith('System Events');
    expect(mockApplication).toHaveBeenCalledWith('FaceTime');
    expect(mockActivate).toHaveBeenCalled();
    expect(mockDelay).toHaveBeenCalledWith(0.2);
    expect(mockKeyCode).toHaveBeenCalledTimes(4);
    expect(result).toBe(0);
  });

  it('should handle zero rows gracefully', () => {
    (mockPath as Mock).mockReturnValue(0);

    const result = resetFaceTimeBlockList();

    expect(mockKeyCode).toHaveBeenCalledTimes(1);
    expect(result).toBe(0);
  });
});
