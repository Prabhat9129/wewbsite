/*
const str = 'prabhat' + 1;
console.log(typeof str);
let name = 'prabhat';
let arr = Array.from(name);
console.log(arr);

//Array practice set

const number = Number(prompt('Enter a Number'));

arra.push(number);

// for (let a of arra) {
//   number === 0 ? a : (a = a + number);
//   console.log(a);
// }
console.log(arra);

const arra = [1, 3, 4, 6, 7, 8, 9, 50];
let number1;
do {
  number1 = Number(prompt('Enter a Number'));
  arra.push(number1);
} while (number1 != 0);
console.log(arra);

let n = arra.filter(x => {
  return x % 10 == 0;
});
console.log(n);

let n1 = arra.map(x => {
  return x * x;
});
console.log(n1);

let n2 = arra.reduce((x1, x2) => {
  return x1 + x2;
});
console.log(n2);

function textToNumberBinary(str) {
  var str1 = '';
  str.split(' ').filter(item => {
    if (item.toLowerCase() == 'one') {
      str1 += '1';
    } else if (item.toLowerCase() == 'zero') {
      str1 += '0';
    }
  });
  for (let i = 1; i < str1.length; i++) {
    if (8 * i == str1.length * i) {
      return str1;
    } else {
      return (str1 = `""`);
    }
  }
}
console.log(textToNumberBinary('zero one zero one zero one zero one'));
console.log(textToNumberBinary('Zero one zero ONE zero one zero one'));
console.log(textToNumberBinary('zero one zero one zero one zero one one two'));
console.log(textToNumberBinary('zero one zero one zero one zero three'));
console.log(textToNumberBinary('one one'));

function sevenBoom(arr) {
  let has = false;
  arr.map(e =>
    String(e)
      .split('')
      .forEach(e => {
        if (e == 7) has = true;
      })
  );
  if (has == true) {
    return 'boom';
  } else {
    return 'not a7';
  }
  //?"Boom!":"there is no 7 in the array"
}
console.log(sevenBoom([1, 2, 3, 4, 5, 67]));

//filter
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 90, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 4 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

const filt = products.filter(function (con) {
  return con.type === 'vegetable' && con.quantity > 0 && con.price < 10;
});

console.log(filt);

//find
var posts = [
  {
    id: 1,
    title: 'New Post',
  },
  { id: 2, title: 'old post' },
];
var comment = { postId: 1, content: 'Great POst' };
function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

//EVERY AND SOME
var names = ['prabhat', 'dixt', 'joy'];
const ecvery = names.every(function (name) {
  return name.length > 4;
});

const somey = names.some(function (name) {
  return name.length > 7;
});
console.log(ecvery, somey);

//reduce helper
var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

const color = primaryColors.reduce(function (pre, pricolor) {
  pre.push(pricolor.color);
  return pre;
}, []);
console.log(color);

//using map
const maps = primaryColors.map(function (pre) {
  return pre.color;
});
console.log(maps);

//
var i = 20;
function varlet(num) {
  var i = num;
  return i;
}
var i = 30;
console.log(varlet(23), i);

function availableSpots(arr, num) {
  const spot = arr.length - 1;
 
    if (num % 2 === 0) {
    arr.reduce((pre,anum)=>{
      if(arr[0]== )
    },num)
    }

  
}
availableSpots([1, 2, 3, 4], 7);


 question1
Have the function MathChallenge(str) take the str parameter, which will be a simple mathematical formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.
Examples
Input: "4 - 2 = x"
Output: 2
Input: "1x0 * 12 = 1200"
Output: 0


function MathChallenge(str) {
  let arrstr = str.split(' ');
  const[number1,operator,number2,_,answer]=arrstr;
  switch () {
    case value:
      
      break;
  
    default:
      break;
  }
  return arrstr;
}
console.log(MathChallenge('4 - 2 = x'));




question2:-
Have the function ArrayChallenge(arr) take the array of numbers stored in arr and first determine the largest element in the array, and then determine whether or not you can reach that same element within the array by moving left or right continuously according to whatever integer is in the current spot. If you can reach the same spot within the array, then your program should output the least amount of jumps it took. For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is and if you jump 6 spaces to the right while looping around the array you end up at the last element where the 1 is. Then from here you jump 1 space to the left and you're back where you started, so your program should output 2. If it's impossible to end up back at the largest element in the array your program should output -1. The largest element in the array will never equal the number of elements in the array. The largest element will be unique.
Examples
Input: [1,2,3,4,2]         
Output: 3
Input: [1,7,1,1,1,1]          
Output: 2


function ArrayJumping(arr) {
  var L, ht, max_index, travel_set;
  ht = {};
  max_index = arr.index(Math.max(arr));
  L = arr.length;

  for (var i = 0, _pj_a = L; i < _pj_a; i += 1) {
    ht[i] = [left(L, i, arr[i]), right(L, i, arr[i])];
  }

  if (_pj.in_es6(max_index, ht[max_index])) {
    return 1;
  }

  travel_set = set(ht[max_index]);

  for (var step = 2, _pj_a = L + 1; step < _pj_a; step += 1) {
    for (
      var val, _pj_d = 0, _pj_b = tuple(travel_set), _pj_c = _pj_b.length;
      _pj_d < _pj_c;
      _pj_d += 1
    ) {
      val = _pj_b[_pj_d];
      travel_set.add(ht[val][0]);
      travel_set.add(ht[val][1]);
    }

    if (_pj.in_es6(max_index, travel_set)) {
      return step;
    }
  }

  return -1;
}

function left(length, index, number) {
  var left;
  left = number % length;

  if (left > index) {
    left = length + index - left;
  } else {
    left = index - left;
  }

  return left;
}

function right(length, index, number) {
  var right;
  right = number % length;

  if (right > length - index - 1) {
    right = right + index - length;
  } else {
    right = right + index;
  }

  return right;
}

console.log(ArrayJumping([1, 2, 3, 4, 2]));



question 3:-

Have the function ArrayChallenge(strArr) take the array of strings stored in strArr and return the third largest word within it. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
Examples
Input: ["coder","byte","code"]
Output: code
Input: ["abc","defg","z","hijk"]
Output: abc

function ArrayChallenge(strArr) {
  // const itemlength = strArr.map(word => {
  //   return word.length;
  // });

  for (let i = 0; i < strArr.length; i++) {
    let temp = strArr[i];
    let j = i - 1;
    while (j >= 0 && temp.length > strArr[j].length) {
      strArr[j + 1] = strArr[j];
      j--;
    }
    strArr[j + 1] = temp;
  }
  return strArr[2];
}
console.log(ArrayChallenge(['abc', 'defg', 'z', 'hijk']));

function drop(arr, val) {
  let index = arr.indexOf(val);
  return arr.splice(0, index);
}
console.log(drop([1, 2, 3], 3));

function addele(str) {
  const [first, second] = str;
  const arr1 = eval(first);
  const arr2 = eval(second);
  let add;
  if (arr1.length > arr2.length) {
    add = arr1.map((val, index) => {
      return arr2[index] ? arr2[index] + val : val;
    });
  } else {
    add = arr2.map((val, index) => {
      return arr1[index] ? arr1[index] + val : val;
      //arr1[index];
      //arr1[index] ? arr1[index] + val : val;
    });
  }

  console.log(arr1, arr2, add);
  return add.join('-');
}

console.log(addele(['[1,2,3,4]', '[2,34,5,55,66,6]']));
console.log(addele(['[1,2,3,4,11,111,23,12,331,11]', '[2,34,5,55,66,6]']));

function MathChallenge(str) {
  const str1 = str.split('=');
  //console.log(str1);
  for (let i = 0; i < 100000; i++)
    if (str1[0].includes('x')) {
    } else if (str1[1].includes('x')) {
    }
}
console.log(MathChallenge('4 - 2 = x'));















question1:
Array Matching
Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.
Examples
Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
Output: 7-4-6-10-6
Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
Output: 3-3-6-2

*/

function addele(str) {
  const [first, second] = str;
  const arr1 = eval(first);
  const arr2 = eval(second);
  let add;
  if (arr1.length > arr2.length) {
    add = arr1.map((val, index) => {
      return arr2[index] ? arr2[index] + val : val;
    });
  } else {
    add = arr2.map((val, index) => {
      return arr1[index] ? arr1[index] + val : val;
    });
  }
  return add.join('-');
}
console.log(addele(['[5, 2, 3]', '[2, 2, 3, 10, 6]']));
console.log(addele(['[1, 2, 1]', '[2, 1, 5, 2]']));
/*

question 2



Missing Digit
Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.
Examples
Input: "4 - 2 = x"
Output: 2
Input: "1x0 * 12 = 1200"
Output: 0
*/

function MathChallenge(str) {
  const str1 = str.split('=');
  //console.log(str1);
  for (let i = 0; i <= 100; i++)
    if (str1[0].includes('x')) {
      str1[0].replace('x', i);
      if (str1[0] == str1[1]) {
        console.log('hello');
      } else {
        console.log('hello1');
      }
    } else if (str1[1].includes('x')) {
    }
}

console.log(MathChallenge('1x0 * 12 = 1200'));
/*
/ question3:-


// Character Removal
// Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters representing a word, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: strArr can be: ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine the minimum number of characters, if any, can be removed from the word so that it matches one of the words from the dictionary. In this case, your program should return 2 because once you remove the characters "c" and "e" you are left with "world" and that exists within the dictionary. If the word cannot be found no matter what characters are removed, return -1.
// Examples
// Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
// Output: 4
//Input: ["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]->8

*/
