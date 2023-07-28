// declaration
function square(num) {
  return num * num;
}

function add(num1, num2) {
  return num1 + num2;
}

// expression
const substract = function (a, b) {
  return a - b;
};

const capitalizeText = function (text) {
  return text.toUpperCase();
};

// cara menggunakan function yang sudah dibuat
square(5);
const result = add(1, 2);
console.log(result);
console.log(substract(3, 2));
console.log(substract(100, 38));
console.log(capitalizeText("halo"));

// function scope
let data = "halo function";

function greeting(name) {
  const middleText = ", my name is ";
  return data + middleText + name;
}

console.log(data);
console.log(greeting("ridho"));
console.log(greeting("jaka"));

// function default parameter
function multiply(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  if (typeof b === "string") {
    return "gaboleh";
  }
  return a * b;
}

const one = multiply();
const ten = multiply(5, 2);
const five = multiply(5, "5");
console.log(one, ten, five);

// rest parameter function
function sum(...num) {
  let total = 0;
  for (let n of num) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 4, 10, 20, 20, 20));

// subfunction - function in function
function getMessage(firstName) {
  const textHello = "hello ";

  function sayHello() {
    return textHello + firstName;
  }

  function welcomeMessage() {
    const message = "welcome to purwadhika";
    return message;
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("ridho"));

// closure, function returning new function
function greeting(name) {
  const defaultMessage = "Hello";
  const defaultMessageID = "Hallo";
  const defaultMessageFR = "Bonjour";

  return function (lang = "en") {
    if (lang === "en") {
      return defaultMessage + " " + name;
    } else if (lang === "id") {
      return defaultMessageID + " " + name;
    } else if (lang === "fr") {
      return defaultMessageFR + " " + name;
    }

    return "gatau";
  };
}

const greetingDavid = greeting("ridho");
console.log(greetingDavid("en"));
console.log(greetingDavid("id"));
console.log(greetingDavid("fr"));
console.log(greetingDavid("it"));

const greetingRidho = greeting("ridho");
console.log(greetingRidho());

console.log(greeting("yoga")("fr"));

// currying / closure
function multiplier(num) {
  return function (number) {
    return num * number;
  };
}

const mul3 = multiplier(3);
console.log(mul3(2));
console.log(mul3(5));

const mul5 = multiplier(5);
console.log(mul5(2));
console.log(mul5(100));
console.log(mul5(10000));

console.log(multiplier(6)(7));

// recursive - function that call itself
function countDown(number) {
  console.log(number);

  const nextNumber = number - 1;
  if (number > 0) {
    countDown(nextNumber);
  }
}
countDown(5);

function fib(num) {
  if (num <= 1) {
    return num;
  }

  return fib(num - 2) + fib(num - 1);
}

console.log(fib(10));

// arrow function
const sq = function (number) {
  return number * number;
};

const sqr = (number) => {
  return number * number;
};

console.log(sq(5));
console.log(sqr(5));

// advance topic - built in method with callback function
const text = "The QuiCk BrOwN Fox";
const textResult = text
  .split("")
  .map((character) => {
    if (character === character.toUpperCase()) {
      return character.toLowerCase();
    }
    return character.toUpperCase();
  })
  .join("");
console.log(text);
console.log(textResult);

// callback function - another function used as parameter to function
const logger = function (text) {
  console.log(text);
};
const greeting = function (cb) {
  cb("ridho");
};
greeting(logger);
