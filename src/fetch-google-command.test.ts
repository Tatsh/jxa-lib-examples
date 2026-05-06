import { beforeEach, describe, expect, it, type Mock, type MockedFunction, vi } from 'vitest';
import { fetch, string, unistd } from 'jxa-lib';

const fetchMock = fetch as MockedFunction<typeof fetch>;

const semaState: { signal: Mock; waitForever: Mock } = {
  signal: vi.fn(),
  waitForever: vi.fn(),
};

vi.mock('jxa-lib', () => ({
  dispatch: {
    DispatchSemaphore: vi.fn(function (this: { signal: Mock; waitForever: Mock }) {
      this.signal = semaState.signal;
      this.waitForever = semaState.waitForever;
    }),
  },
  fetch: vi.fn(),
  stdlib: {
    getenv: vi.fn(),
    exit: vi.fn(),
  },
  string: {
    stringWithData: vi.fn(),
  },
  unistd: {
    sleep: vi.fn(),
  },
}));

describe('fetchGoogle', () => {
  let sema: { signal: Mock; waitForever: Mock };

  beforeEach(() => {
    sema = {
      signal: vi.fn(),
      waitForever: vi.fn(),
    };
    semaState.signal = sema.signal;
    semaState.waitForever = sema.waitForever;
    vi.clearAllMocks();
  });

  it('prints data when fetch resolves with data', async () => {
    const mockData = Buffer.from('hello');
    fetchMock.mockResolvedValue({ data: mockData as unknown as NSData });
    (string.stringWithData as Mock).mockReturnValue('hello');
    sema.waitForever.mockReturnValueOnce(0);

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
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

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const { default: fetchGoogle } = await import('./fetch-google-command');

    fetchGoogle();
    await Promise.resolve();

    expect(unistd.sleep).toHaveBeenCalledWith(1);
    logSpy.mockRestore();
  });

  it('prints error when fetch rejects', async () => {
    fetchMock.mockRejectedValue(new Error('fail'));
    sema.waitForever.mockReturnValueOnce(0);

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
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
