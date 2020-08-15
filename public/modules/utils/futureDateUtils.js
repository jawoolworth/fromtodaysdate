const { addCourtDays, addDays, addWeeks, addMonths, addYears, isWeekend, dateFormatter, WEEKEND, daysOfWeek, months } = require('./dateUtils');
const { createHoliday, HolidayRule, dateSpecificRule, weekdaySpecificRule } = require('./holidayUtils');
const { newYearsDays, mlkDays, lincolnDays, presidentsDays, cesarChavezDays, memorialDays, 
    independenceDays, laborDays, columbusDays, veteransDays, thanksgivingDays, dayAfterThanksgivingDays, christmasDays } = require('../dates/holidayConstants');


// const year = new Date(Date.now()).getFullYear();
// const holidayDates = [];
// const holidayRules = HOLIDAYS.holidayRules;

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < holidayRules.length; j++) {
//     holidayDates.push(holidayUtils.createHoliday(holidayRules[j], year + i));
//   }
// }

// console.log(holidayDates);

const PERIOD = {
    weeks: 1,
    months: 2,
    years: 3,
    days: 4,
    courtDays: 5
}

Object.freeze(PERIOD);

function futureDateRule (period, numberOfPeriods) {
    if (period >= 1 && period <=5) {
        this.period = period;
    } else {
        // console.log(period);
        throw "period not of object PERIOD type";
    }
    if (numberOfPeriods >= 0) {
        this.numberOfPeriods = numberOfPeriods;
    } else {
        throw "numberOfPeriods is less than zero, null or undefined"
    }
    switch(period){
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

function createFutureDatesArray (today, futureDateRules, holidays) {
    let array = [];
    let futureDate;

    for (let i = 0; i < futureDateRules.length; i++) {
        switch (futureDateRules[i].period){
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
        
        while (holidays.includes(futureDate)) {
          futureDate = addDays(futureDate, 1);
        }
        
        let newDate = {
            name: futureDateRules[i].name,
            date: dateFormatter(futureDate)
        };
        
        array.push(newDate);
    }

    return array;
}

module.exports = { futureDateRule, PERIOD, createFutureDatesArray };