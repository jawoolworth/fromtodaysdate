"use strict";

const {
  futureDateRule,
  PERIOD,
  createFutureDatesArray,
} = require("../public/modules/utils/futureDateUtils");
const { holidayRules } = require("../public/modules/rules/holidayRules");
const { createHolidays } = require("../public/modules/utils/holidayUtils");
const {
  weekRules,
  monthRules,
  yearRules,
  dayRules,
  courtDayRules,
} = require("../public/modules/rules/futureDateRules");
const { dateFormatter } = require("../public/modules/utils/dateUtils");

const holidays = createHolidays(holidayRules, 2020);

describe("futureDateUtils tests", () => {
  test("futureDateRule() with PERIOD.weeks", () => {
    let rule = new futureDateRule(PERIOD.weeks, 1);
    expect(rule.period).toBe(1);
  });

  test("futureDateRule() with PERIOD.months", () => {
    let rule = new futureDateRule(PERIOD.months, 1);
    expect(rule.period).toBe(2);
  });

  test("futureDateRule() with PERIOD.years", () => {
    let rule = new futureDateRule(PERIOD.years, 1);
    expect(rule.period).toBe(3);
  });

  test("futureDateRule() with PERIOD.days", () => {
    let rule = new futureDateRule(PERIOD.days, 1);
    expect(rule.period).toBe(4);
  });

  test("futureDateRule() with PERIOD.courtDays", () => {
    let rule = new futureDateRule(PERIOD.courtDays, 1);
    expect(rule.period).toBe(5);
  });

  test("futureDateRule() with period is null", () => {
    function badRule() {
      let rule = new futureDateRule(null, 1);
    }

    expect(badRule).toThrowError("period not of object PERIOD type");
  });

  test("futureDateRule() with period is 6", () => {
    function badRule() {
      let rule = new futureDateRule(6, 1);
    }

    expect(badRule).toThrowError("period not of object PERIOD type");
  });

  test("futureDateRule() with period is 0", () => {
    function badRule() {
      let rule = new futureDateRule(0, 1);
    }

    expect(badRule).toThrowError("period not of object PERIOD type");
  });

  test("futureDateRule() with period is undefined", () => {
    function badRule() {
      let rule = new futureDateRule(undefined, 1);
    }

    expect(badRule).toThrowError("period not of object PERIOD type");
  });

  test("futureDateRule(weeks, 1)", () => {
    let rule = new futureDateRule(PERIOD.weeks, 1);

    expect.objectContaining({
      period: 1,
      numberOfPeriods: 1,
      name: "1 week",
    });
  });

  test("futureDateRule(weeks, 2)", () => {
    let rule = new futureDateRule(PERIOD.weeks, 2);

    expect.objectContaining({
      period: 1,
      numberOfPeriods: 2,
      name: "2 weeks",
    });
  });

  test("futureDateRule(months, 1)", () => {
    let rule = new futureDateRule(PERIOD.months, 1);

    expect.objectContaining({
      period: 2,
      numberOfPeriods: 1,
      name: "1 month",
    });
  });

  test("futureDateRule(months, 2)", () => {
    let rule = new futureDateRule(PERIOD.months, 2);

    expect.objectContaining({
      period: 2,
      numberOfPeriods: 2,
      name: "2 months",
    });
  });

  test("futureDateRule(years, 1)", () => {
    let rule = new futureDateRule(PERIOD.years, 1);

    expect.objectContaining({
      period: 3,
      numberOfPeriods: 1,
      name: "1 year",
    });
  });

  test("futureDateRule(years, 2)", () => {
    let rule = new futureDateRule(PERIOD.years, 2);

    expect.objectContaining({
      period: 3,
      numberOfPeriods: 2,
      name: "2 years",
    });
  });

  test("futureDateRule(days, 1)", () => {
    let rule = new futureDateRule(PERIOD.days, 1);

    expect.objectContaining({
      period: 4,
      numberOfPeriods: 1,
      name: "1 day",
    });
  });

  test("futureDateRule(days, 2)", () => {
    let rule = new futureDateRule(PERIOD.days, 2);

    expect.objectContaining({
      period: 4,
      numberOfPeriods: 2,
      name: "2 days",
    });
  });

  test("futureDateRule(courtDays, 1)", () => {
    let rule = new futureDateRule(PERIOD.courtDays, 1);

    expect.objectContaining({
      period: 5,
      numberOfPeriods: 1,
      name: "1 court day",
    });
  });

  test("futureDateRule(courtDays, 2)", () => {
    let rule = new futureDateRule(PERIOD.courtDays, 2);

    expect.objectContaining({
      period: 5,
      numberOfPeriods: 2,
      name: "2 court days",
    });
  });

  test("createFutureDatesArray(weekRules)", () => {
    let futureDates = createFutureDatesArray(
      new Date(Date.now()),
      weekRules,
      createHolidays(holidayRules, new Date(Date.now()).getFullYear)
    );

    expect(Array.isArray(futureDates)).toBe(true);
  });

  test("createFutureDatesArray(monthRules)", () => {
    let futureDates = createFutureDatesArray(
      new Date(Date.now()),
      monthRules,
      createHolidays(holidayRules, new Date(Date.now()).getFullYear)
    );

    expect(Array.isArray(futureDates)).toBe(true);
  });

  test("createFutureDatesArray(yearRules)", () => {
    let futureDates = createFutureDatesArray(
      new Date(Date.now()),
      yearRules,
      createHolidays(holidayRules, new Date(Date.now()).getFullYear)
    );

    expect(Array.isArray(futureDates)).toBe(true);
  });

  test("createFutureDatesArray(dayRules)", () => {
    let futureDates = createFutureDatesArray(
      new Date(Date.now()),
      dayRules,
      createHolidays(holidayRules, new Date(Date.now()).getFullYear)
    );

    expect(Array.isArray(futureDates)).toBe(true);
  });

  test("createFutureDatesArray(courtDayRules)", () => {
    let futureDates = createFutureDatesArray(
      new Date(Date.now()),
      courtDayRules,
      createHolidays(holidayRules, new Date(Date.now()).getFullYear)
    );

    expect(Array.isArray(futureDates)).toBe(true);
  });

  test("createFutureDatesArray(dayRules) include holidays", () => {
    let futureDates = createFutureDatesArray(
      new Date(Date.now()),
      dayRules,
      holidays
    );

    let futureDateIsHoliday = false;

    futureDates.forEach((futureDate) => {
      holidays.forEach((holiday) => {
        if (futureDate.date === dateFormatter(holiday)) {
          futureDateIsHoliday = true;
        }
      });
    });

    expect(futureDateIsHoliday).toBe(false);
  });

  test("createFutureDatesArray(weekRules): calculated date falls on holiday ", () => {
    let today = new Date(2020, 7, 19); // 8/19/2020
    let testHolidays = [
      new Date(2020, 7, 26), // holiday 1 day from today, future date should be 8/27/2020
    ];

    let futureDates = createFutureDatesArray(today, weekRules, testHolidays);

    expect(futureDates[0].date).toBe("Thursday, August 27, 2020");
  });

  test("createFutureDatesArray(weekRules): calculated date falls on friday holiday ", () => {
    let today = new Date(2020, 7, 21); // 8/21/2020
    let testHolidays = [
      new Date(2020, 7, 28), // holiday 1 day from today, future date should be 8/31/2020
    ];

    let futureDates = createFutureDatesArray(today, weekRules, testHolidays);

    expect(futureDates[0].date).toBe("Monday, August 31, 2020");
  });

  test("createFutureDatesArray(weekRules): calculated date falls on thursday holiday with a following Friday Holiday", () => {
    let today = new Date(2020, 7, 20); // 8/21/2020
    let testHolidays = [
      new Date(2020, 7, 27), // holiday 1 day from today, future date should be 8/31/2020
      new Date(2020, 7, 28),
    ];

    let futureDates = createFutureDatesArray(today, weekRules, testHolidays);

    expect(futureDates[0].date).toBe("Monday, August 31, 2020");
  });
});
