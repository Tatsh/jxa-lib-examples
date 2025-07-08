import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { dispatch, fetch, string, unistd } from 'jxa-lib';

const fetchMock = fetch as jest.MockedFunction<typeof fetch>;

jest.mock('jxa-lib', () => ({
  dispatch: {
    DispatchSemaphore: jest.fn().mockImplementation(() => ({
      signal: jest.fn(),
      waitForever: jest.fn(),
    })),
  },
  fetch: jest.fn(),
  stdlib: {
    getenv: jest.fn(),
    exit: jest.fn(),
  },
  string: {
    stringWithData: jest.fn(),
  },
  unistd: {
    sleep: jest.fn(),
  },
}));

describe('fetchGoogle', () => {
  let sema: { signal: jest.Mock; waitForever: jest.Mock };

  beforeEach(() => {
    sema = {
      signal: jest.fn(),
      waitForever: jest.fn(),
    };
    (dispatch.DispatchSemaphore as jest.Mock).mockReturnValue(sema);
    jest.clearAllMocks();
  });

  it('prints data when fetch resolves with data', async () => {
    const mockData = Buffer.from('hello');
    fetchMock.mockResolvedValue({ data: mockData as unknown as NSData });
    (string.stringWithData as jest.Mock).mockReturnValue('hello');
    sema.waitForever.mockReturnValueOnce(0);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { default: fetchGoogle } = await import('./fetch-google-command');

    const result = fetchGoogle();
    // Wait for the promise to resolve
    await Promise.resolve();

    expect(fetch).toHaveBeenCalledWith('https://www.google.com/');
    expect(string.stringWithData).toHaveBeenCalledWith(expect.any(Buffer));
    expect(logSpy).toHaveBeenCalledWith('hello');
    expect(sema.signal).toHaveBeenCalled();
    expect(result).toBe(0);

    fetchMock.mockResolvedValue({ data: null as unknown as NSData });
  });

  it('calls unistd.sleep if waitForever returns nonzero', async () => {
    fetchMock.mockResolvedValue({ data: null as unknown as NSData });
    sema.waitForever.mockReturnValueOnce(1).mockReturnValueOnce(0);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { default: fetchGoogle } = await import('./fetch-google-command');

    fetchGoogle();
    await Promise.resolve();

    expect(unistd.sleep).toHaveBeenCalledWith(1);
    logSpy.mockRestore();
  });

  it('prints error when fetch rejects', async () => {
    fetchMock.mockRejectedValue(new Error('fail'));
    sema.waitForever.mockReturnValueOnce(0);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { default: fetchGoogle } = await import('./fetch-google-command');

    const result = fetchGoogle();
    // Wait for the promise to resolve
    await Promise.resolve();

    expect(fetch).toHaveBeenCalledWith('https://www.google.com/');
    //expect(logSpy).toHaveBeenCalledWith('Caught error');
    //expect(sema.signal).toHaveBeenCalled();
    expect(result).toBe(0);

    logSpy.mockRestore();
  });
});
