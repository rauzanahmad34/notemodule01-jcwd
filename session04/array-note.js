// untuk membuat array
const arr = new Array();
const arr2 = [];

// index array
const arrNumber = [1, 2, 3, 4, 5];
console.log(arrNumber[0]);
console.log(arrNumber[1]);
console.log(arrNumber[arrNumber.length - 1]);

// untuk menghapus item dalam array
arrNumber.pop();
console.log(arrNumber);
arrNumber.shift();
console.log(arrNumber);

// untuk menambah item dalam array
arrNumber.push(5);
console.log(arrNumber);
arrNumber.unshift(1);
console.log(arrNumber);

// pop quiz
const text = "A puppy is really sad";
// result: sad really is puppy A
const result = text.split(" ").reverse().join(" ");
console.log(result);

// looping
let fruits = ["Apple", "Oranges", "Plum", "Melon", "Durian"];

// const apple = fruits[0];
// const oranges = fruits[1];
const [item1, oranges] = fruits;
console.log(item1, oranges);
// normal logic
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  if (i % 2 == 0) {
    console.log(fruit);
  }
}

// syntax "for ...of"
for (let fruit of fruits) {
  console.log(fruit);
}

// syntax "for ...of" with index
for (let [i, fruit] of fruits.entries()) {
  console.log(fruit);
  if (i % 2 == 0) {
    console.log(fruit);
  }
}

const products = [
  ["Apple", "Oranges", "Plum", "Melon", "Durian"],
  ["Egg", "Rice", "Wheat"],
];
// loop array in array
for (let product of products) {
  for (let item of product) {
    console.log(item);
  }
}
