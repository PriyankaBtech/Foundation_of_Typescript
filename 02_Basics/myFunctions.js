"use strict";
/******************* function with Number **********************/

Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase(); // any
    return num + 2;
}
addTwo(10);
// function addTwo(num: any): any => any is a problem

addTwo("10"); // still works
// function addTwo(num: any): any 
// NOTE : addTwo() = wrong way to declare function


// # Right
function addThree(num) {
    addThree.toUpperCase(); // does not exist on type '(num: number) => number'
    return num + 3;
}

addThree(8);
// function addThree(num: number): number

addThree("8");
// Argument of type 'string' is not assignable to parameter of type 'number


/******************* function with String **********************/

// # Wrong way
function myName(name) {
    return "My name is ".concat(name);
}
myName("Priyanka");
// function myName(name: any): string

myName(15);
// function myName(name: any): string => still accept number, this is a problem


// # Right way
function signUpUser(name, email, isPaid) { }
signUpUser("Priyanka", "Priyanka@gmail.com", true);


// how add default value 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};

// loginUser("p", "p@gmail.com") // without default parameter gives error
loginUser("p", "p@gmail.com"); // its works
