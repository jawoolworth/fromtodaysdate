"use strict";

const { holidayRules } = require('../public/modules/rules/holidayRules');

describe('test object class', () => {
    // console.log('test that the objects in the array are of the correct types');

    test ('dummy test - this should fail', () => {
        holidayRules.forEach(rule => {
            let isDayOfWeekRule = (rule.hasOwnProperty('month') && rule.hasOwnProperty('dayOfWeek') && rule.hasOwnProperty('weekOfMonth') && rule.hasOwnProperty('plusDays'));
            let isDateSpecificRule = (rule.hasOwnProperty('month') && rule.hasOwnProperty('date'));
        
            let received = (isDayOfWeekRule || isDateSpecificRule);
            expect(received).toBe(true);
        });
        
    });
});