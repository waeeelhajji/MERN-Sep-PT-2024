// ? Fun Fact JavaScript was originally called mocha and later renamed LiveScript than the developers didn't like it then renamed to JavaScript because is take is a lot of hints in JAVA




//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?

//* A paradigm can be defined as an approach to solving a problem. A programming paradigm is
//*  a way to solve problems by using a programming language.

//* As you know, each problem needs a specific approach to its solution. So,
//*  we would have a set of paradigms for different sets of problems. As programming
//*  languages are a way to solve the problems using the code, they will offer support to these paradigms.

//* So, any programming language which offers multiple programming paradigms is
//* referred to as a multi-paradigm programming language.Some of the well-known paradigms are mentioned below.





//?--------Object-Oriented Programming Paradigm


//* This is an approach where the solution is designed around communication between
//* the Objects or Classes, which hold the data and the methods to act upon that data.
//* A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript



//?--------Functional Programming Paradigm - Haskell



//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* Some of the languages supporting this paradigm are Haskell, JavaScript



//?--------------- CallBack Function

const CallBack = function () {
    console.log("start")
}

setTimeout(CallBack, 3000);


console.log("end");


//?------------------- The big Friz

const freeze = [1, 2, 3, 4, 5]
const ObJFreeze = Object.freeze([1, 2, 3, 4, 5])
const CopyObJFreeze = [...ObJFreeze]
CopyObJFreeze.push(78)
console.log(ObJFreeze)
console.log(CopyObJFreeze)






















