"use strict";
function printPoint(point) {
    console.log(`Coordinate x: ${point.x}; y: ${point.y}`);
}
const obj1 = {
    x: "1",
    y: "2",
};
printPoint(obj1);
const obj2 = {
    x: "1",
    y: "2",
    z: 3,
};
printPoint(obj2);
function printName(user) {
    console.log(`Hello, ${user.firstName.toUpperCase()}`);
    if (user.lastName) {
        console.log(`Nice to meet you Mr.${user.lastName.toUpperCase()}`);
    }
}
printName({ firstName: "Evgeniy" });
printName({ firstName: "Evgeniy", lastName: "Petrov" });
const user1 = {
    login: "user",
    email: "usermail",
    password: "123qwerty",
    isOnline: false,
    lastVisited: new Date(),
};
const Admin = {
    login: "admin",
    email: "adminmail",
    password: "123admin",
    isOnline: true,
    lastVisited: new Date(),
    role: "superAdmin",
};
function login(user) {
    if ((user.login.length > 0, user.password.length > 0)) {
        console.log(`Ligin: ${user.login} - ${user.password}`);
    }
}
login(user1);
