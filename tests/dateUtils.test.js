const {
  addCourtDays,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isWeekend,
  dateFormatter,
  WEEKEND,
  daysOfWeek,
  months,
} = require("../public/modules/utils/dateUtils");

let date = new Date(2020, 6, 30);

test("test addDays function: 7/30/2020 + 3 = 8/3/2020 falls on Saturday and moves to Monday", function () {
  expect(addDays(date, 3).toString()).toBe(new Date(2020, 7, 3).toString());
}); // months are 0 based, so 7 is August

test("test addDays function: 7/30/2020 + 4 = 8/3/2020", function () {
  expect(addDays(date, 3).toString()).toBe(new Date(2020, 7, 3).toString());
}); // months are 0 based, so 7 is August

test("test addWeeks function: saturday + 1 = 8/8/2020 - falls on Saturday and moves to Monday", () => {
  expect(addWeeks(new Date(2020, 7, 1), 1).toString()).toBe(
    new Date(2020, 7, 10).toString()
  );
});

test("test addWeeks function: today + 1 = 8/6/2020", () => {
  expect(addWeeks(date, 1).toString()).toBe(new Date(2020, 7, 6).toString());
});

test("test addMonths function: 7/1/20 + 1 month = 8/3/20 - falls on Saturday and moves to Monday", () => {
  expect(addMonths(new Date(2020, 6, 1), 1).toString()).toBe(
    new Date(2020, 7, 3).toString()
  );
});

test("test addMonths function: 7/28/20 + 1 month = 8/28/20", () => {
  expect(addMonths(new Date(2020, 6, 28), 1).toString()).toBe(
    new Date(2020, 7, 28).toString()
  );
});

test("test addYears function: 7/25/19 + 1 year = 7/27/20 - falls on Saturday and moves to Monday", () => {
  expect(addYears(new Date(2019, 6, 25), 1).toString()).toBe(
    new Date(2020, 6, 27).toString()
  );
});

test("test addYears function: 7/31/19 + 1 year = 7/31/20", () => {
  expect(addYears(new Date(2019, 6, 31), 1).toString()).toBe(
    new Date(2020, 6, 31).toString()
  );
});

test("test addCourtDays function: 7/31/20 + 5 work days = 8/7/20", () => {
  expect(addCourtDays(new Date(2020, 6, 31), 5).toString()).toBe(
    new Date(2020, 7, 7).toString()
  );
});

test("test addCourtDays function: 7/31/20 + 1 work days = 8/3/20", () => {
  expect(addCourtDays(new Date(2020, 6, 31), 1).toString()).toBe(
    new Date(2020, 7, 3).toString()
  );
});

test("test addCourtDays function: 7/31/20 + 6 work days = 8/10/20", () => {
  expect(addCourtDays(new Date(2020, 6, 31), 6).toString()).toBe(
    new Date(2020, 7, 10).toString()
  );
});

test("test isWeekend function: 7/19/20 = true (Sunday)", () => {
  expect(isWeekend(new Date(2020, 6, 19))).toBe(true);
});

test("test isWeekend function: 7/20/20 = false (Monday)", () => {
  expect(isWeekend(new Date(2020, 6, 20))).toBe(false);
});

test("test isWeekend function: 7/21/20 = false (Tuesday)", () => {
  expect(isWeekend(new Date(2020, 6, 21))).toBe(false);
});

test("test isWeekend function: 7/22/20 = false (Wednesday)", () => {
  expect(isWeekend(new Date(2020, 6, 22))).toBe(false);
});

test("test isWeekend function: 7/23/20 = false (Thursday)", () => {
  expect(isWeekend(new Date(2020, 6, 23))).toBe(false);
});

test("test isWeekend function: 7/24/20 = false (Friday)", () => {
  expect(isWeekend(new Date(2020, 6, 24))).toBe(false);
});

test("test isWeekend function: 7/25/20 = true (Saturday)", () => {
  expect(isWeekend(new Date(2020, 6, 25))).toBe(true);
});

test("test dateFormatter function: 7/31/20 = Friday, July 31, 2020", () => {
  expect(dateFormatter(new Date(2020, 6, 31))).toBe("Friday, July 31, 2020");
});
