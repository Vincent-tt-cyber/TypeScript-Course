"use strict";
function sum(a, b) {
    return a + b;
}
sum(1, 1);
function log(name, userId) {
    console.log("Hello, ", name, "widthID", userId || "anonym");
}
log("Maxim", "123");
function crash() {
    throw new Error("crash");
}
