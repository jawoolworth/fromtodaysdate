const express = require("express");
const router = express.Router();
const passport = require("passport");
const dateUtils = require('../public/modules/dateFunctions');
const holidayUtils = require('../public/modules/holidays');
const HOLIDAYS = require('../tests/holidayConstants');


const year = new Date(Date.now()).getFullYear();
const holidayDates = [];
const holidayRules = HOLIDAYS.holidayRules;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < holidayRules.length; j++) {
    holidayDates.push(holidayUtils.createHoliday(holidayRules[j], year + i));
  }
}

console.log(holidayDates);

//======================================================
//                  Routes
//======================================================
// root route
router.get("/", function(req, res) {
  const today = dateUtils.dateFormatter(new Date(Date.now()));
  res.render("index", {today: today});
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