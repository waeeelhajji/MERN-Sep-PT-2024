//!------------- Scope

// var name = "bob"

// function sayHi() {
//     name = "alice"
//     console.log(name)
// }

// sayHi() //?
// console.log(name) //?

//!------------- Hoisting 
// var x
// console.log(w)
// let x = "W"
// console.log(x)
// const w = "K"

// const nums = [11, 22, 33, 44];
// nums = "Yaya"
// nums[0] = "Yay"
// console.log(nums)

//! primitive datatypes
// String ??! Number ??! Boolean Null / undefined
// Number ??! String ??! Boolean Null / undefined
// Boolean
// Null / undefined

//! complex datatypes
// Arrays String ??! Number ??! Boolean Null / undefined
// Objects String ??! Number ??! Boolean Null / undefined



//!------------- Destructuring


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

const name = person.firstName;
const last = person.lastName;
const userName = person.username;
const { firstName, lastName, username } = person
const { email, createdAt } = person
console.log(firstName, lastName, username)
console.log(email, createdAt)

//-----------------0--------1------2------3--------4
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


const SecondeAnimal = animals[1]
const lastAnimal = animals[4]


console.log("----> Old Way", SecondeAnimal, lastAnimal)

const [, dd, , Cat, LastAnimal] = animals
console.log("----> New Way", dd, Cat, LastAnimal)



const Numbers = [1, 2, 3, 4, 5]
const [, , Number3] = Numbers

console.log(Number3)



//!-------------  Rest / Spread

//! pass by reference and pass by value

//?-------- 0X000145781W
const a = [10, 20, 30, 40, 50]
// const b = a
const b = [...a]

b.push(10000)


console.log(a) // ?
console.log(b) // ?


//!-------------  Arrow Function

function SayHi() {
    return "Hello ES5.1"
}


const SayHi = function () {
    return "Hello ES5.2"
}

// ?--- Arrow Function

const SayHiInArrowFunction = (a, b) => {
    return "Hello ES6"
}

//------
const SayHiInArrowFunction2 = a => {
    return "Hello ES6"
}

//------
const SayHiInArrowFunction3 = a => "Hello ES6"


//!------------- Ternary Operator

// ternary 3
// binary 2
// 10 decimal
// 16 Exadecimal

var age = 18
if (age < 20) {
    return "You are Yong"
} else {
    return "You are clear To go "
}

//--- ES6
age < 20 ? "You are Yong" : "You are clear To go"































































































