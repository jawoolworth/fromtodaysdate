"use strict";

const holidays = require('./holidayConstants');
const createHoliday = require ('../public/modules/holidays');

describe('test holidays', () => {

    beforeAll(() => {
        let year = new Date(Date.now()).getFullYear;
        let month = new Date(Date.now()).getMonth;
        let date = new Date(Date.now()).getDate;        
    });

    afterAll(() => {

    });

    test('Create New Year\'s day holidays', () => {

    });

});