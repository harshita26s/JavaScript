const name = "harshita"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('harshita-26')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)  //0,1,2,3 included 4 excluded  // negetive value is ignored
console.log(newString);

const anotherString = gameName.slice(-11, 6)
console.log(anotherString);

const newStringOne = "   harshi    "
console.log(newStringOne);
console.log(newStringOne.trim());   // white space and line terminator


const url = "https://harshi.com/harshi%20d"
console.log(url.replace('%20', '_'))

console.log(url.includes('harshi'));

console.log(url.includes('dewa'));

console.log(gameName.split('-'));   // converted string in array

