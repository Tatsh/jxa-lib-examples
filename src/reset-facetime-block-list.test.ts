import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import mockPath from 'ramda/es/path';
import resetFaceTimeBlockList from './reset-facetime-block-list';

jest.mock('ramda/es/path', () => jest.fn());

const mockActivate = jest.fn();
const mockDelay = (global.delay = jest.fn());
const mockKeyCode = jest.fn();
jest.spyOn(console, 'log').mockImplementation(() => {});

const mockApplication = jest.fn().mockImplementation((name: string) => {
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
    jest.clearAllMocks();
  });

  it('should activate FaceTime, delay, and send keyCode for each row', () => {
    (mockPath as jest.Mock).mockReturnValue(3);

    const result = resetFaceTimeBlockList();

    expect(mockApplication).toHaveBeenCalledWith('System Events');
    expect(mockApplication).toHaveBeenCalledWith('FaceTime');
    expect(mockActivate).toHaveBeenCalled();
    expect(mockDelay).toHaveBeenCalledWith(0.2);
    expect(mockKeyCode).toHaveBeenCalledTimes(4);
    expect(result).toBe(0);
  });

  it('should handle zero rows gracefully', () => {
    (mockPath as jest.Mock).mockReturnValue(0);

    const result = resetFaceTimeBlockList();

    expect(mockKeyCode).toHaveBeenCalledTimes(1);
    expect(result).toBe(0);
  });
});
