const fbUser = new Object()
fbUser.id = "ABC123"
fbUser.name = "User1"
fbUser.lastName = "user"
fbUser.area = "Asia"
fbUser.lang = "English"
fbUser.age = 69
//console.log(fbUser);

const alluser = [
    {
        id: "a",
        name: "user1"
    },
    {
        id: "b",
        name: "user2"
    },
    {
        id: "c",
        name: "user3"
    },
    {
        id: "d",
        name: "user4"
    },
    {
        id: "e",
        name: "user5"
    }
]

const obj1 = {
        id1: "a",
        name1: "user1"
}
const obj2 = {
        id2: "b",
        name2: "user2"
}
const obj3 = {
        id3: "c",
        name3: "user3"
}
const obj4 = {
        id4: "d",
        name4: "user4"
}
const obj5 = {
        id5: "e",
        name5: "user5"
}

const allObj = {...obj1, ...obj2, ...obj3, ...obj4, ...obj5}
console.log(allObj);

console.log(alluser);

console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty("id"));
console.log(fbUser.hasOwnProperty("language"));

const {lastName: ln} = fbUser
console.log(ln);

const {area: a} = fbUser
console.log(a);

