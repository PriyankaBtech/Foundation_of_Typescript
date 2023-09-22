
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    registerNum?: number
}

type registerNumber = {
    num: string
}

type registerDate = {
    date: string
}

// not a right practice
type registerDetails = registerNumber & registerDate & {
    cvv: number
}



//function createUser(u: User) {}

let myUser: User = {
    _id: "12345",
    name: "priyanka",
    email: "priya@gmail.com",
    isActive: true
}

// update value
myUser.email = "priyanka@gmail.com" // no error
//myUser._id = "67890" // error
