import { render, screen } from '@testing-library/react';
import calculate from './logic/calculate';
import operate from './logic/operate';

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

  test('total should be null if clicked button "0" & previous value is "0"', () => {
    const buttonName = '0';
    const obj = {
      total: null,
      next: 0,
      operation: null,
    };
    const calculatedValue = calculate(obj, buttonName);
    expect(calculatedValue.total).toBeNull();
  });

  test('should return float number WITHOUT decimal when object next & operation "." is present', () => {
    const buttonName = '.';
    const obj = {
      total: null,
      next: '3',
      operation: null,
    };

    const output = '3.';
    const calculatedValue = calculate(obj, buttonName);
    expect(calculatedValue.next).toBe(output);
  });

  test('should return float number WITH decimal when total & "." is present', () => {
    const buttonName = '4';
    const obj = {
      total: null,
      next: '3.',
      operation: null,
    };
    const calculatedValue = calculate(obj, buttonName);
    const output = '3.4';
    expect(calculatedValue.next).toEqual(output);
  });

  test('should return undefined; if all object values are null & operation is: "="', () => {
    const buttonName = '=';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const calculatedValue = calculate(obj, buttonName);
    const output = calculatedValue.length;
    expect(output).toBeUndefined();
  });
});
