// array -> object, it can have different datatypes

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // pushes the number at the end of array
myArr.push(7)
myArr.pop() // removes the last element

myArr.unshift(9) // add the number to the start of the array
myArr.shift() // removes the 0th element

console.log(myArr.includes(9)); // gives boolean output
console.log(myArr.indexOf(3)); // gives the index

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // rxcludes the range and doesn't change the real array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // includes the range, and removes the spliced part from the real array
console.log("C ", myArr);
console.log(myn2);