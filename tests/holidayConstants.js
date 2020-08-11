const Holiday = require('../public/modules/holidays');

const newYearsDays = [
    new Date(2020,0,1),
    new Date(2021,0,1),
    new Date(2021,11,31),
    new Date(2023,0,2),
    new Date(2024,0,1),
    new Date(2025,0,1),
    new Date(2026,0,1),
    new Date(2027,0,1),
    new Date(2027,11,31),
    new Date(2029,0,1),
    new Date(2030,0,1)
];

const mlkDays = [
    new Date(2020,0,20),
    new Date(2021,0,18),
    new Date(2022,0,17),
    new Date(2023,0,16),
    new Date(2024,0,15),
    new Date(2025,0,20),
    new Date(2026,0,19),
    new Date(2027,0,18),
    new Date(2028,0,17),
    new Date(2029,0,15),
    new Date(2030,0,21)
];

const lincolnDays = [
    new Date(2020,1,12),
    new Date(2021,1,12),
    new Date(2022,1,11),
    new Date(2023,1,13),
    new Date(2024,1,12),
    new Date(2025,1,12),
    new Date(2026,1,12),
    new Date(2027,1,12),
    new Date(2028,1,11),
    new Date(2029,1,12),
    new Date(2030,1,12)
];

const presidentsDays = [
    new Date(2020,1,17),
    new Date(2021,1,15),
    new Date(2022,1,21),
    new Date(2023,1,20),
    new Date(2024,1,19),
    new Date(2025,1,17),
    new Date(2026,1,16),
    new Date(2027,1,15),
    new Date(2028,1,21),
    new Date(2029,1,19),
    new Date(2030,1,18)
];

const cesarChavezDays = [
    new Date(2020,2,31),
    new Date(2021,2,31),
    new Date(2022,2,31),
    new Date(2023,2,31),
    new Date(2024,3,1),
    new Date(2025,2,31),
    new Date(2026,2,31),
    new Date(2027,2,31),
    new Date(2028,2,31),
    new Date(2029,2,30),
    new Date(2030,3,1)
];

const memorialDays = [
    new Date(2020,4,25),
    new Date(2021,4,31),
    new Date(2022,4,30),
    new Date(2023,4,29),
    new Date(2024,4,27),
    new Date(2025,4,26),
    new Date(2026,4,25),
    new Date(2027,4,31),
    new Date(2028,4,29),
    new Date(2029,4,28),
    new Date(2030,4,27)
];

const independenceDays = [
    new Date(2020,6,3),
    new Date(2021,6,5),
    new Date(2022,6,4),
    new Date(2023,6,4),
    new Date(2024,6,4),
    new Date(2025,6,4),
    new Date(2026,6,3),
    new Date(2027,6,5),
    new Date(2028,6,4),
    new Date(2029,6,4),
    new Date(2030,6,4)
];

const laborDays = [
    new Date(2020,8,7),
    new Date(2021,8,6),
    new Date(2022,8,5),
    new Date(2023,8,4),
    new Date(2024,8,2),
    new Date(2025,8,1),
    new Date(2026,8,7),
    new Date(2027,8,6),
    new Date(2028,8,4),
    new Date(2029,8,3),
    new Date(2030,8,2)
];

const columbusDays = [
    new Date(2020,9,12),
    new Date(2021,9,11),
    new Date(2022,9,10),
    new Date(2023,9,9),
    new Date(2024,9,14),
    new Date(2025,9,13),
    new Date(2026,9,12),
    new Date(2027,9,11),
    new Date(2028,9,9),
    new Date(2029,9,8),
    new Date(2030,9,14)
];

const veteransDays = [
    new Date(2020,10,11),
    new Date(2021,10,11),
    new Date(2022,10,11),
    new Date(2023,10,10),
    new Date(2024,10,11),
    new Date(2025,10,11),
    new Date(2026,10,11),
    new Date(2027,10,11),
    new Date(2028,10,10),
    new Date(2029,10,12),
    new Date(2030,10,11)
];

const thanksgivingDays = [
    new Date(2020,10,26),
    new Date(2021,10,25),
    new Date(2022,10,24),
    new Date(2023,10,23),
    new Date(2024,10,28),
    new Date(2025,10,27),
    new Date(2026,10,26),
    new Date(2027,10,25),
    new Date(2028,10,23),
    new Date(2029,10,22),
    new Date(2030,10,28)
];

const dayAfterThanksgivingDays = [
    new Date(2020,10,26+1),
    new Date(2021,10,25+1),
    new Date(2022,10,24+1),
    new Date(2023,10,23+1),
    new Date(2024,10,28+1),
    new Date(2025,10,27+1),
    new Date(2026,10,26+1),
    new Date(2027,10,25+1),
    new Date(2028,10,23+1),
    new Date(2029,10,22+1),
    new Date(2030,10,28+1)
];

const christmasDays = [
    new Date(2020,11,25),
    new Date(2021,11,24),
    new Date(2022,11,26),
    new Date(2023,11,25),
    new Date(2024,11,25),
    new Date(2025,11,25),
    new Date(2026,11,25),
    new Date(2027,11,24),
    new Date(2028,11,25),
    new Date(2029,11,25),
    new Date(2030,11,25)
];

// New Year's Day 			- 	January 1
// Martin Luther King Day	-	3rd Monday in January
// Lincoln's Birthday		-	February 12
// President's Day			-	3rd Monday in February
// Cesar Chavez Day	    	-	March 31
// Memorial Day			    -	Last Monday in May
// Independence Day		    -	July 4
// Labor Day				-	1st Monday in September
// Columbus Day             -   2nd Monday in October
// Veteran's Day			-	November 11
// Thanksgiving Day		    -	4th Thursday in November
// Day after Thanksgiving	- 	Thanksgiving plus 1
// Christmas Day			-	December 25

const newYearsDayRule = new Holiday.dateSpecificRule(0, 1);
const mlkDayRule = new Holiday.weekdaySpecificRule(0, 1, 3, null);
const lincolnDayRule = new Holiday.dateSpecificRule(1, 12);
const presidentDayRule = new Holiday.weekdaySpecificRule(1, 1, 3, null);
const chavezDayRule = new Holiday.dateSpecificRule(2, 31);
const memorialDayRule = new Holiday.weekdaySpecificRule(4, 1, 6, null);
const independenceDayRule = new Holiday.dateSpecificRule(6, 4);
const laborDayRule = new Holiday.weekdaySpecificRule(8, 1, 1, null);
const columbusDayRule = new Holiday.weekdaySpecificRule(9, 1, 2, null);
const veteransDayRule = new Holiday.dateSpecificRule(10, 11);
const thanksgivingDayRule = new Holiday.weekdaySpecificRule(10, 4, 4, null);
const dayAfterThanksgivingDayRule = new Holiday.weekdaySpecificRule(10, 4, 4, 1);
const christmasDayRule = new Holiday.dateSpecificRule(11, 25);

let holidayRules = [
    newYearsDayRule,
    mlkDayRule,
    lincolnDayRule,
    presidentDayRule,
    chavezDayRule,
    memorialDayRule,
    independenceDayRule,
    laborDayRule,
    columbusDayRule,
    veteransDayRule,
    thanksgivingDayRule,
    dayAfterThanksgivingDayRule,
    christmasDayRule
]

module.exports = { holidayRules, newYearsDays, mlkDays, lincolnDays, presidentsDays, cesarChavezDays, memorialDays, 
                 independenceDays, laborDays, columbusDays, veteransDays, thanksgivingDays, dayAfterThanksgivingDays, christmasDays };