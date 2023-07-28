// 01
const text = "The QuiCk BrOwN Fox";
let result = "";

for (let i = 0; i < text.length; i++) {
  const capitalize = text[i].toUpperCase();
  if (capitalize === text[i]) {
    result += text[i].toLowerCase();
  } else {
    result += text[i].toUpperCase();
  }
}

console.log(result);

// 02
const num1 = 10;
const num2 = 10;

if (num1 > num2) {
  console.log("num1 bigger than num2");
} else if (num2 > num1) {
  console.log("num2 bigger than num1");
} else {
  console.log("num1 and num2 is equal");
}

// 03
const n1 = 1;
const n2 = 2;
const n3 = 3;

if (n1 < n2 && n1 < n3) {
  if (n2 < n3) {
    console.log("n1, n2, n3");
  } else {
    console.log("n1, n3, n2");
  }
} else if (n2 < n1 && n2 < n3) {
  if (n1 < n3) {
    console.log("n2, n1, n3");
  } else {
    console.log("n2, n3, n1");
  }
} else {
  if (n1 < n2) {
    console.log("n3, n1, n2");
  } else {
    console.log("n3, n2, n1");
  }
}

// 04
const input = null;
let output = 0;
if (typeof input === "string") {
  output = 1;
} else if (typeof input === "number") {
  output = 2;
} else {
  output = 3;
}

console.log(result);

// 05
const inputText = "An apple a day keeps the doctor away";
const replacedText = inputText.replaceAll("a", "*").replaceAll("A", "*");

console.log(replacedText);
