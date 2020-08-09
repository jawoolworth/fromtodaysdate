// const dateHelper = require('./dateFunctions');
// New Year's Day 			- 	January 1
// Martin Luther King Day	-	3rd Monday in January
// Lincoln's Birthday		-	February 12
// President's Day			-	3rd Monday in February
// Cesar Chavez Day	    	-	March 31
// Memorial Day			    -	Last Monday in May
// Independence Day		    -	July 4
// Labor Day				-	1st Monday in September
// Veteran's Day			-	November 11
// Thanksgiving Day		    -	4th Thursday in November
// Day after Thanksgiving	- 	Thanksgiving plus 1
// Christmas Day			-	December 25

function HolidayRule(rule) {
    if (rule.hasOwnProperty('month')) {
        this.month = rule.month;
    } else {
        this.month = null;
    }

    if (rule.hasOwnProperty('date')) {
        this.date = rule.date;
    } else {
        this.date = null;
    }

    if (rule.hasOwnProperty('dayOfWeek')) {
        this.dayOfWeek = rule.dayOfWeek;
    } else {
        this.dayOfWeek = null;
    }

    if (rule.hasOwnProperty('weekOfMonth')) {
        this.weekOfMonth = rule.weekOfMonth;
    } else {
        this.weekOfMonth = null;
    }

    if (rule.hasOwnProperty('plusDays')) {
        this.plusDays = rule.plusDays;
    } else {
        this.plusDays = null;
    }
}

function dateSpecificRule(month, date) {
    // if (typeof month === 'number' && month >= 0 && month < 12) {
    if (!Number.isNaN(month) && month >= 0 && month < 12) {
        this.month = month;
    } else {
        this.month = null;
    }
    // if (typeof date === 'number' && date >= 1 && date < 31) {
    if (!Number.isNaN(date) && date >= 1 && date < 31) {
        if (month === 1 && date > 29 ) {
            this.date = null;
        } else if (date > 30 && month === 3 || month === 5 || month === 8 || month === 10) {
            this.date = null;
        } else {
            this.date = date;
        }
    } else {
        this.date = null;
    }
}

function weekdaySpecificRule(month, dayOfWeek, weekOfMonth, plusDays) {
    // if (typeof month === 'number' && month >= 0 && month < 12) {
    if (!Number.isNaN(month) && month >= 0 && month < 12) {
        this.month = month;
    } else {
        this.month = null;
    }

    // if (typeof dayOfWeek === 'number' && dayOfWeek >= 0 && dayOfWeek < 7) {
    if (!Number.isNaN(dayOfWeek) && dayOfWeek >= 0 && dayOfWeek < 7) {
        this.dayOfWeek = dayOfWeek;
    } else {
        this.dayOfWeek = null;
    }

    // if (typeof weekOfMonth === 'number' && weekOfMonth >= 1 && weekOfMonth < 7 ) {
    if (!Number.isNaN(weekOfMonth) && weekOfMonth >= 1 && weekOfMonth < 7 ) {
        this.weekOfMonth = weekOfMonth;
    } else {
        this.weekOfMonth = null;
    }

    // if (typeof plusDays === 'number' && plusDays >= 0 && plusDays < 30) {
    if (!Number.isNaN(plusDays) && plusDays >= 0 && plusDays < 30) {
        this.plusDays = plusDays;
    } else {
        this.plusDays = null;
    }
}

function createDateSpecificHoliday(dateSpecificRule, year) {
    // console.log('did we make it to createDateSpecificHoliday');
    // if (dateSpecificRule.month !== null && dateSpecificRule.date !== null && dateSpecificRule.dayOfWeek === null) {
        return new Date(year, dateSpecificRule.month, dateSpecificRule.date);
    // }
    // return -1;
}

function createWeekdaySpecificHoliday(rule, year) {
    // if we get here, the rule should be valid
    if (rule.weekOfMonth > 5) {
        return findLastWeekday(rule, year);
    } else {
        return findOtherWeekday(rule, year);
    }
}

function findLastWeekday(rule, year) {
    let lastDayOfMonth = new Date(year, rule.month + 1, 0);
    let lastWeekdayOfMonth = lastDayOfMonth.getDay();
    if (rule.dayOfWeek > lastWeekdayOfMonth) {
        return new Date(year, rule.month + 1, 0 - (7 - rule.dayOfWeek));
    } else if (rule.dayOfWeek < lastWeekdayOfMonth) {
        return new Date(year, rule.month + 1, 0 + (rule.dayOfWeek - lastWeekdayOfMonth));
    } else {
        return new Date(lastDayOfMonth);
    }
}

function findOtherWeekday(rule, year) {
    let calculatedDate = new Date(year, rule.month, 1);
    let firstWeekDayOfMonth = calculatedDate.getDay();
    let dayOfWeekDifference = rule.dayOfWeek - firstWeekDayOfMonth;
    if (dayOfWeekDifference >= 0 ) {
        calculatedDate = new Date(year, rule.month, calculatedDate.getDate() + dayOfWeekDifference);
    } else {
        calculatedDate = new Date(year, rule.month, calculatedDate.getDate() + (dayOfWeekDifference + 7));
    }
    // if we get here, the calculated date is already the first instance of the target weekday
    // to get to target week, we need week of month less 1, and multiply that by days in week
    if (rule.plusDays !== null) {
        return new Date(year, rule.month, calculatedDate.getDate() + ((rule.weekOfMonth - 1) * 7) + rule.plusDays);
    }
    return new Date(year, rule.month, calculatedDate.getDate() + ((rule.weekOfMonth -1)*7));
}

function createHoliday(rule, year) {
    // console.log("Just inside createHoliday()");
    // console.log("\nrule");
    // console.log(rule);
    // console.log("\nrule.month !== null");
    // console.log(rule.month !== null);
    // console.log("\nrule.hasOwnProperty('month')");
    // console.log(rule.hasOwnProperty('month'));
    // console.log("\nrule.hasOwnProperty('date')");
    // console.log(rule.hasOwnProperty('date'));
    if (rule.hasOwnProperty('month') && rule.month !== null && rule.hasOwnProperty('date') && rule.date !== null) {
        return createDateSpecificHoliday(rule, year);
    } else if (rule.month !== null && rule.dayOfWeek !== null && rule.weekOfMonth !== null) {
        // console.log("are we in the else if portion of createHoliday()?");
        return createWeekdaySpecificHoliday(rule, year);
    } else {
        return -1;
    }
}

module.exports = { createHoliday, HolidayRule, dateSpecificRule, weekdaySpecificRule };