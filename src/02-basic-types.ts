// Primitives

let username: string = "Emmanuel";
let age: number = 30;
let isAdmin: boolean = true;

// Arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// tuple
let person: [string, number] = ["Emmanuel", 30];

// Enums
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Green;

// Any (avoid when possible)
let dynamicValue: any = "Hello, TypeScript!";
dynamicValue = 42;
dynamicValue = true;

// unknown (safer alternative to any)
let unknownValue: unknown = "This could be anything";
unknownValue = 123;
unknownValue = "Emmanuel";


// functions in TypeScript

// Function with typed parameters and return type string
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with typed parameters and return type void
function logMessage(message: string): void {
  console.log(message);
}