/******************* function with Number **********************/

function addTwo(num) {
    num.toUpperCase() // any
    return num + 2
}

addTwo(10)
// function addTwo(num: any): any => any is a problem

addTwo("10") // still works
// function addTwo(num: any): any 

// NOTE : addTwo() = wrong way to declare function


// # Right
function addThree(num: number) {
    addThree.toUpperCase() // does not exist on type '(num: number) => number'
    return num + 3
}

addThree(8)
// function addThree(num: number): number

addThree("8")
// Argument of type 'string' is not assignable to parameter of type 'number


/******************* function with String **********************/

// # Wrong way
function myName(name) { // any
    return `My name is ${name}`    
}

myName("Priyanka")
// function myName(name: any): string

myName(15)
// function myName(name: any): string => still accept number, this is a problem

// # Right way
function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Priyanka", "Priyanka@gmail.com", true )

// how add default value 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// loginUser("p", "p@gmail.com") // without default parameter gives error
loginUser("p", "p@gmail.com") // its works
 

export{}