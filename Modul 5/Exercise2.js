// 1.
function number(arr){
    const resultArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            resultArr.push(arr[i]) 
        }
    }
    return resultArr;
}
const inputArr=[1,2,3,4,5,6,7,8,9,10]
const resultArr=number(inputArr);
console.log(resultArr)

// 2.
function insertElement(maxSize,...arrElement){
    const remainSpace=[...maxSize,...arrElement]
    const elementAdd=remainSpace.slice(0,5)
    return elementAdd
}
let myArray=[1,2,3,4,8,8,2,3]
myArray=insertElement(myArray)
console.log(myArray)

// 3.
const textA="Makan"
const textB="Malam"
const concat=textA.concat(" ",textB)
console.log(concat)

// 4.
function findDuplicateArr(arr){
    const kosong={}
    const duplicate=[]

    for(const item of arr){
        if(kosong[item]){
            duplicate.push(item)
        }else{
            kosong[item]=1;
        }
    }
    return duplicate;
}

const array=[1,1,2,3,4,3]
console.log(findDuplicateArr(array))

// 5.
function sama(arr,arr2){
    const beda=[]

    for(const it of arr){
        if(!arr2.includes(it)){
            beda.push(it)
        }
    }
    return beda;
}

const arr=["kucing","kerbau","kelinci","ayam"]
const arr2=["beruk","kucing","kelinci","ayam"]
console.log(sama(arr,arr2))