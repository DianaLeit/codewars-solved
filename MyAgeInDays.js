function ageInDays() {
  const dateOfBirthTag = document.getElementById("dateOfBirth");
  const dateOfBirth = new Date(dateOfBirthTag.value);
  date = new Date();
  const dayToday = date.getDate();
  const monthTodayInt = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  const myYearOfBirth = dateOfBirth.getFullYear();
  const myMonthOfBirthInt = dateOfBirth.getMonth() + 1;
  const myDayOfBirth = dateOfBirth.getDate();
  // Parses months numbers to string
  const months = {
    1: { name: "jan", days: 31 },
    2: { name: "feb", days: 28 },
    3: { name: "mar", days: 31 },
    4: { name: "apr", days: 30 },
    5: { name: "may", days: 31 },
    6: { name: "jun", days: 30 },
    7: { name: "jul", days: 31 },
    8: { name: "aug", days: 31 },
    9: { name: "sep", days: 30 },
    10: { name: "oct", days: 31 },
    11: { name: "nov", days: 30 },
    12: { name: "dec", days: 31 },
  };
  const monthToday = months[monthTodayInt].name;
  const daysInMonth = months[myMonthOfBirthInt].days;
  const myMonthOfBirth = months[myMonthOfBirthInt].name;
  const monthYearDays = {
    jan: 31,
    feb: 59,
    mar: 90,
    apr: 120,
    may: 151,
    jun: 181,
    jul: 212,
    aug: 243,
    sep: 273,
    oct: 304,
    nov: 334,
    dec: 365,
  };

  let leftDays = monthYearDays[myMonthOfBirth];

  let daysInYearOfBirth = 366;
  if (myYearOfBirth % 4) {
    daysInYearOfBirth = 365;
  }
  const myDaysInBornYear = daysInYearOfBirth - leftDays + daysInMonth - myDayOfBirth;
  const myDaysInBetweenYears =
    (currentYear - myYearOfBirth - 1) * 365 + Math.floor((currentYear - myYearOfBirth + 1) / 4);

  const prevMonthDays = {
    jan: 0,
    feb: 31,
    mar: 59,
    apr: 90,
    may: 120,
    jun: 151,
    jul: 181,
    aug: 212,
    sep: 243,
    oct: 273,
    nov: 304,
    dec: 334,
  };
  const DaysInCurrentYear = prevMonthDays[monthToday] + dayToday; //(jan)0+26
  const myDays = myDaysInBornYear + myDaysInBetweenYears + DaysInCurrentYear;
  result = document.getElementById("result"); //here we receive result from html without value
  result.value = myDays; //we put  this value in "result"
}
