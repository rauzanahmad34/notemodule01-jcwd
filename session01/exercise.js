const width = 10;
const length = 20;
// 01
// define width and length of the rectangle
// calculate area of rectangle
const area = width * length;
console.log(area);

// 02
const perimeter = 2 * width + 2 * length;
console.log(perimeter);

// 03
const r = 7;
const diameter = r * 2;
const circumference = Math.PI * diameter;
const circleArea = Math.PI * r ** 2;

console.log(`d = ${diameter}, c = ${circumference}, a = ${circleArea}`);

// 04
const firstAngle = 60;
const secondAngle = 80;
const thirdAngle = 180 - secondAngle - firstAngle;
console.log(thirdAngle);

// 05
const date1 = new Date("2023-07-25");
const date2 = new Date("2023-08-25");
const rangeMs = date2 - date1;
const p = 1000 * 60 * 60 * 24;
const rangeDays = rangeMs / p;
console.log(rangeDays);

// 06
const input = 425;
// hitung tahun
const years = Math.floor(input / 365);
// hitung bulan dari sisa tahun
const month = Math.floor((input % 365) / 30);
// hitung hari dari sisa setelah bulan dan tahun
const days = (input % 365) % 30;

console.log(`${years} years, ${month} month, ${days} days`);
