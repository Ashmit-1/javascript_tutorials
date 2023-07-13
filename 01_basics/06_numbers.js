const testNumber = new Number(23.3457)
let testNumber2 = testNumber.valueOf()
console.log(typeof(testNumber2));
console.log(testNumber.toPrecision(5));
tes2 = new Number(123456789)
console.log(testNumber2.toLocaleString('en-IN'));
console.log(Math.sqrt(25));
console.log(Math.sign(-90));
console.log(Math.sign(120));
console.log(Math.round(testNumber));

const min = new Number(0)
const max = new Number(100)
let randomNumberOne = (Math.floor(Math.random()*((max+1)-min))+min)
let randomNumberTwo = (Math.floor(Math.random()*((max+1)-min))+min)
console.log(randomNumberOne);
console.log(randomNumberTwo);
let randomResult=Math.abs(randomNumberOne-randomNumberTwo)
console.log(randomNumberOne-randomNumberTwo)
console.log(randomResult);
let randomArray = [1,2,3,4,5,6,7,8,9,10,0,11,12,13,14,15,16,17,18,19,20,1010101010101,-2933484389]
console.log(Math.min(...randomArray));
//console.log(Math.min());
console.log(Math.max(...randomArray));
//console.log(Math.max());
console.log(Math.sqrt(100));
console.log(Math.pow(2,-1));
