function addition (num1, num2){
    return num1 + num2

}
    
console.log(addition(1,23));

function num (...n1)
{
    return n1
}
console.log(num(100, 200, 300, 690));

const fbuser ={
    userId: "abc1123",
    userAge: 28,
    userRegion: "east"
}

function getUserDetails(enterObject){
    return `User ID is ${enterObject.userId}. User is ${enterObject.userAge} years old and he is from ${enterObject.userRegion} region`
}

console.log(getUserDetails(fbuser));

let demonstrationArray = [2, 3, 7, 12, 90]
function getTheThirdTermOfArray (sampleArray){
    return sampleArray[2]
}
function obtainLastTermOfArray (specimenArray){
    return specimenArray[specimenArray.length - 1]
}
console.log(getTheThirdTermOfArray(demonstrationArray));
console.log(obtainLastTermOfArray(demonstrationArray));
