/********************** Union Type ************************/

// games and banking application

let score: number | string | boolean = 50

score = 35 // no error
score = "35" // no error
score = true // no error

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let priyanka: User | Admin = {name: "Priyanka", id: 12345}

priyanka = {username: "pinki", id: 67890} // no error


function getDatabaseId(id: number | string) {
    // making some APIs calls
    console.log(`DB id is: ${id}`)    
}

getDatabaseId(10) // no error
getDatabaseId("10") // no error


// but in some cases
function getDbId(id: number | string) {
    //id.toUpperCase() // error

    if (typeof id === 'string') {
        id.toUpperCase() // no error        
    }    
}


// # Array

const dataOne: number[] = [1, 2, 3, 4, "5"] // error
const dataTwo: string[] = [1, 2, 3, 4] // error
const dataThree: string[] = ["1", "2", "3"] // no error

// either all number or string
const dataFour: string[] | number[] = [1, 2, 3, 4, 5]  // no error
const dataFive: string[] | number[] = ["1", "2", "3", "4"]  // no error
const dataSix: string[] | number[] = ["1", "2", 3, 4]  // error

// if you want both type in array
const dataSeven: (string | number)[] = ["1", 2, "3", "4", 5] // no error
const dataEight: (string | number | boolean)[] = [2, "3", "4", 5, false] // no error


// Strict cases

let pi:3.14 = 3.14
pi = 3.15 // error
// NOTE: its not a right way to use

// effective way
let seatAllotment: "28" | "middle" | "window"

seatAllotment = "top" // error
seatAllotment = "30" // error