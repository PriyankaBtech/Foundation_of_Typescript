/****************** Type Aliases ******************/

type User = {
    name: string
    email: string
    isActive: boolean
}

//function createUser(user: User) {} // 'user' is declared but its value is never read

function createUser(user: User): User {
    return {name: "", email: "", isActive: false}
} 

createUser({name: "Priyanka", email: "priya@gmail.com", isActive: false}) // no error

export{}