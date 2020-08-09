"use strict";

const holidays = require('./holidayConstants');
const createHoliday = require ('../public/modules/holidays');
const dateUtils = require('../public/modules/dateFunctions');

describe('test holidays', () => {

    let year = 2020; //test script holiday constants start in 2020
    const holidayRulesList = holidays.holidays;        

    beforeAll(() => {

    });

    afterAll(() => {

    });

    test('Create New Year\'s day holidays', () => {
        for (let index = 0; index < holidays.newYearsDays.length; index++) {
            let rule = holidayRulesList[0]; //0 index should be new year's day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.newYearsDays[index]));
        }
    });

    test('Create MLK day holidays', () => {
        for (let index = 0; index < holidays.mlkDays.length; index++) {
            let rule = holidayRulesList[1]; //1 index should be mlk day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.mlkDays[index]));
        }
    });

    test('Create Lincoln day holidays', () => {
        for (let index = 0; index < holidays.lincolnDays.length; index++) {
            let rule = holidayRulesList[2]; //2 index should be lincoln day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.lincolnDays[index]));
        }        
    });

    test('Create president day holidays', () => {
        for (let index = 0; index < holidays.presidentsDays.length; index++) {
            let rule = holidayRulesList[3]; //3 index should be president day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.presidentsDays[index]));
        }        
    });

    test('Create Cesar Chavez day holidays', () => {
        for (let index = 0; index < holidays.cesarChavezDays.length; index++) {
            let rule = holidayRulesList[4]; //4 index should be cesar chavez day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.cesarChavezDays[index]));
        }        
    });

    test('Create memorial day holidays', () => {
        for (let index = 0; index < holidays.memorialDays.length; index++) {
            let rule = holidayRulesList[5]; //5 index should be memorial day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.memorialDays[index]));
        }        
    });

    test('Create independence day holidays', () => {
        for (let index = 0; index < holidays.independenceDays.length; index++) {
            let rule = holidayRulesList[6]; //6 index should be independence day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.independenceDays[index]));
        }        
    });

    test('Create labor day holidays', () => {
        for (let index = 0; index < holidays.laborDays.length; index++) {
            let rule = holidayRulesList[7]; //7 index should be labor day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.laborDays[index]));
        }        
    });

    test('Create columbus day holidays', () => {
        for (let index = 0; index < holidays.columbusDays.length; index++) {
            let rule = holidayRulesList[8]; //8 index should be columbus day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.columbusDays[index]));
        }        
    });

    test('Create veterans day holidays', () => {
        for (let index = 0; index < holidays.veteransDays.length; index++) {
            let rule = holidayRulesList[9]; //9 index should be veterans day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.veteransDays[index]));
        }        
    });

    test('Create thanksgiving day holidays', () => {
        for (let index = 0; index < holidays.thanksgivingDays.length; index++) {
            let rule = holidayRulesList[10]; //10 index should be thanksgiving day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.thanksgivingDays[index]));
        }        
    });

    test('Create day after thanksgiving day holidays', () => {
        for (let index = 0; index < holidays.dayAfterThanksgivingDays.length; index++) {
            let rule = holidayRulesList[11]; //11 index should be day after thanksgiving day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.dayAfterThanksgivingDays[index]));
        }        
    });

    test('Create christmas day holidays', () => {
        for (let index = 0; index < holidays.christmasDays.length; index++) {
            let rule = holidayRulesList[12]; //12 index should be christmas day
            let calculatedHoliday = createHoliday.createHoliday(rule, year + index);
            expect(dateUtils.dateFormatter(calculatedHoliday)).toBe(dateUtils.dateFormatter(holidays.christmasDays[index]));
        }        
    });

});