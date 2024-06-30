// primitive

// 7 types:
// String, Number, Boolean, null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')        //dataType = Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 658489646684n

// Reference  (non primitive)

// Array, object, Functions // DataType = Function/object

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "harshi",
    age: 20,
}

// function(){}

const myFunction = function(){
    console.log("Hello world");
}

// Typeof to find dataType 

console.log(typeof bigNumber);