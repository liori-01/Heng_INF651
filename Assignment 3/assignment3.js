// Challenge 1: Even Number Finder (While Loop)
let num = 1;

while (num <= 50) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
console.log("\n---\n");

// Challenge 2: PIN Validator (Do-While Loop)
const correctPin = "1234";
let pin;

do {
  pin = prompt("Enter your 4-digit PIN:");
} while (pin !== correctPin);
alert("Success! PIN accepted.");
console.log("\n---\n");

// Challenge 3: Multiplication Table with Skips (For Loop + Continue)
let number = parseInt(prompt("Enter a number for the multiplication table:"));

for (let i = 1; i <= 10; i++) {
  let product = number * i;
  if (product % 5 === 0) {
    continue; // skip multiples of 5
  }
  console.log(`${number} x ${i} = ${product}`);
}
console.log("\n---\n");

// Challenge 4: Positive/Negative Number Checker (If-Else)
let numCheck = parseFloat(prompt("Enter a number:"));

if (numCheck > 0) {
  alert("The number is positive.");
} else if (numCheck < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}
console.log("\n---\n");

// Challenge 5: Month Finder (Switch Statement)
let monthNum = parseInt(prompt("Enter a number between 1 and 12:"));
let monthName;

switch (monthNum) {
  case 1: monthName = "January"; break;
  case 2: monthName = "February"; break;
  case 3: monthName = "March"; break;
  case 4: monthName = "April"; break;
  case 5: monthName = "May"; break;
  case 6: monthName = "June"; break;
  case 7: monthName = "July"; break;
  case 8: monthName = "August"; break;
  case 9: monthName = "September"; break;
  case 10: monthName = "October"; break;
  case 11: monthName = "November"; break;
  case 12: monthName = "December"; break;
  default: monthName = "Invalid input.";
}

alert(monthName);
console.log("\n---\n");
