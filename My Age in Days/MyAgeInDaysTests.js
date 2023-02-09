function ageInDays() {
  let dateOfBirthTag = document.getElementById("dateOfBirth");
  const dateOfBirth = new Date(dateOfBirthTag.value);
  let myDays = myAge2(dateOfBirth);
  result = document.getElementById("result");
  result.value = myDays;
}

function myAge2(dateOfBirth) {
  date = new Date();
  const jan = 31;
  const feb = 28;
  const mar = 31;
  const apr = 30;
  const may = 31;
  const jun = 30;
  const jul = 31;
  const aug = 31;
  const sep = 30;
  const oct = 31;
  const nov = 30;
  const dec = 31;
  const dayToday = date.getDate();
  let monthToday = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  const myYearOfBirth = dateOfBirth.getFullYear();
  let myMonthOfBirth = dateOfBirth.getMonth() + 1;
  const myDayOfBirth = dateOfBirth.getDate();
  let months = {
    1: "jan",
    2: "feb",
    3: "mar",
    4: "apr",
    5: "may",
    6: "jun",
    7: "jul",
    8: "aug",
    9: "sep",
    10: "oct",
    11: "nov",
    12: "dec",
  };
  monthToday = months[monthToday];
  myMonthOfBirth = months[myMonthOfBirth];
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
  let daysInMonth = 0;
  switch (myMonthOfBirth) {
    case "jan":
      leftDays = janYearDays;
      daysInMonth = jan;
      break;
    case "feb":
      leftDays = febYearDays;
      daysInMonth = feb;
      break;
    case "mar":
      leftDays = marYearDays;
      daysInMonth = mar;
      break;
    case "apr":
      leftDays = aprYearDays;
      daysInMonth = apr;
      break;
    case "may":
      leftDays = mayYearDays;
      daysInMonth = may;
      break;
    case "jun":
      leftDays = junYearDays;
      daysInMonth = jun;
      break;
    case "jul":
      leftDays = julYearDays;
      daysInMonth = jul;
      break;
    case "aug":
      leftDays = augYearDays;
      daysInMonth = aug;
      break;
    case "sep":
      leftDays = sepYearDays;
      daysInMonth = sep;
      break;
    case "oct":
      leftDays = octYearDays;
      daysInMonth = oct;
      break;
    case "nov":
      leftDays = novYearDays;
      daysInMonth = nov;
      break;
    case "dec":
      leftDays = decYearDays;
      daysInMonth = dec;
      break;
  }
  let daysInYearOfBirth = 0;
  if (myYearOfBirth % 4) {
    daysInYearOfBirth = 365;
  } else {
    daysInYearOfBirth = 366;
  }
  let myDaysInBornYear = daysInYearOfBirth - leftDays + daysInMonth - myDayOfBirth;
  // TODO: This variable is approximate? Need to break years to 365 and 366 days years somehow.
  let myDaysInBetweenYears =
    (currentYear - myYearOfBirth - 1) * 365 + Math.floor((currentYear - myYearOfBirth + 1) / 4);
  let prevMonthDays = 0;
  switch (monthToday) {
    case "jan":
      prevMonthDays = 0;
      break;
    case "feb":
      prevMonthDays = janYearDays;
      break;
    case "mar":
      prevMonthDays = febYearDays;
      break;
    case "apr":
      prevMonthDays = marYearDays;
      break;
    case "may":
      prevMonthDays = aprYearDays;
      break;
    case "jun":
      prevMonthDays = mayYearDays;
      break;
    case "jul":
      prevMonthDays = junYearDays;
      break;
    case "aug":
      prevMonthDays = julYearDays;
      break;
    case "sep":
      prevMonthDays = augYearDays;
      break;
    case "oct":
      prevMonthDays = sepYearDays;
      break;
    case "nov":
      prevMonthDays = octYearDays;
      break;
    case "dec":
      prevMonthDays = novYearDays;
      break;
  }
  let myDaysInCurrentYear = prevMonthDays + dayToday;
  let myDays = myDaysInBornYear + myDaysInBetweenYears + myDaysInCurrentYear;
  return myDays;
}

function findKirDate() {
  expected = 11665;
  year = 1991;
  while (year < 2003) {
    month = 1;
    while (month < 13) {
      monthS = `${month}`;
      day = 1;
      while (day < 32) {
        dayS = `${day}`;
        dateText = `${year}-${monthS.padStart(2, "0")}-${dayS.padStart(2, "0")}`;
        valid = Date.parse(dateText);
        if (valid) {
          numberDays = myAge2(new Date(dateText));
          if (numberDays !== expected) {
            console.log("date which is not expected", dateText, expected);
          }
          expected--;
        }
        day++;
      }
      month++;
    }
    year++;
  }
}

function test() {
  di_dob = myAge2(new Date("1994-10-10"));
  if (di_dob !== 10_287) {
    console.log("test di failed", di_dob);
  }
  kir_dob = myAge2(new Date("1995-07-23"));
  if (kir_dob !== 10_001) {
    console.log("test kir failed", kir_dob);
  }
  le_dob = myAge2(new Date("1995-04-21"));
  if (le_dob !== 10_094) {
    console.log("test le failed", le_dob);
  }
}
