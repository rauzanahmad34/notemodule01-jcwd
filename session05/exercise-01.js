// 01. Write a function to get the lowest, highest and average value
// in the array (with and without sort function).
function findMinMaxAvg(arrNumber) {
  // with sort
  // const sortedArrNumber = arrNumber.sort((a,b) => a - b);
  // console.log(sortedArrNumber)
  // let highest = sortedArrNumber[sortedArrNumber.length - 1];
  // let lowest = sortedArrNumber[0];

  // without sort
  let highest = arrNumber[0];
  let lowest = arrNumber[0];
  let sum = 0;

  for (let number of arrNumber) {
    if (number > highest) {
      highest = number;
    }

    if (number < lowest) {
      lowest = number;
    }

    sum += number;
  }

  const average = sum / arrNumber.length;

  return [lowest, highest, average];
}

// 02. Write a function that takes an array of words and returns a string by
// concatenating the words in the array, separated by commas and - the last word - by an 'and'.
function concatWords(arrWords) {
  let result = "";
  for (let i = 0; i < arrWords.length; i++) {
    const word = arrWords[i];

    if (i !== 0) {
      if (i === arrWords.length - 1) {
        result += " and ";
      } else {
        result += ", ";
      }
    }

    result += word;
  }

  return result;

  // oneliner trick;
  // return result;
  // return arrWords.map((v, i) => {
  //   if (i === arrWords.length - 1) {
  //     return "and " + v
  //   }
  //   return v + ","
  // }).join(" ")

  // const last = arrWords[arrWords.length - 1]
  // arrWords.pop()
  // return arrWords.join(", ") + " and " + last
}

// 03. Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
function splitWord(words, flagSplitter = false) {
  const result = [];
  let word = "";

  for (let i = 0; i < words.length; i++) {
    const characters = words[i];
    if (characters !== flagSplitter) {
      word += characters;
    } else {
      result.push(word);
      word = "";
    }

    if (i === words.length - 1) {
      result.push(word);
      word = "";
    }
  }

  return result;
}

// 04.Write a function to calculate each element in the same position from two
// arrays of integer. Assume both arrays are of the same length.
function addArrayItem(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    const num1 = array1[i];
    const num2 = array2[i];

    result.push(num1 + num2);
  }

  return result;
}

// 05.Write a function that adds an element to the end of an array. However,
// the element should only be added if it is not already in the array.
function addUnique(existingArr, newItem) {
  // cara manual
  let allowed = true;
  const result = [...existingArr];
  for (let item of existingArr) {
    if (item === newItem) {
      allowed = false;
      break;
    }
  }

  if (allowed) {
    result.push(newItem);
  }

  // menggunakan built in function
  // const result = [ ...existingArr ];
  // if (!existingArr.includes(newItem)) {
  //   result.push(newItem);
  // }

  return result;
}
