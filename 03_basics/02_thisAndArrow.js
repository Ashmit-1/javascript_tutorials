const userDetails = {
    userName: "Ashmit",
    userLastName: "Das",
    userAge: 46,
    userId: "abc987",
    userLoggedStatus: true,
    logInDays: ["monday", "thursday", "sunday"]
}
const { userName: uname } = userDetails
console.log(uname);

userDetails.logInInfo = function () {
    console.log(`Current user login status is ${this.userLoggedStatus} and this week the user has logged in ${this.logInDays.length} times. The days are ${this.logInDays}`);
}
userDetails.logInInfo()

const reverseString = (inputString) => (Array.from(inputString).reverse().join(""))

console.log(reverseString("timhsA"));

const lengthOfArray = (inputArray) => (inputArray.length)
console.log(lengthOfArray(userDetails.logInDays));