let age = 19;

console.log("Age checker APP:");
if (age >= 17) {
  console.log("You can create an ID Card");
} else {
  console.log("You can't create an ID Card");
}
console.log("Done");

if (age >= 15 && age <= 18) {
  console.log("Highscholer");
} else if (age >= 12 && age <= 14) {
  console.log("middleschool");
} else if (age >= 5 && age <= 11) {
  console.log("elementary school");
} else {
  console.log("Not in school");
}

const grade = "A";
switch (grade) {
  case "A":
  case "A+":
  case "A-":
    console.log("Excellent Result!");
    break;
  case "B":
  case "B+":
  case "B-":
    console.log("Great Result!");
    break;
  case "C":
    console.log("Average Result!");
    break;
  case "D":
    console.log("Poor Result!");
    break;
  default:
    console.log("Invalid Grade");
}

let text = "";

if (!text) {
  console.log("text is empty");
}

let number = 8;
if (number >= 8) {
  console.log("number is greater than equal 8");
}

const name = "asd";
if (name === "jaka" || name === "joko") {
  console.log("name is not jaka or joko");
}

const isFalse = false;
if (!isFalse) {
  console.log("test");
}

const str = "c++";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

/*
(condition) ? (value if true) : (value if false)
*/

console.log(str === "javascript" ? "javascript" : "not javascript");

const txt = "asda";
console.log(txt ? txt : "empty");
