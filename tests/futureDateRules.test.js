"use strict";

const { weekRules, monthRules, yearRules, dayRules, courtDayRules } = require('../public/modules/rules/futureDateRules');

describe ('test weekRules', () => {

  test('weekRules()', () => {
    expect(Array.isArray(weekRules)).toBe(true);
  });

  test('monthRules()', () => {
    expect(Array.isArray(monthRules)).toBe(true);
  });

  test('yearRules()', () => {
    expect(Array.isArray(yearRules)).toBe(true);
  });

  test('dayRules()', () => {
    expect(Array.isArray(dayRules)).toBe(true);
  });

  test('courtDayRules()', () => {
    expect(Array.isArray(courtDayRules)).toBe(true);
  });

});