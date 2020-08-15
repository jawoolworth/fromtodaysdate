const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

const WEEKEND = [
	'Saturday',
	'Sunday'
]

const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]



function addCourtDays(date, days) {
	
	let workingDays = 0;
	let calculatedDate = new Date(date);
	let month = date.getMonth();
	let day = date.getDate();
	let year = date.getFullYear();

	while (workingDays < days) {

		day++;
		calculatedDate = new Date(year, month, day);		

		if ( calculatedDate.getDay() !== 0 && calculatedDate.getDay() !== 6) {
			workingDays++;
		}
		
	}

	return calculatedDate;
}

function addDays(date, days) {
	let month = date.getMonth();
	let day = date.getDate() + days;
	let year = date.getFullYear();
	let calculatedDate = new Date(year, month, day);
	
	return adjustCalculatedDateForWeekends(calculatedDate);
}

function adjustCalculatedDateForWeekends(date) {
	if (!isWeekend(date)) {
		return date;
	}

	let month = date.getMonth();
	let day = date.getDate();
	let year = date.getFullYear();
	let calculatedDate = new Date(year, month, day);

	while (isWeekend(calculatedDate)) {
		day++;
		calculatedDate = new Date(year, month, day);
		// console.log(dateFormatter(calculatedDate));
		// console.log(isWeekend(calculatedDate));
	}

	return calculatedDate;
}

function addMonths(date, months) {
	let month = date.getMonth() + months;
	let day = date.getDate();
	let year = date.getFullYear();
	let calculatedDate = new Date(year, month, day);
	
	return adjustCalculatedDateForWeekends(calculatedDate);
}

function addWeeks(date, weeks) {
	let month = date.getMonth();
	let day = date.getDate() + (weeks * 7);
	let year = date.getFullYear();
	let calculatedDate = new Date(year, month, day);
	
	return adjustCalculatedDateForWeekends(calculatedDate);
}

function addYears(date, years) {
	let month = date.getMonth();
	let day = date.getDate();
	let year = date.getFullYear() + years;
	let calculatedDate = new Date(year, month, day);
	
	return adjustCalculatedDateForWeekends(calculatedDate);
}

function dateFormatter (date) {

	let dayOfWeekIndex = date.getDay();
	let dayOfWeek = daysOfWeek[dayOfWeekIndex];
	let [monthIndex, day, year] = date.toLocaleDateString().split("/");
	//let monthIndex = date.getMonth();
	let month = months[monthIndex-1];
	//let day = date.getDate();
	//let year = date.getFullYear();

	return dayOfWeek + ", " + month + " " + day + ", " + year;
}

function isWeekend(date) {
	return WEEKEND.includes(daysOfWeek[date.getDay()]);
}

module.exports = { addCourtDays, addDays, addWeeks, addMonths, addYears, isWeekend, dateFormatter, WEEKEND, daysOfWeek, months };