const express = require("express");
const router = express.Router();
const passport = require("passport");
const { addCourtDays, addDays, addWeeks, addMonths, addYears, isWeekend, dateFormatter, WEEKEND, daysOfWeek, months } = require('../public/modules/utils/dateUtils');
const { createHoliday, HolidayRule, dateSpecificRule, weekdaySpecificRule, createHolidays } = require('../public/modules/utils/holidayUtils');
const { newYearsDays, mlkDays, lincolnDays, presidentsDays, cesarChavezDays, memorialDays, 
  independenceDays, laborDays, columbusDays, veteransDays, thanksgivingDays, dayAfterThanksgivingDays, christmasDays } = require('../public/modules/dates/holidayConstants');
const { futureDateRule, PERIOD, createFutureDatesArray } = require('../public/modules/utils/futureDateUtils');
const { holidayRules } = require('../public/modules/rules/holidayRules');
const { weekRules, monthRules, yearRules, dayRules, courtDayRules } = require('../public/modules/rules/futureDateRules');
//======================================================
//                  Routes
//======================================================
// root route
router.get("/", function(req, res) {
  const todayformatted = dateFormatter(new Date(Date.now()));
  const today = new Date(Date.now());
  const holidays = createHolidays(holidayRules, today.getFullYear());
  const weeks = createFutureDatesArray(today, weekRules, holidays);
  const months = createFutureDatesArray(today, monthRules, holidays);
  const years = createFutureDatesArray(today, yearRules, holidays);
  const days = createFutureDatesArray(today, dayRules, holidays);
  const courtDays = createFutureDatesArray(today, courtDayRules, holidays);
  res.render("index", {today: todayformatted, weeks: weeks, months: months, years: years, days: days, courtDays: courtDays});
});

//=================================
//    AUTH ROUTES
//=================================

// SHOW REGISTER FORM
// router.get("/register", (req, res) => {
//   res.render("register", {currentUser: req.user});
// });

// HANDLE REGISTER LOGIC
// router.post("/register", (req, res) => {
//   let newUser = new User({username: req.body.username});
//   User.register(newUser, req.body.password, (err, user) => {
//     if (err) {
//       return res.render("register", {currentUser: req.user, error: err.message});
//     }
//     passport.authenticate('local')(req, res, () => {
//       res.redirect("/campgrounds");
//     });
//   });
// });

// SHOW LOGIN FORM
// router.get("/login", (req, res) => {
//   // console.log("from login route: " + req.flash("error"));
//   res.render("login", {currentUser: req.user});
// });

// HANDLE LOGIN LOGIC
// router.post("/login", passport.authenticate("local", {
//     successRedirect: "/campgrounds",
//     failureRedirect: "/login"
//   }), (req, res) => {
// });

//LOGOUT ROUTE
// router.get("/logout", (req, res) => {
//   req.logOut();  //comes from passport
//   req.flash("success", "You are now logged out.");
//   res.redirect("/campgrounds");
// });

module.exports = router;