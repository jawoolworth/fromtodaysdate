require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const flash = require("connect-flash");

// requiring routes
const indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

app.use(indexRoutes);

//=======================
//      START SERVER
//=======================
app.listen(process.env.PORT, function () {
  console.log("The Workday server is listening at port " + process.env.PORT);
});
