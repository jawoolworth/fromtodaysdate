const { futureDateRule, PERIOD } = require("../utils/futureDateUtils");

const oneWeeks = new futureDateRule(PERIOD.weeks, 1);
const twoWeeks = new futureDateRule(PERIOD.weeks, 2);
const threeWeeks = new futureDateRule(PERIOD.weeks, 3);
const fourWeeks = new futureDateRule(PERIOD.weeks, 4);
const sixWeeks = new futureDateRule(PERIOD.weeks, 6);

const oneMonths = new futureDateRule(PERIOD.months, 1);
const twoMonths = new futureDateRule(PERIOD.months, 2);
const threeMonths = new futureDateRule(PERIOD.months, 3);
const fourMonths = new futureDateRule(PERIOD.months, 4);
const fiveMonths = new futureDateRule(PERIOD.months, 5);
const sixMonths = new futureDateRule(PERIOD.months, 6);
const nineMonths = new futureDateRule(PERIOD.months, 9);
const elevenMonths = new futureDateRule(PERIOD.months, 11);
const eighteenMonths = new futureDateRule(PERIOD.months, 18);
const thirtyMonths = new futureDateRule(PERIOD.months, 30);

const oneYears = new futureDateRule(PERIOD.years, 1);
const twoYears = new futureDateRule(PERIOD.years, 2);

const tenDays = new futureDateRule(PERIOD.days, 10);
const twentyDays = new futureDateRule(PERIOD.days, 20);
const thirtyDays = new futureDateRule(PERIOD.days, 30);
const fortyFiveDays = new futureDateRule(PERIOD.days, 45);
const sixtyDays = new futureDateRule(PERIOD.days, 60);
const ninetyDays = new futureDateRule(PERIOD.days, 90);
const oneHundredTwentyDays = new futureDateRule(PERIOD.days, 120);
const oneHundredSixtyDays = new futureDateRule(PERIOD.days, 160);
const oneHundredEightyDays = new futureDateRule(PERIOD.days, 180);

const tenCourtDays = new futureDateRule(PERIOD.courtDays, 10);
const twentyCourtDays = new futureDateRule(PERIOD.courtDays, 20);

let weekRules = [];
weekRules.push(oneWeeks);
weekRules.push(twoWeeks);
weekRules.push(threeWeeks);
weekRules.push(fourWeeks);
weekRules.push(sixWeeks);

let monthRules = [];
monthRules.push(oneMonths);
monthRules.push(twoMonths);
monthRules.push(threeMonths);
monthRules.push(fourMonths);
monthRules.push(fiveMonths);
monthRules.push(sixMonths);
monthRules.push(nineMonths);
monthRules.push(elevenMonths);
monthRules.push(eighteenMonths);
monthRules.push(thirtyMonths);

let yearRules = [];
yearRules.push(oneYears);
yearRules.push(twoYears);

let dayRules = [];
dayRules.push(tenDays);
dayRules.push(twentyDays);
dayRules.push(thirtyDays);
dayRules.push(fortyFiveDays);
dayRules.push(sixtyDays);
dayRules.push(ninetyDays);
dayRules.push(oneHundredTwentyDays);
dayRules.push(oneHundredSixtyDays);
dayRules.push(oneHundredEightyDays);

let courtDayRules = [];
courtDayRules.push(tenCourtDays);
courtDayRules.push(twentyCourtDays);

module.exports = { weekRules, monthRules, yearRules, dayRules, courtDayRules };
