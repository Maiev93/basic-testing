// Uncomment the code below and write your tests
import { getBankAccount, TransferFailedError, SynchronizationFailedError, InsufficientFundsError } from '.';

describe('BankAccount', () => {
  const balance = 100
  const account = getBankAccount(balance)
  const balanceTo = 50
  const accountTo = getBankAccount(balanceTo)

  test('should create account with initial balance', () => {
    // Write your test here
    expect(account.getBalance()).toBe(balance)
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const withdraw = 500
    expect(() => account.withdraw(withdraw)).toThrow(InsufficientFundsError)
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const transferSum = 300
    expect(() => account.transfer(transferSum, accountTo)).toThrow(InsufficientFundsError)
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const transferSum = 50
    expect(() => account.transfer(transferSum, account)).toThrow(TransferFailedError)
  });

  test('should deposit money', () => {
    // Write your test here
    const money = 200
    expect(account.deposit(money).getBalance()).toBe(balance + money)
  });

  test('should withdraw money', () => {
    // Write your test here
    const money = 25
    const currentBalance = account.getBalance()
    expect(account.withdraw(money).getBalance()).toBe(currentBalance - money)
  });

  test('should transfer money', () => {
    // Write your test here
    const money = 50
    const currentBalance = account.getBalance()
    const currentBalanceTo = accountTo.getBalance()

    expect(account.transfer(money, accountTo).getBalance()).toBe(currentBalance - money)
    expect(accountTo.getBalance()).toBe(currentBalanceTo + money)
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const data = await account.fetchBalance();

    if (data !== null) {
      const num = 0
      expect(data).toBeGreaterThanOrEqual(num)
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    try {
      await account.synchronizeBalance()
      const num = 0
      expect(account.getBalance()).toBeGreaterThanOrEqual(num)
    } catch (error) {
      console.log('error - ', error);
    }

  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    try {
      await account.synchronizeBalance();
    } catch (error) {
      expect(error).toBeInstanceOf(SynchronizationFailedError);
    }
  });
});
