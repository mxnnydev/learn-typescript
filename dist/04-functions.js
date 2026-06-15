"use strict";
// Basic function with types 
function add(a, b) {
    return a + b;
}
// Function with optional parameter
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
