
// function getValue(value: number): string {
//     if(value > 5) {
//         return true
//     }
//     return "Ok"

// }

const sayHello = (s: string): string => {
    return "Hello" // no error
}

const sweets = ["chocolate", "ice-cream", "laddu", "fruits"] // const sweets: string[]
//const sweets = [1, 2, 3] // const sweets: number[]


// sweets.map((sweet: string) => {
//     return `sweets is ${sweet}` // no error
// })


// sweets.map((sweet: string) => {
//     return 1 // no error
// })

// sweets.map((sweet): string => {
//     return 1 // gives error
// })


// # wrong pratice
// function consoleError(errMsg: string) {
//     console.log(errMsg)
// }

// # right pratice
function consoleError(errMsg: string): void {
    console.log(errMsg)
}


// function handleError(errMsg: string): void {
//     //console.log(errMsg)
//     throw new Error(errMsg) // (parameter) errMsg: string
// }


// SOME FUNCTION NEVER RETURN A VALUE

function handleError(errMsg: string): never {
    //console.log(errMsg)
    throw new Error(errMsg) // (parameter) errMsg: string
}


export{}