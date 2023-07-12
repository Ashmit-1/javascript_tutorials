const testNumber = new Number(23.3457)
let testNumber2 = testNumber.valueOf()
// console.log(typeof(testNumber2));
// console.log(testNumber.toPrecision(5));
tes2 = new Number(123456789)
//console.log(testNumber2.toLocaleString('en-IN'));
// console.log(Math.sqrt(25));
// console.log(Math.sign(-90));
// console.log(Math.sign(120));
// console.log(Math.round(testNumber));

const min = new Number(0)
const max = new Number(100)
let randomNumber = (Math.floor(Math.random()*((max+1)-min))+min)
console.log(randomNumber);
