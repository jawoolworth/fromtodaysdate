require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const dateUtils = require('./public/modules/dateFunctions');
const holidayUtils = require('./public/modules/holidays');
const HOLIDAYS = require('./tests/holidayConstants');

// requiring routes
const indexRoutes = require("./routes/index");
    //   commentRoutes = require("./routes/comments"),
    //   campgroundRoutes = require("./routes/campgrounds");

const URL = process.env.DATABASEURL || "mongodb://localhost/workday";
mongoose.connect(URL, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));  
// colt's code is: app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

//=====================================================
//                PASSPORT CONFIG
//=====================================================

// app.use(require("express-session")({
//     secret: "Making YelpCamp for my Princess Bug",
//     resave: false,
//     saveUninitialized: false
//   }));
  
//   app.use(passport.initialize());
//   app.use(passport.session());
//   passport.use(new LocalStrategy(User.authenticate()));
//   passport.serializeUser(User.serializeUser());
//   passport.deserializeUser(User.deserializeUser());
  
  
  // adds currentUser variable to partials
  // refactor to send variable in partial include statement - see header login message
//   app.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
//   });
  
  //using required routes
  app.use(indexRoutes);
//   app.use("/campgrounds", campgroundRoutes);
//   app.use("/campgrounds/:id/comments", commentRoutes);
  
  //=======================
  //      START SERVER
  //=======================
  app.listen(process.env.PORT, function(){
    console.log("The Workday server is listening at port " + process.env.PORT);
  });  