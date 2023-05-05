export function countItems(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el in res) {
      res[el] += 1;
    } else {
      res[el] = 1;
    }
  }
  return res;
}

export function fromKeys(keys, val) {
  let res = {};
  for (let i = 0; i < keys.length; i++) {
    const elem = keys[i];
    res[elem] = val;
  }
  return res;
}

export function containsKey(obj, key) {
  for (const property in obj) {
    if (property === key) {
      return true;
    }
  }
  return false;
}

export function copy(obj) {
  const copy = {};
  for (const key in obj) {
    copy[key] = obj[key];
  }
  return copy;
}

export function merge(obj1, obj2) {
  const merged = {};
  for (const key in obj1) {
    merged[key] = obj1[key];
  }
  for (const key in obj2) {
    merged[key] = obj2[key];
  }
  return merged;
}

export function swap(obj) {
  const swapped = {};
  for (const key in obj) {
    let value = obj[key];
    swapped[value] = key;
  }
  return swapped;
}

export function toArray(object) {
  let res = [];
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      res.push(element);
    }
  }
  return res;
}

export function parseDate(string) {
  const obj = {};
  const numbers = string.split("-");
  const bezNull = [];
  if (numbers[1] > 12) {
    return "invalid month";
  }
  if (numbers[2] > 31) {
    return "invalid days";
  }
  numbers.forEach((num) => {
    if (num.startsWith("0")) {
      num = num.slice(-1);
      bezNull.push(num);
    } else {
      bezNull.push(num);
    }
  });
  obj.year = bezNull[0];
  obj.month = bezNull[1];
  obj.day = bezNull[2];

  obj.getYear = getYear;
  obj.getMonth = getMonth;
  obj.isLeapYear = isLeapYear;
  obj.isLucky = isLucky;
  return obj;
}

// export function getYear() {
//   const object = {};
//   return;
// }

/**
 * @param {string} date
 * @returns {bool}
 */

// export function isLeapYear(date) {
//   return (date.year % 4 == 0 && date.year % 100 != 0) || date.year % 400 == 0;
// }
export function isLeapYear() {
  return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
}

// export function getYear(date) {
//   return parseInt(date.year);
// }
export function getYear() {
  return parseInt(this.year);
}

// export function getMonth(date) {
//   return parseInt(date.month);
// }
export function getMonth() {
  return parseInt(this.month);
}

// export function isLucky(string) {
//   const date = parseDate(string);
//   const year = getYear(date);
//   const month = getMonth(date);
//   return isLeapYear(date) && year % 100 == 0 && month == 1;
// }
export function isLucky() {
  const year = this.getYear();
  const month = this.getMonth();
  return this.isLeapYear() && year % 100 == 0 && month == 1;
}
