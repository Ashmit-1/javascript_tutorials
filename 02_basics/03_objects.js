const maritalStatus = Symbol ("")
const newUser = {
    name: "Ashmit",
    "full name": "Ashmit Das",
    age: 20,
    [maritalStatus]: "not married",
    isLoggedIn: true,
    email: "ashmit@blogspot.com",
    profession: "student",
    logInDays: ["tuesday", "wednesday", "sunday"]
}

// console.log(newUser["full name"]);
// Object.freeze(newUser)
// newUser.age = 14
console.log(newUser);

newUser.greetings = function () {
    console.log(`Hello ${this.name}`);
}
console.log(newUser.greetings());

newUser.details = function(){
    console.log(`Name of the user is ${this.name}`);
    console.log(`Age of the user is ${this.age}`);
    console.log(`Login status of the user is ${this.isLoggedIn}`);
    console.log(`Email of the user is ${this.email}`);
    console.log(`Login history of the user is ${this.logInDays}`);
}

newUser.details();