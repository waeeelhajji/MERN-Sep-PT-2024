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
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const name = person.firstName;
const last = person.lastName;
const userName = person.username;
const { firstName, lastName, username } = person
const { email, createdAt } = person
console.log(firstName, lastName, username)
console.log(email, createdAt)

































































































