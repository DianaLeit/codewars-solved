export function sequence(n) {
  let obj = [];
  for (let i = 0; i < n; i++) {
    obj[i] = i + 1;
  }
  return obj;
}

export function isEven(n) {
  return n % 2 == 0;
  // if (n % 2 == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

export function returnEven(n) {
  let obj = [];
  for (let i = 2; i <= n; i = i + 2) {
    obj.push(i);
  }
  return obj;
}

export function contains(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elem === element) {
      return true;
    }
  }
  return false;
}

export function indexOf(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elem == element) {
      return i;
    }
  }
  return null;
}

export function last(arr, def) {
  if (arr.length == 0) {
    return def;
  }
  return arr[arr.length - 1];
}

export function tail(arr) {
  let obj = [];
  for (let i = 1; i < arr.length; i++) {
    obj.push(arr[i]);
  }
  return obj;
}
export function reverse(arr) {
  let obj = [];
  for (let i = 0; i < arr.length; i++) {
    obj.push(arr[arr.length - i - 1]);
  }
  return obj;
}

export function map(arr, func) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    arr2.push(func(el));
  }
  return arr2;
}

export function filter(arr, func) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (func(el)) {
      arr2.push(el);
    }
  }
  return arr2;
}

export function middle(arr) {
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  }
  return "doesn`t have middle";
}

export function min(arr) {
  let minNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

export function min2(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

export function fac(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
}

export function double(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(element * 2);
  }
  return result;
}

export function indexes(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(i);
  }
  return result;
}

export function count(func, arr) {
  let result = 0;
  arr.forEach((n) => {
    if (func(n)) {
      result++;
    }
  });
  return result;
}

export function mean2(a, b) {
  return (a + b) / 2;
}

export function mean3(a, b, c) {
  return (a + b + c) / 3;
}

export function mean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    sum += el;
  }
  return sum / arr.length;
}

export function applyMask(numbers, bools) {
  let res = [];
  for (let i = 0; i < bools.length; i++) {
    if (bools[i]) {
      res.push(numbers[i]);
    }
  }
  return res;
}
export function hamming(word1, word2) {
  let sum = 0;
  let shln;
  if (word1.length > word2.length) {
    shln = word2.length;
  } else {
    shln = word1.length;
  }
  for (let i = 0; i < shln; i++) {
    if (word1[i] !== word2[i]) {
      sum++;
    }
  }
  if (word1.length > word2.length) {
    sum += word1.length - word2.length;
  } else {
    sum += word2.length - word1.length;
  }
  return sum;
}

export function intersperse(arr, elem) {
  let interArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const el = arr[i];
    interArray.push(el, elem);
  }
  interArray.push(arr[arr.length - 1]);
  return interArray;
}

export function merge(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i], arr2[i]);
  }
  return res;
}

export function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {any[]} arr
 */
function uniq(arr) {
  let copy = [];
  arr.forEach((n) => {
    if (!copy.includes(n)) {
      copy = arr.push(n);
    }
  });
  return copy;
}

export function humanReadable(seconds) {
  let hours = "00";
  if (seconds >= 60 * 60) {
    hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
  }

  let minutes = "00";
  if (seconds >= 60) {
    minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
  }

  const secs = ((seconds % 3600) % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${secs}`;
}
