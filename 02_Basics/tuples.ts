/************************ Tuples *************************/

//const user: (string | number)[] = [1, "priya"] 

// store data in type order
let user: [string, number, boolean] 

user = ["priya", 1234, true] // no error
user = [1234, true, "priya"] // error

let RGB: [number, number, number] = [132, 364, 162] // no error
//let RGB: [number, number, number] = [132, 364, 162, 0.5] // error


type User = [number, string]

const newUser: User = [142, "priyanka@gmail.com"] // no error

// update value
newUser[1] = "priya@gmail.com" // no error

newUser.push(24) // no error
 

export{}