//# String
let greet: string = "Hello Priyanka";

// greet = 10 // error
// greet = true // error

console.log(greet);

//# Number
let userId: number = 2000.5;

//userId.(provide all methods of number)

//# Boolean
let isLoggedIn: boolean = true;

// isLoggedIn.(provide all methods of boolean)

//# Any
let sweet; 

function getSweet() {
    return "Laddu";    
}

// sweet: any
sweet = getSweet()
// Note : sweet accept all kind of value like string, number, boolean
// this breaks the consistency of code, this is not the right way to code

// Any : - any is not the special type of typescript, its used where you don't want to check the type. 
      // - its simple means stop the type checking.
      // - You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

// Right way

let anotherSweet: string;

function getAnotherSweet() {
    return "Burfi";
}

// anotherSweet: string
anotherSweet = getAnotherSweet()


export{}
