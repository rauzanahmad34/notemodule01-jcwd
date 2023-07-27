// 01
const cel = 30;
const fah = cel * 1.8 + 32;
console.log(`${cel} C = ${fah} F`);

// 02
const number = 2;
if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

console.log(`${number} is ${number % 2 === 0 ? "Even" : "Odd"}`);

// 03
const num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "number is prime" : "number is not prime");

// 04 & 05
const n = 4;
let sum = 0;
let fact = 1;
for (let i = 1; i <= n; i++) {
  sum += i;
  fact *= i;
}

console.log(`sum number is : ${sum}`);
console.log(`factorial number is : ${fact}`);

// 06
const N = 20;
let n1 = 1;
let n2 = 1;
let fibN;

for (let i = 1; i <= N; i++) {
  console.log(n1);
  fibN = n1;
  const next = n1 + n2;
  n1 = n2;
  n2 = next;
}

console.log(fibN);
