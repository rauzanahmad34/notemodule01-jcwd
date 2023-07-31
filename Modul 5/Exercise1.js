// 1.
function maxLowAvg(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let avg = arr.reduce((sum, value) => sum + value, 0) / arr.length;
    return [min, max, avg];
}

let numbers = [4,5,6,6,8,20,21,21];
let result = maxLowAvg(numbers);
console.log(result);
// 2.
function concat(words) {
    const kataEnd = words.pop();
    const gabung = words.join(", ")
    const concatString = `${gabung}, and ${kataEnd}`;
    return concatString;
}
const wordArray = ["Apple", "Orange", "Banana", "Mango"];
const hasil = concat(wordArray);
console.log(hasil);
// 3.
function split(kata){
    const pisahArray=kata.split(" ");
    return pisahArray;
}

const text="Hello world"
const pisah=split(text)
console.log(pisah)
// 4.
function calculate(numA,numB){
    const jumlah=[]
    for (let i=0;i<numA.length;i++){
        jumlah.push(numA[i]+numB[i])
    }
    return jumlah;
}

const numA=[1,2,3,2]
const numbB=[3,2,1,30]

const jumlah=calculate(numA,numbB)
console.log(jumlah)
// 5.
// function addUniqueElement(arr, element) {
//     if (!arr.includes(element)) {
//       arr.push(element); 
//     }
//     return arr;
//   }
//   let myArray = ["Welcome to "];
//   let newElement = "Hell";
  
//   let jum = addUniqueElement(myArray, newElement);
//   console.log(jum)
function addUnique(existingArr, newItem){
    let allowed=true;
    for (let item of existingArr){
        if(item===newItem){
            allowed=false;
            break;
        }
    }
    if(allowed){
        existingArr.push(newItem)
    }
    return existingArr;
}
const input=["gula","kecap","pasir"]
console.log(addUnique(input,"kecap"))
