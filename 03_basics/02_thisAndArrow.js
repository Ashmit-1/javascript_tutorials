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

function addIndefinite() {
    let total = 0
    for (let index = 0; index < arguments.length; index++) {
        total = total + arguments[index];
    }
    return total;
}
console.log(addIndefinite(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));