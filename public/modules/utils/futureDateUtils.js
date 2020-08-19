const {
  addCourtDays,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  dateFormatter,
} = require("./dateUtils");

const PERIOD = {
  weeks: 1,
  months: 2,
  years: 3,
  days: 4,
  courtDays: 5,
};

Object.freeze(PERIOD);

function futureDateRule(period, numberOfPeriods) {
  if (period >= 1 && period <= 5) {
    this.period = period;
  } else {
    throw "period not of object PERIOD type";
  }
  if (numberOfPeriods >= 0) {
    this.numberOfPeriods = numberOfPeriods;
  } else {
    throw "numberOfPeriods is less than zero, null or undefined";
  }
  switch (period) {
    case 1:
      if (numberOfPeriods > 1) {
        this.name = numberOfPeriods + " weeks";
      } else {
        this.name = numberOfPeriods + " week";
      }
      break;
    case 2:
      if (numberOfPeriods > 1) {
        this.name = numberOfPeriods + " months";
      } else {
        this.name = numberOfPeriods + " month";
      }
      break;
    case 3:
      if (numberOfPeriods > 1) {
        this.name = numberOfPeriods + " years";
      } else {
        this.name = numberOfPeriods + " year";
      }
      break;
    case 4:
      if (numberOfPeriods > 1) {
        this.name = numberOfPeriods + " days";
      } else {
        this.name = numberOfPeriods + " day";
      }
      break;
    case 5:
      if (numberOfPeriods > 1) {
        this.name = numberOfPeriods + " court days";
      } else {
        this.name = numberOfPeriods + " court day";
      }
      break;
    default:
      throw "invalid period:  period is not of object type PERIOD";
  }
}

function isDateHoliday(date, holidays) {
  let isHoliday = false;

  // if (
  //   dateFormatter(date) === "Monday, February 15, 2021" ||
  //   dateFormatter(date) === "Monday, September 7, 2020"
  // ) {
  //   console.log("\nin isDateHoliday");
  //   console.log("date: " + dateFormatter(date));
  //   console.log("holidays");
  //   console.log(holidays);
  // }

  holidays.forEach((holiday) => {
    // if (
    //   (dateFormatter(holiday) === "Monday, February 15, 2021" ||
    //     dateFormatter(holiday) === "Monday, September 7, 2020") &&
    //   (dateFormatter(date) === "Monday, February 15, 2021" ||
    //     dateFormatter(date) === "Monday, September 7, 2020")
    // ) {
    //   // console.log("\nin isDateHoliday");
    //   console.log("\ndate: " + dateFormatter(date));
    //   console.log("holiday: " + dateFormatter(holiday));
    //   console.log(dateFormatter(date) === dateFormatter(holiday));
    //   // console.log(holidays);
    // }
    if (dateFormatter(date) === dateFormatter(holiday)) {
      // console.log("\nIn If statement");
      // console.log("date: " + dateFormatter(date));
      // console.log("holiday: " + dateFormatter(holiday));
      isHoliday = true;
    }
  });

  // if (
  //   dateFormatter(date) === "Monday, February 15, 2021" ||
  //   dateFormatter(date) === "Monday, September 7, 2020"
  // ) {
  //   console.log(">>> date is either 2/15/21 or 9/7/20");
  //   console.log(">>> isHoliday = " + isHoliday);
  // }
  return isHoliday;
}

function createFutureDatesArray(today, futureDateRules, holidays) {
  let array = [];
  let futureDate;

  for (let i = 0; i < futureDateRules.length; i++) {
    switch (futureDateRules[i].period) {
      case PERIOD.weeks:
        futureDate = addWeeks(today, futureDateRules[i].numberOfPeriods);
        break;
      case PERIOD.months:
        futureDate = addMonths(today, futureDateRules[i].numberOfPeriods);
        break;
      case PERIOD.years:
        futureDate = addYears(today, futureDateRules[i].numberOfPeriods);
        break;
      case PERIOD.days:
        futureDate = addDays(today, futureDateRules[i].numberOfPeriods);
        break;
      case PERIOD.courtDays:
        futureDate = addCourtDays(today, futureDateRules[i].numberOfPeriods);
        break;
      default:
        futureDate = null;
    }

    //================================================
    //          lOGGING
    //================================================
    // if (
    //   dateFormatter(futureDate) === "Monday, February 15, 2021" ||
    //   dateFormatter(futureDate) === "Monday, September 7, 2020"
    // ) {
    //   console.log(">>> futureDate = " + dateFormatter(futureDate));
    //   console.log(
    //     ">>> isDateHoliday(futureDate) = " + isDateHoliday(futureDate, holidays)
    //   );
    // }
    //================================================
    //          lOGGING
    //================================================

    while (isDateHoliday(futureDate, holidays)) {
      // console.log(">>> >>> inside isDateHoliday");
      // console.log(
      //   ">>> >>> futureDate before add = " + dateFormatter(futureDate)
      // );
      futureDate = addDays(futureDate, 1);
      // console.log(
      //   ">>> >>> futureDate after add = " + dateFormatter(futureDate)
      // );
      // console.log(
      //   ">>> >>> isDateHoliday(futureDate) = " +
      //     isDateHoliday(futureDate, holidays)
      // );
    }

    // console.log(dateFormatter(futureDate));

    let newDate = {
      name: futureDateRules[i].name,
      date: dateFormatter(futureDate),
    };

    // console.log(newDate);

    array.push(newDate);
  }

  return array;
}

module.exports = {
  futureDateRule,
  PERIOD,
  createFutureDatesArray,
  isDateHoliday,
};
