let score = 33   // number  number num 33
// let score = "33" // string string num 33
// let score = "33abc"  // string string number NaN
// let score = null   // object obj num 0
// let score = undefined   // undefined undefined num NaN
// let score = true//false    // bool bool numb 1/0
// string cannot be converted to num so, it will give NaN

console.log(typeof score);    
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true
// "" = false
//"harshi" = true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);