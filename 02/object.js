// singleton object created using -> "Object.create"

// literal object creation

let sym1 = Symbol("key") 
let sym2 = Symbol("key")

const User = {
    name: "Maaz",
    age: 21,
    "full name": "Maaz Ahmed", // -> speical condition
    email: "maazahmed@google.com",
    isLoggedIn: false,
    sym1: "mykey1",
    [sym2]: "mykey2", // without initializing this it won't work
    // square brackets is used to keep the datatype -> special condition 
}

console.log(typeof User.name) //string
console.log(User["full name"]) // Maaz Ahmed
console.log(User["age"])
console.log(typeof User.sym1) // string
console.log(User.sym1) // mykey1
console.log(User["sym1"]) // mykey1
console.log(typeof User[sym2]) // it gives string as the value pair is stored as the string and its being accessed here
console.log(User[sym2])

User.greeting = function(){
    console.log(`Hello User, ${User["full name"]} and your age is ${User.age}`)
}

User.greeting2 = funtion(){
    console.log(`Hello User ${this.name} and your age is ${this.age}`) // we can't use [] access method with 'this' method
}

console.log(User.greeting) // returns the reference of the method
console.log(User.greeting()) // calls the method

User.email = "maazahmed@microsoft.com"
console.log(User)
Object.freeze(User)
User.name = "maazahmed@facebook.com" // this will not affect the object since we have freezed it
console.log(User)