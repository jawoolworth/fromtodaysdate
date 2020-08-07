const dateHelper = require('../public/modules/dateFunctions.js');

let date = new Date(2020,6,30);


test("test addDays function: today + 3 = 8/3/2020 falls on Saturday and moves to Monday", function() {
    expect(dateHelper.addDays(date, 3).toString()).toBe(new Date(2020,7,3).toString());
});  // months are 0 based, so 7 is August

test("test addDays function: today + 4 = 8/3/2020", function() {
    expect(dateHelper.addDays(date, 3).toString()).toBe(new Date(2020,7,3).toString());
});  // months are 0 based, so 7 is August

test("test addWeeks function: saturday + 1 = 8/8/2020 - falls on Saturday and moves to Monday", () => {
    expect(dateHelper.addWeeks(new Date(2020,7,1),1).toString()).toBe(new Date(2020,7,10).toString());
});

test("test addWeeks function: today + 1 = 8/6/2020", () => {
    expect(dateHelper.addWeeks(date,1).toString()).toBe(new Date(2020,7,6).toString());
});

test("test addMonths function: 7/1/20 + 1 month = 8/3/20 - falls on Saturday and moves to Monday", () => {
    expect(dateHelper.addMonths(new Date(2020,6,1),1).toString()).toBe(new Date(2020,7,3).toString());
});

test("test addMonths function: 7/28/20 + 1 month = 8/28/20", () => {
    expect(dateHelper.addMonths(new Date(2020,6,28),1).toString()).toBe(new Date(2020,7,28).toString());
});

test("test addYears function: 7/25/19 + 1 year = 7/27/20 - falls on Saturday and moves to Monday", () => {
    expect(dateHelper.addYears(new Date(2019,6,25),1).toString()).toBe(new Date(2020,6,27).toString());
});

test("test addYears function: 7/31/19 + 1 year = 7/31/20", () => {
    expect(dateHelper.addYears(new Date(2019,6,31),1).toString()).toBe(new Date(2020,6,31).toString());
});

test("test addCourtDays function: 7/31/20 + 5 work days = 8/7/20", () => {
    expect(dateHelper.addCourtDays(new Date(2020,6,31),5).toString()).toBe(new Date(2020,7,7).toString());
});

test("test addCourtDays function: 7/31/20 + 1 work days = 8/3/20", () => {
    expect(dateHelper.addCourtDays(new Date(2020,6,31),1).toString()).toBe(new Date(2020,7,3).toString());
});

test("test addCourtDays function: 7/31/20 + 6 work days = 8/10/20", () => {
    expect(dateHelper.addCourtDays(new Date(2020,6,31),6).toString()).toBe(new Date(2020,7,10).toString());
});

test("test isWeekend function: 7/19/20 = true (Sunday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,19))).toBe(true);
});

test("test isWeekend function: 7/20/20 = false (Monday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,20))).toBe(false);
});

test("test isWeekend function: 7/21/20 = false (Tuesday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,21))).toBe(false);
});

test("test isWeekend function: 7/22/20 = false (Wednesday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,22))).toBe(false);
});

test("test isWeekend function: 7/23/20 = false (Thursday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,23))).toBe(false);
});

test("test isWeekend function: 7/24/20 = false (Friday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,24))).toBe(false);
});

test("test isWeekend function: 7/25/20 = true (Saturday)", () => {
    expect(dateHelper.isWeekend(new Date(2020,6,25))).toBe(true);
});

test("test dateFormatter function: 7/31/20 = Friday, July 31, 2020", () => {
    expect(dateHelper.dateFormatter(new Date(2020, 6, 31))).toBe("Friday, July 31, 2020");
});

// console.log("test addCourtDays");
// console.log("=====================");
// for (let i = 0; i < 10; i++) {
//     console.log(dateHelper.dateFormatter(dateHelper.addCourtDays(date, i * 4)));
// }

// console.log("\ntest addDays");
// console.log("=====================");
// for (let i = 0; i < 10; i++) {
//     console.log(dateHelper.dateFormatter(dateHelper.addDays(date, i * 4)));
// }

// console.log("\ntest addWeeks");
// console.log("=====================");
// for (let i = 0; i < 10; i++) {
//     console.log(dateHelper.dateFormatter(dateHelper.addWeeks(date, i * 4)));
// }

// console.log("\ntest addMonths");
// console.log("=====================");
// for (let i = 0; i < 10; i++) {
//     console.log(dateHelper.dateFormatter(dateHelper.addMonths(date, i)));
// }

// console.log("\ntest addYears");
// console.log("=====================");
// for (let i = 0; i < 10; i++) {
//     console.log(dateHelper.dateFormatter(dateHelper.addYears(date, i * 4)));
// }