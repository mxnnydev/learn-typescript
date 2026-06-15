"use strict";
// Primitives
let username = "Emmanuel";
let age = 30;
let isAdmin = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
// tuple
let person = ["Emmanuel", 30];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
// Any (avoid when possible)
let dynamicValue = "Hello, TypeScript!";
dynamicValue = 42;
dynamicValue = true;
// unknown (safer alternative to any)
let unknownValue = "This could be anything";
unknownValue = 123;
unknownValue = "Emmanuel";
// functions in TypeScript
// Function with typed parameters and return type string
function greetBasic(name) {
    return `Hello, ${name}!`;
}
// Function with typed parameters and return type void
function logMessage(message) {
    console.log(message);
}
