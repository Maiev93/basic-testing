// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    try {
      await resolveValue('resolved');
    } catch (error) {
      expect(error).toThrow();
    }
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const msg = 'my error message'
    expect(() => throwError(msg)).toThrow(msg);
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    expect(throwError).toThrow(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    try {
      await rejectCustomError();
    } catch (error) {
      expect(rejectCustomError).rejects.toThrow(MyAwesomeError);
    }
  });
});
