let string = " My name is Ashmit Das"
for (const char of string) {
    if (char == " ") {
        continue
    }
    //console.log(`Each character of the string is ${char}`);
}
//FOROF IS USED IN CASE OF ARRAY
const myArr = [10, 20, 30, 40, 50]
const searchNum = 50
let count;
for (const iterator of myArr) {
    
    if (iterator === searchNum) {
        console.log(`${searchNum} is present in the array`);
        count = 1;
        break;
    } 
   
} 
if(count != 1) {
        console.log("Search num is not present in the array");
     }

// FOROF LOOP IN MAPS

const myMap = new Map()
myMap.set("JEE", "Engineering")
myMap.set("NEET", "Medical")
myMap.set("UPSC", "Civil Servant")
myMap.set("CA", "Charterred Accountant")

console.log(myMap);

for (const [key, value] of myMap) {
    console.log(`${key} :- ${value}`);
}

//FORIN LOOP USED IN OBJECTS

const superHeroes = {

    DC: "Superman",
    Marvels: "Thor",
    Indian: "Krish"

}

for (const key in superHeroes) {
   console.log(`${key} has ${superHeroes[key]}`);
}