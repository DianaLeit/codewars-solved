const jan = 31;
const feb = 28;
const mar = 31;
const apr = 30;
const may = 31;
const jun = 31;
const jul = 30;
const aug = 31;
const sep = 30;
const oct = 31;
const nov = 30;
const dec = 31;
const myYearOfBirth = 1994;
const myMonthOfBirth = "oct";
const myDayOfBirth = 10;
const janYearDays = jan;
const febYearDays = feb + janYearDays;
const marYearDays = mar + febYearDays;
const aprYearDays = apr + marYearDays;
const mayYearDays = may + aprYearDays;
const junYearDays = jun + mayYearDays;
const julYearDays = jul + junYearDays;
const augYearDays = aug + julYearDays;
const sepYearDays = sep + augYearDays;
const octYearDays = oct + sepYearDays;
const novYearDays = nov + octYearDays;
const decYearDays = dec + novYearDays;
let leftDays = 0;
let daysInMyMonth = 0;
switch (myMonthOfBirth) {
  case "jan":
    leftDays = janYearDays;
    daysInMyMonth = jan;
    break;
  case "feb":
    leftDays = febYearDays;
    daysInMyMonth = feb;
    break;
  case "mar":
    leftDays = marYearDays;
    daysInMyMonth = mar;
    break;
  case "apr":
    leftDays = aprYearDays;
    daysInMyMonth = apr;
    break;
  case "may":
    leftDays = mayYearDays;
    daysInMyMonth = may;
    break;
  case "jun":
    leftDays = junYearDays;
    daysInMyMonth = jun;
    break;
  case "jul":
    leftDays = julYearDays;
    daysInMyMonth = jul;
    break;
  case "aug":
    leftDays = augYearDays;
    daysInMyMonth = aug;
    break;
  case "sep":
    leftDays = sepYearDays;
    daysInMyMonth = sep;
    break;
  case "oct":
    daysInMyMonth = oct;
    leftDays = octYearDays;
    break;
  case "nov":
    leftDays = novYearDays;
    daysInMyMonth = nov;
    break;
  case "dec":
    leftDays = decYearDays;
    daysInMyMonth = dec;
    break;
}
let year = 1994;
let daysInYear = 0;
if (year % 4) {
  daysInYear = 365;
} else {
  daysInYear = 366;
}
let myDaysInBornYear = daysInYear - leftDays + daysInMyMonth - myDayOfBirth;
//let my = 1996/4;
console.log(myDaysInBornYear);
