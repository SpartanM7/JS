const accountID = 12352 // we cannot change the value of a const value
let accountEmail = "kochbhi@gmail.com"
var accountPassword = "Kochbhikumar1234567890"; // don't use var cuz of block scope and functional scope
let accoutState

console.table([accountEmail, accountID, accountPassword, accoutState])

accountEmail = "kochnai@gmail.com"
accountPassword = "kochnai2346234"

console.table([accountEmail, accountID, accountPassword, accoutState])