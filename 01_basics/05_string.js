let testString = new String ("hello world")
let testStringTwo = new String ("Javascript")

// at gives the character at the position opted for.

console.log(testString.at(4));
console.log(testString.at(-5)); // at also accepts negative values. Negative values actually start from the end of the string.

// charAt does the same job as at. The only difference is that at accepts negative values but charAt does not accepts negative values.

console.log(testString.charAt(7));

// charCodeAt gives the ASCII code of the character specified

console.log(testString.charCodeAt(5));

//codePointAt()

//concat() is used to join/concat 2 or more strings together.

console.log(testString.concat(', ' , testStringTwo));

// endsWith() returns a boolean type. It sees whether a string ends with a specified string or character or not. It's also used to see if a particular character or string is present at a particular index of the specified string.

console.log(testString.endsWith('e' , 2 ));

// fromCharCode() creates a string from the UTF-16 codes of the specified characters.

console.log(String.fromCharCode(65, 66, 67));
let testStringThree = String.fromCharCode(97, 98, 99)
console.log(testStringThree);

//includes() is used to see weather a particular character or set of character is part of the specified string or not.

console.log(testString.includes("world")); // this will give true as output 
console.log(testString.includes("earth")); // this will give false as output

// trim deletes the extra spaces within a string

let testStringFour = new String("     Jai    Hind   ")
console.log(testStringFour);             //desired output: [String: '     Jai    Hind   ']
console.log(testStringFour.trim());
console.log(testStringFour.valueOf());  //desired output:      Jai    Hind  


// toUpperCase() turns a string of lower case to upper case

console.log(testString.toUpperCase());
console.log(testStringTwo.toUpperCase());
console.log(testStringThree.toUpperCase());
console.log(testStringFour.toUpperCase());


// toLowerCase() turns a string of lower case to upper case

console.log(testString.toLowerCase());
console.log(testStringTwo.toLowerCase());
console.log(testStringThree.toLowerCase());
console.log(testStringFour.toLowerCase());

// this returns the specified string value only

console.log(testStringFour.toString());
 
// The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

console.log(testStringTwo.substring(2,5));
console.log(testStringTwo.substring(5));
let myString = 'MADAM'
// console.log(myString)
// let myStringSplitted = myString.split("")
// console.log(myStringSplitted)
// let myStringSplittedAndReversed = myStringSplitted.reverse()
// console.log(myStringSplittedAndReversed)
// let reversedString = myStringSplittedAndReversed.join("")
// console.log(reversedString);
let reversedStr = myString.split('').reverse().join('')
console.log(reversedStr);
// console.log(typeof reversedStr);



