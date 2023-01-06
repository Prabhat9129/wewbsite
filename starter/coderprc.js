//Easy
//1.
/*
Have the function abCheck(str) take the str parameter being passed and return
 the string true if the characters a and b are separated by exactly 3 places
  anywhere in the string at least once (ie. "lane borrowed" would result in
 true because there is exactly three characters between a and b). Otherwise
 return the string false.
*/
console.log('hello to change');
console.log('hello change from master branch ');
<h1> check merge confict from brach master</h1>
const v1 = function (str) {
 <h1> check confilct from main brance</h1>
  let searchchar = ['a', 'b'];
  let gap = 3;
  if (str.length < gap) {
    return false;
  }
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === searchchar[0]) {
      if (str[i + gap + 1] === searchchar[1]) {
        return 'true';
      }
    }
    if (str[i] === searchchar[1]) {
      if (str[i + gap + 1] === searchchar[0]) {
        return 'true';
      }
    }
  }
  return 'false';
};
console.log(v1('lbne aorrowed'));
console.log(v1('xxbzzzax'));
// const charw = 'lane borowed';
// for (let i = 0; i < charw.length; i++) {
//   console.log(charw[i]);
// }

//2
/*
 Have the function alphabetSoup(str) take the str string parameter being
 * passed and return the string with the letters in alphabetical order (ie.
 * hello becomes ehllo). Assume numbers and punctuation symbols will not be

*/
function alphabetSoup(str) {
  const arr = str.split('');
  return arr.sort().join('');
}

console.log(alphabetSoup('hello'));
console.log(alphabetSoup('helloHELLO'));

/*
Have the function arithGeo(arr) take the array of numbers stored in arr and
 * return the string "Arithmetic" if the sequence follows an arithmetic pattern
 * or return "Geometric" if it follows a geometric pattern. If the sequence
 * doesn't follow either pattern return -1. An arithmetic sequence is one where
 * the difference between each of the numbers is consistent, where as in a
 * geometric sequence, each term after the first is multiplied by some constant
 * or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2,
 * 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be
 * entered, and no array will contain all the same elements.
*/

function arithGeo(arr) {
  return arr.forEach(item => {
    return item;
  });
}
console.log(arithGeo([[2, 4, 6, 8]]));
