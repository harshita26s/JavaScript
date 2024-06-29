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

// *************************************operatoions***************************************

let str1 = "Hello"
let str2 = " Harshi"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(true);
console.log(+true);
console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gamecounter = 100
// ++gamecounter;  //101   prefix
gamecounter++;  //101    Postfix

console.log(gamecounter);
