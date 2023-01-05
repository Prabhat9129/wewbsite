/*
function findIndex(arr, str) {
  return arr.indexOf(str);
}

console.log(findIndex(['hi', 'edabit', 'fgh', 'abc'], 'fgh'));
console.log(findIndex(['Red', 'blue', 'Blue', 'Green'], 'blue'));

console.log(findIndex(['a', 'g', 'y', 'd'], 'd'));

console.log(findIndex(['Pineapple', 'Orange', 'Grape', 'Apple'], 'Pineapple'));

//2
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(concat([1, 3, 5], [2, 6, 8])); //[1, 3, 5, 2, 6, 8]

console.log(concat([7, 8], [10, 9, 1, 1, 2])); //[7, 8, 10, 9, 1, 1, 2]

console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]

//3. Given an index and an array, return the value of the array with the given index.
function valueAt(arr, i) {
  return arr[Math.floor(i)];
}
//console.log(first);
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); // 6

console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)); // 5

console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); // 4

//.Create a function that finds the index of a given item.

function search(arr, item) {
  return arr.indexOf(item);
}

console.log(search([1, 5, 3], 5)); // 1
console.log(search([9, 8, 3], 3)); // 2

console.log(search([1, 2, 3], 4)); // -1


//
function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

console.log(sumArray([-1, 0, 1])); // 0

console.log(sumArray([0, 4, 8, 12])); // 24





// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
function parseArray(arr) {
  arr.forEach(item => {
    return item.toString();
  });
}

console.log(parseArray([1, 2, 'a', 'b']));

function Arrstr(str1) {
  var num = [];
  var varchar = [];

  str1.split('').forEach(item => {
    for (let i = 0; i < 10; i++) {
      if (item == i) {
        num.push(item);
      }
    }
  });

  return num;
}

console.log(Arrstr('he3llo9'));


//q1.

Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.
Examples
Input: "H3ello9-9"
Output: 4
Input: "One Number*1*"
Output: 0

*/

function Arrstr(str1) {
  var num = [];
  var format = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  format = format.split('');

  var num1 = /^[0-9]$/;
  var charstr = [];

  for (let i = 0; i < str1.length; i++) {
    if (format.includes(str1[i])) {
      charstr.push(str1[i]);
    } else if (num1.test(str1[i])) {
      num.push(str1[i]);
    }
  }
  //   const schar = 0;
  //   if (str1.match(format)) {
  //     schar += 1;
  //   }

  console.log(num, charstr);
  let output = num.reduce((item, value) => {
    return item + Number(value);
  }, 0);
  let out = Math.floor(output / charstr.length);
  return out;
}
console.log(Arrstr('H3ello9-9'));
console.log(Arrstr('One Number*1*'));

/*
question2:-
Have the function WordSplit(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: strArr can be: ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]. Your goal is to determine if the first element in the input can be split into two words, where both words exist in the dictionary that is provided in the second input. In this example, the first element can be split into two words: hello and cat because both of those words are in the dictionary.

Your program should return the two words that exist in the dictionary separated by a comma. So for the example above, your program should return hello,cat. There will only be one correct way to split the first element of characters into two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. The first element itself will never exist in the dictionary as a real word.
Examples
Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
Output: base,ball
Input: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
Output: abcg,efd

*/
function WordSplit(strArr) {
  const [word, dict] = strArr;
}

/*
question3
Bitwise Two
Have the function BitwiseTwo(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise AND operation on both strings. A bitwise AND operation places a 1 in the new string where there is a 1 in both locations in the binary strings, otherwise it places a 0 in that spot. For example: if strArr is ["10111", "01101"] then your program should return the string "00101"
Examples
Input: ["100", "000"]
Output: 000
Input: ["10100", "11100"]
Output: 10100
Browse Resources
Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.



*/
function BitwiseTwo(strArr) {
  var output = [];
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] == 1 && strArr[1][i] == 1) {
      output.push(1);
    } else {
      output.push(0);
    }
  }
  return output;
}
console.log(BitwiseTwo(['10100', '11100']));
console.log(BitwiseTwo(['100', '000']));
