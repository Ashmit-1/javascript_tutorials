let int = null
let someNumber = Number(int)
let someString = String(int)
let someBoolean = Boolean(int)
//console.table([int, someNumber, someString, someBoolean])

// null gives null as string.

//*************************************Operations****************************************

console.log(5 % 3);  // % gives remainder as return
console.log(2 ** 3); // ** gives power 
console.log(true + true);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

let x2 = 3;
const y2 = x2++;

console.log(`x2: ${x2}, y2: ${y2}`);

console.log(`The value of x2 is ${x2}`); // This is the way to get both a string and a previously number/string in input.

const fish = ["Lion", , "Angel"];
console.log(fish) // This gives [ 'Lion', <1 empty item>, 'Angel' ] as output

let str1 = "Ashmit"
let str2 = " is"
let str3 = " learning"
let str4 = " JavaScript"
let str5 = str1 + str2 + str3 + str4
console.log(`The complete string is ${str5}`)


let userOne = {
    name : "Ashmit Das",
    email : "ashmit@google.com",
    college : "VIT",
    age : 18
}

console.log(userOne.age);