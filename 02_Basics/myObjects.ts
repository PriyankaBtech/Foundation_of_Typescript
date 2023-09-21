/************************ Objects in Typescript ***************************/

const User = {
    name: "Priyanka",
    email: "priya@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

//createUser() //  An argument matching this binding pattern was not provided.
createUser({name: "Piryanka", isPaid: false}) // (property) name: any | isPaid: any


function createCourse():{name: string, price: number}{
    return {name: "full-stack", price: 5999}    
}

// SOME WEIRD BEHAVIOUR OF OBJECT

function anotherUser({name: string, isPaid: boolean}) {}

//anotherUser({name: "Pankaj", isPaid: false, email: "pankaj@gmail.com"}) // email part will give error

// BUT IN THIS WAY NO ERROR COME
let newUser = [{name: "Pankaj", isPaid: false, email: "pankaj@gmail.com"}]
console.log(newUser) // no error



export{}

