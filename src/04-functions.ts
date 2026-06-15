// Basic function with types 
function add(a: number, b: number): number {
  return a + b;
}

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}