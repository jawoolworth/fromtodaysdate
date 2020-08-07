const dateHelper = require('./public/modules/dateFunctions');
const Holiday = require('./public/modules/holidays');

function dateSpecificRule(month, date) {
    console.log("reached dateSpecificRule");
    if (typeof month === 'number' && month >= 0 && month < 12) {
        console.log("inside month if true");
        this.month = month;
    } else {
        console.log("inside month else");
        this.month = null;
    }
    if (typeof date === 'number' && date >= 1 && date < 31) {
        console.log("inside date if");
        if (month === 1 && date > 29 ) {
            console.log("inside date if and month if");
            this.date = null;
        } else if (date > 30 && month === 3 || month === 5 || month === 8 || month === 10) {
            console.log("insdie date if and month if else");
            this.date = null;
        } else {
            console.log("inside date if and month else");
            this.date = date;
        }
    } else {
        console.log("insdie date else");
        this.date = null;
    }
}

let newDateSpecificRule = new Holiday.dateSpecificRule(0,1);
let newHoliday = new Holiday.createHoliday(newDateSpecificRule, 2020);

let mlkDayRule = new Holiday.weekdaySpecificRule(0, 1, 3, 0);
console.log(mlkDayRule);
let mlkHoliday = new Holiday.createHoliday(mlkDayRule, 2020);
console.log(newHoliday);
console.log(mlkHoliday);