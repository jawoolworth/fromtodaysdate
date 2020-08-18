const {
  dateSpecificRule,
  weekdaySpecificRule,
} = require("../utils/holidayUtils");

const newYearsDayRule = new dateSpecificRule(0, 1);
const mlkDayRule = new weekdaySpecificRule(0, 1, 3, null);
const lincolnDayRule = new dateSpecificRule(1, 12);
const presidentDayRule = new weekdaySpecificRule(1, 1, 3, null);
const chavezDayRule = new dateSpecificRule(2, 31);
const memorialDayRule = new weekdaySpecificRule(4, 1, 6, null);
const independenceDayRule = new dateSpecificRule(6, 4);
const laborDayRule = new weekdaySpecificRule(8, 1, 1, null);
const columbusDayRule = new weekdaySpecificRule(9, 1, 2, null);
const veteransDayRule = new dateSpecificRule(10, 11);
const thanksgivingDayRule = new weekdaySpecificRule(10, 4, 4, null);
const dayAfterThanksgivingDayRule = new weekdaySpecificRule(10, 4, 4, 1);
const christmasDayRule = new dateSpecificRule(11, 25);

let holidayRules = [
  newYearsDayRule,
  mlkDayRule,
  lincolnDayRule,
  presidentDayRule,
  chavezDayRule,
  memorialDayRule,
  independenceDayRule,
  laborDayRule,
  columbusDayRule,
  veteransDayRule,
  thanksgivingDayRule,
  dayAfterThanksgivingDayRule,
  christmasDayRule,
];

module.exports = { holidayRules };
