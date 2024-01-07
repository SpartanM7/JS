// Dates

let myDate = new Date()
console.log(myDate); // -> 2024-01-04T12:57:44.049Z
console.log(myDate.toString());  // Thu Jan 04 2024 18:27:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Jan 04 2024
console.log(myDate.toLocaleString()); // 4/1/2024, 6:27:44 pm
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23) // 23/1/2023, 12:00:00 am
let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 23/1/2023, 5:03:00 am
let myCreatedDate = new Date("2023-01-14") // 14/1/2023, 5:30:00 am
let myCreatedDate = new Date("01-14-2023") // 14/1/2023, 12:00:00 am
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1704373064077
console.log(myCreatedDate.getTime()); //1674412200000
console.log(Math.floor(Date.now()/1000)); // 1704373064

let newDate = new Date()
console.log(newDate); // 2024-01-04T12:57:44.078Z
console.log(newDate.getMonth() + 1); // 1
console.log(newDate.getDay()); // 4

// `${newDate.getDay()} and the time ` -> string interpolation

newDate.toLocaleString('default', {
    weekday: "long",
    
})
