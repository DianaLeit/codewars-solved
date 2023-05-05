class MyDate {
  constructor(string) {
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
    this.year = bezNull[0];
    this.month = bezNull[1];
    this.day = bezNull[2];
  }

  getMonth() {
    return parseInt(this.month);
  }

  getYear() {
    return parseInt(this.year);
  }

  isLeapYear() {
    return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
  }

  isLucky() {
    const year = this.getYear();
    const month = this.getMonth();
    return this.isLeapYear() && year % 100 == 0 && month == 1;
  }
}

const date1 = new MyDate("2020-01-31");
console.log(date1);
console.log(date1.getYear());
