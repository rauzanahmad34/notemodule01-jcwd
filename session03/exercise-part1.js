// 01
const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  const result = input * i;
  console.log(`${input} x ${i} = ${result}`);
}

// 02
const text = "abba";
const middle = Math.floor(text.length / 2);
let isPalindrome = true;
for (let i = 0; i < middle; i++) {
  const a = text[i];
  const b = text[text.length - 1 - i];
  if (a != b) {
    isPalindrome = false;
    break;
  }
}

console.log(`"${text}" is ${isPalindrome ? "palindrome" : "not palindrome"}`);

// 03
const cm = 1000;
const km = cm / (10 * 10 * 10 * 10 * 10);

console.log(`${cm} cm is ${km} km`);

// 04
const money = 1000;
const moneyStr = money.toString();
const moneyStrSize = moneyStr.length - 1;
let moneyFormatted = "";

for (let i = 0; i < moneyStr.length; i++) {
  if (i % 3 === 0) {
    moneyFormatted = moneyStr[moneyStrSize - i] + "." + moneyFormatted;
  } else {
    moneyFormatted = moneyStr[moneyStrSize - i] + moneyFormatted;
  }
}

console.log(`Rp. ${moneyFormatted},00`);

// 05
const str = "Hello World";
const search = "ell";
const replaced = str.replace(search, "");
console.log(replaced);

// 06
const txt = "hello world my name is ridho";
let result = txt[0].toUpperCase();
for (let i = 1; i < txt.length; i++) {
  const current = txt[i];
  const characterBefore = txt[i - 1];
  if (characterBefore === " ") {
    result += current.toUpperCase();
  } else {
    result += current;
  }
}
console.log(result);

// 07
const originalTxt = "Halo semua";
let reversedTxt = "";

for (let i = originalTxt.length - 1; i >= 0; i--) {
  reversedTxt += originalTxt[i];
}

console.log(reversedTxt);
