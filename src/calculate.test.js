import { render, screen } from '@testing-library/react';
import calculate from './logic/calculate';

describe('checks isNumber function', () => {
  function isNumber(item) {
    return !!item.match(/[0-9]+/);
  }

  test('when given value is a number', () => {
    const num = '6';
    expect(isNumber(num)).toBeTruthy();
  });

  test('given value is a number or not', () => {
    const nan = '+/-';
    expect(isNumber(nan)).toBeFalsy();
  });
});

describe('checks the calculate.js function in logic', () => {
  test('if AC button clicked return value should be null', () => {
    const buttonName = 'AC';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const calculatedValue = calculate(obj, buttonName);
    expect(calculatedValue.next).toBeNull();
  });

  test('if AC button clicked return value should be null', () => {
    const buttonName = 'AC';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const calculatedValue = calculate(obj, buttonName);
    expect(calculatedValue.next).toBeNull();
  });
});
