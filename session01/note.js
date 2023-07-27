// ini untuk menampilkan text hello world pada output
console.log("hello world");

/* ini komentar saya
ini untuk menampilkan nama saya pada output */
console.log("ridho");

// declare variable
let message;
// isi message dengan pesan
message = "hello world";

let message2 = "hello world";
console.log(message2);
message2 = "hello guys";
console.log(message2);

const messageThree = "hai";
// contoh error:
// message3 = "oit";
// const message2 = "hello world";
console.log(messageThree);

// const message_ = "asdasd";
// const 3roda = "semen";
// const if = "hehe";
// const for = "hehe";
// const let = "const";

const stringType = "text 1";
const numberType = 2.5;
const booleanType = true;
const nullType = null;
const undefinedType = undefined;

console.log(typeof stringType);
console.log(typeof numberType);
console.log(typeof booleanType);
console.log(typeof nullType);
console.log(typeof undefinedType);

const objectType = { first: "item1", number: 2 };
const arrayType = ["item1", "item2"];
console.log(typeof objectType);
console.log(typeof arrayType);

// value type
let personName = "Jhon doe";
let newPersonName = personName;
personName = "Jane doe";
console.log(personName);
console.log(newPersonName);

// reference type
let personData = { name: "jhon doe" };
let newPersonData = personData;
newPersonData.name = "jane doe";
console.log(personData);
console.log(newPersonData);
let numberList = [1, 2, 3, 4, 5];
let newNumberList = numberList;
numberList[2] = 6;
console.log(numberList);
console.log(newNumberList);

// string method
const title = "Kebakaran di jakarta, terus ga ada yang madamin";
const bigTitle = title.toUpperCase();
const titleLength = title.length;
console.log(bigTitle);

const firstName = "ridho";
const lastName = "azhar";
const bio = `lecture di purwadhika
sudah makan siang hari ini`;
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;
console.log(fullName.toUpperCase().replace("RIDHO", "HORE"));
console.log(bio.replace("purwadhika", "kantor").toUpperCase());

const number = 5.1421;
const strNumber = number.toFixed();
console.log(strNumber);

const x = "3";
const numX = x * 1;
const intX = parseInt(x);
const floatX = parseFloat(x);
console.log(intX + 5);
console.log(floatX + 5);
console.log(numX + 5);

console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean(-1));

const now = new Date();
console.log(now);
console.log(now.getTime());
const zeroDate = new Date(0);
console.log(zeroDate);
console.log(zeroDate.getTime());
const oneHourAfterZeroDate = new Date(1000 * 1 * 3600);
console.log(oneHourAfterZeroDate);

const yesterday = new Date(2024, 6, 24);
console.log(yesterday);
console.log(yesterday.getFullYear());
console.log(yesterday.getMonth());
console.log(yesterday.getDate());

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(11 % 2);
console.log(3 ** 3);
console.log(1 + 2 * 3);
console.log("1" + "1");

console.log("1" + 1);
console.log(2 + "1");
console.log(2 + 2 + "1");
console.log("2" + 2 - 1);

let n = 2;
n += 2;
// n = n + 2;
console.log(n);

let counter = 0;
counter++;
// counter += 1;
// counter = counter + 1;
console.log(counter);
counter--;
// counter -= 1;
// counter = counter - 1;
console.log(counter);

let incNum = "0";
incNum++;
console.log(incNum);
console.log(incNum);

let txt = "hello";
txt = txt + " jaka";
console.log(txt);

console.log("A" == "B");
console.log("1" === 1);
console.log("A" != "B");
console.log("1" !== 1);

const num1 = 3;
const num2 = 3;
console.log(num1 >= num2);
console.log(1 <= 1);
