// 1. Variables and Data Types
let fname = "Darat";
let age = 27;
let isStudent = true;
console.log(fname, typeof fname);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);

// 2. Basic Arithmetic Operations
let x = 9;
let y = 10;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);

// 3. Working with Strings
let sentence = "Hello, World!";
console.log("Length:", sentence.length);
console.log("First character:", sentence[0]);
console.log("Last character:", sentence[sentence.length - 1]);

// 4. Math Object
let num = -7;
console.log("Square root:", Math.sqrt(num));
console.log("Square:", Math.pow(num, 2));
console.log("Absolute value:", Math.abs(num));

// 5. Boolean Logic and Comparison Operators
console.log('${x} > ${y}:', x > y);
console.log('${x} < ${y}:', x < y);
console.log('${x} == ${y}:', x == y);

// 6. Logical Operators
let a = true;
let b = false;
console.log('a && b:', a && b);
console.log('a || b:', a || b);
console.log('!a:', !a);

// 7. Using Template Literals
let lname = "Heng";
let greeting = `Hello, my name is ${fname} ${lname} and I am ${age} years old.`;
console.log(greeting);