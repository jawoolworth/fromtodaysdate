"use strict";

const { holidayRules } = require('../public/modules/rules/holidayRules');
const { newYearsDays, mlkDays, lincolnDays, presidentsDays, cesarChavezDays, memorialDays, 
    independenceDays, laborDays, columbusDays, veteransDays, thanksgivingDays, dayAfterThanksgivingDays, christmasDays } = require('../public/modules/dates/holidayConstants');
const { createHoliday, HolidayRule, dateSpecificRule, weekdaySpecificRule, createHolidays } = require ('../public/modules/utils/holidayUtils');
const { addCourtDays, addDays, addWeeks, addMonths, addYears, isWeekend, dateFormatter, WEEKEND, daysOfWeek, months } = require('../public/modules/utils/dateUtils');

describe('test holidays', () => {

    let year = 2020; //test script holiday constants start in 2020    

    beforeAll(() => {

    });

    afterAll(() => {

    });

    test('Create New Year\'s day holidays', () => {
        for (let index = 0; index < newYearsDays.length; index++) {
            let rule = holidayRules[0]; //0 index should be new year's day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(newYearsDays[index]));
        }
    });

    test('Create MLK day holidays', () => {
        for (let index = 0; index < mlkDays.length; index++) {
            let rule = holidayRules[1]; //1 index should be mlk day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(mlkDays[index]));
        }
    });

    test('Create Lincoln day holidays', () => {
        for (let index = 0; index < lincolnDays.length; index++) {
            let rule = holidayRules[2]; //2 index should be lincoln day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(lincolnDays[index]));
        }        
    });

    test('Create president day holidays', () => {
        for (let index = 0; index < presidentsDays.length; index++) {
            let rule = holidayRules[3]; //3 index should be president day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(presidentsDays[index]));
        }        
    });

    test('Create Cesar Chavez day holidays', () => {
        for (let index = 0; index < cesarChavezDays.length; index++) {
            let rule = holidayRules[4]; //4 index should be cesar chavez day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(cesarChavezDays[index]));
        }        
    });

    test('Create memorial day holidays', () => {
        for (let index = 0; index < memorialDays.length; index++) {
            let rule = holidayRules[5]; //5 index should be memorial day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(memorialDays[index]));
        }        
    });

    test('Create independence day holidays', () => {
        for (let index = 0; index < independenceDays.length; index++) {
            let rule = holidayRules[6]; //6 index should be independence day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(independenceDays[index]));
        }        
    });

    test('Create labor day holidays', () => {
        for (let index = 0; index < laborDays.length; index++) {
            let rule = holidayRules[7]; //7 index should be labor day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(laborDays[index]));
        }        
    });

    test('Create columbus day holidays', () => {
        for (let index = 0; index < columbusDays.length; index++) {
            let rule = holidayRules[8]; //8 index should be columbus day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(columbusDays[index]));
        }        
    });

    test('Create veterans day holidays', () => {
        for (let index = 0; index < veteransDays.length; index++) {
            let rule = holidayRules[9]; //9 index should be veterans day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(veteransDays[index]));
        }        
    });

    test('Create thanksgiving day holidays', () => {
        for (let index = 0; index < thanksgivingDays.length; index++) {
            let rule = holidayRules[10]; //10 index should be thanksgiving day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(thanksgivingDays[index]));
        }        
    });

    test('Create day after thanksgiving day holidays', () => {
        for (let index = 0; index < dayAfterThanksgivingDays.length; index++) {
            let rule = holidayRules[11]; //11 index should be day after thanksgiving day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(dayAfterThanksgivingDays[index]));
        }        
    });

    test('Create christmas day holidays', () => {
        for (let index = 0; index < christmasDays.length; index++) {
            let rule = holidayRules[12]; //12 index should be christmas day
            let calculatedHoliday = createHoliday(rule, year + index);
            expect(dateFormatter(calculatedHoliday)).toBe(dateFormatter(christmasDays[index]));
        }        
    });

    test('create holidays array', () => {
        let holidays = createHolidays(holidayRules, new Date(Date.now()).getFullYear());

        expect(Array.isArray(holidays)).toBe(true);
    })

});