enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Weekday): boolean {
  return day < 5;
}

// console.log(isWeekend(Weekday.Wednesday));