const boysSchool = new Array ("Aurobindo", "Kanailal", "Rakshit")
const girlsSchool = new Array("KBNSM", "SJC", "Lalbagan")
const schools = [...boysSchool, ...girlsSchool]
// const newSchools = [boysSchool, girlsSchool]
console.log(schools);
// console.log(newSchools);
 const testArray = [0, 9, 8, 23,[76, 6, 4, 2, 5, [34, 45, 3, 9]], 2, 4, 6, 8, 10]
 console.log(testArray.flat(Infinity));