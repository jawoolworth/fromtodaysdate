const express = require("express");
const router = express.Router();
const { dateFormatter } = require("../public/modules/utils/dateUtils");
const { createHolidays } = require("../public/modules/utils/holidayUtils");
const {
  createFutureDatesArray,
} = require("../public/modules/utils/futureDateUtils");
const { holidayRules } = require("../public/modules/rules/holidayRules");
const {
  weekRules,
  monthRules,
  yearRules,
  dayRules,
  courtDayRules,
} = require("../public/modules/rules/futureDateRules");

//======================================================
//                  Routes
//======================================================
// root route
router.get("/", function (req, res) {
  const todayformatted = dateFormatter(new Date(Date.now()));
  const today = new Date(Date.now());
  const holidays = createHolidays(holidayRules, today.getFullYear());
  const weeks = createFutureDatesArray(today, weekRules, holidays);
  const months = createFutureDatesArray(today, monthRules, holidays);
  const years = createFutureDatesArray(today, yearRules, holidays);
  const days = createFutureDatesArray(today, dayRules, holidays);
  const courtDays = createFutureDatesArray(today, courtDayRules, holidays);
  res.render("index", {
    today: todayformatted,
    weeks: weeks,
    months: months,
    years: years,
    days: days,
    courtDays: courtDays,
  });
});

module.exports = router;
