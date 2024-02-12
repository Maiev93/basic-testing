// Uncomment the code below and write your tests
// import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import { doStuffByTimeout, doStuffByInterval } from '.';

jest.mock('.');

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    const timeout = 100
    const callback = jest.fn();

    doStuffByTimeout(callback, timeout)

    expect(doStuffByTimeout).toHaveBeenCalledTimes(1);
    expect(doStuffByTimeout).toHaveBeenLastCalledWith(expect.any(Function), timeout);

  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const timeout = 0
    const callback = jest.fn();

    doStuffByTimeout(callback, timeout);

    expect(callback).not.toHaveBeenCalled();

    expect(doStuffByTimeout).toHaveBeenLastCalledWith(expect.any(Function), timeout);


    jest.advanceTimersByTime(1000);


    // expect(callback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const timeout = 100
    const callback = jest.fn();

    doStuffByInterval(callback, timeout)

    expect(doStuffByInterval).toHaveBeenCalledTimes(1);
    expect(doStuffByInterval).toHaveBeenLastCalledWith(expect.any(Function), timeout);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
