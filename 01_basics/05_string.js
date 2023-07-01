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

