/*********************** Interface **********************/

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponame: string, value: number): number
}

const user: User = { dbId: 3564, email: "priyanka@gmail.com", userId: 12345}

user.email = "priya@gmail.com" // no error
user.dbId = 2000 // error

// startTrail = "trail started" // error

startTrail: () => {
    console.log("Trail started") // no error
}

getCoupon: (name: "priyankacoupon", off: 10) => {
    return 1010 // no error
}