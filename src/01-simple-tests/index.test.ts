// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const numObj = {
      a: 7,
      b: 9,
      action: Action.Add,
    }
    expect(simpleCalculator(numObj)).toBe(16)
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const numObj = {
      a: 9,
      b: 7,
      action: Action.Subtract,
    }
    expect(simpleCalculator(numObj)).toBe(2)
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const numObj = {
      a: 7,
      b: 9,
      action: Action.Multiply,
    }
    expect(simpleCalculator(numObj)).toBe(63)
  });

  test('should divide two numbers', () => {
    // Write your test here
    const numObj = {
      a: 9,
      b: 3,
      action: Action.Divide,
    }
    expect(simpleCalculator(numObj)).toBe(3)
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const numObj = {
      a: 5,
      b: 2,
      action: Action.Exponentiate,
    }
    expect(simpleCalculator(numObj)).toBe(25)
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const numObj = {
      a: 7,
      b: 9,
      action: 'log',
    }
    expect(simpleCalculator(numObj)).toBeNull()
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const numObj = {
      a: "7",
      b: "add",
      action: Action.Add,
    }
    expect(simpleCalculator(numObj)).toBeNull()
  });
});
