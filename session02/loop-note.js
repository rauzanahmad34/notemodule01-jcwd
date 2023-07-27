// for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// while loop
let n = 1;
while (n < 10) {
  console.log(n);
  n++;
}

// do ... while loop
let a = 1;
do {
  console.log("hello");
  a++;
} while (a < 2);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    continue;
  }
  sum += i;
}
console.log(sum);
