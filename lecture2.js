// Arithmetic Operators

// let a = 10;
// let b = 15;

// console.log("a = ", a, "& b = ",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b); //10^15 ** stands for power. a^b


// Unary Operators

// let a = 10;
// let b = 15;
// // post decrement (first prints then decreases the value by 1)
// console.log("a = ", a, "& b = ",b);
// console.log("a-- = ", a--);
// console.log("a = ", a);

//Assignment Operators

// let a  = 5;
// let b = 4;

// a **= 5; //a = a + 5
// console.log("a = ", a);

//Comparision Operators

// let a  = 5;
// let b = 4;

// console.log("a > b = ", a > b); //true

// let a = 5;
// let b = 4;

// let cond1 = a < b;
// let cond2 = a === 5;

// && checks both condition and if both are true output will be true else false
// console.log("cond1 && cond2 = ", cond1 && cond2);

// || checks both condition and if one condition is true output will be true to be false both conditon should be false
// console.log("cond1 || cond2 = ", !(a < b) );

//Conditional Statement

// let mode = "light";
// let color;

// if (mode === "dark"){
//     color = "black";
// } else {
//     color = "white";

// }

// console.log(color)

// let age = 24;

// if (age >= 18) {
//     console.log("eligible for vote");
// } else {
//     console.log("not eligible for vote");
// }

// let num;

// console.log("Enter a number: ");

// if (num % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// let age = 56;

// if (age < 18) {
//     console.log ("Minor");
// } else if (age > 60) {
//     console.log("Elder");
// } else {
//     console.log("Ameture");
// }



// let mode = "dark";

// if (mode === "dark") {
//     console.log("Black");
// } else if (mode === "light") {
//     console.log("White");
// } else {
//     console.log("we only have two modes.");
// }

// if (mode === "dark") console.log(mode);


// Ternary Operators 
// let age = 19;
// let result = age >= 18 ? "adult" : "minor"; // simpler compact if-else

// console.log(result);


//PROMPT IS USE TO TAKE INPUT FROM USER
// ALERT IS USE TO POP-UP SOMETHING THAT USER SAYS

// let name = prompt("Enter your name");
// console.log(name);

// let num = prompt("Enter a number: ");

// if (num % 5 == 0) {
//     console.log(num, "is multiple of 5.");
// } else {
//     console.log(num, "is not a multiple of 5.");
// }

// let score = prompt("Enter your score (0-100)");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = ("A");
// } else if (score >=70 && score <= 89) {
//     grade = ("B");
// } else if (score >= 60 && score <= 69) {
//     grade = ("C");
// } else if (score >= 50 && score <= 59) {
//     grade = ("D");
// } else if (score >= 0 && score <= 49){
//     grade = ("Fail");
// } else {
//     console.log("Invalid Marks");
// }

// console.log("Your grade is", grade);


// let score = 10;

// using short-hand assignment operators

// score *= 2; //20 
// score -= 5;
// console.log(score)

// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");
// if (username === "") {
//     console.log("login failed");
// } else if (password.length >= 8 || username === "admin") {
//     console.log("login successful");
// }


//QUESTION-1 (Write a program that takes three numbers as input from the user. Use logical operators to determine and print the largest of the three numbers. )

// let num1 = prompt("enter first number");
// let num2 = prompt("enter second number");
// let num3 = prompt("enter third number");

// if (num1 > num2 && num1 > num3) {
//     console.log(num1, "is the greatest number.");
// } else if (num2 > num1 && num2 > num3) {
//     console.log(num2, "is the greatest number.");
// } else {
//     console.log(num3, "is the greatest number.");
// }


// let num;
// let sum = 0;
// for (num = 1; num <=5; num++) { // for loop
//     sum = sum + num;  // sum was 0 num was 1 value of num increases ny 1 every time and sum adds up
// }
// console.log(sum); 

//leap year

// let year = 2024;

// if (year % 4 === 0) {
//     console.log("Leap year");
// } else {
//     console.log("not a leap year");
// }


//from 1 lecture

// const phone = {
//     brand: "Apple",
//     model: "iphone 17",
//     price: 2400000,
//     isAvailable: true,
// } 
// // phone.isOffer = true;
// console.log(typeof phone.brand);


// let username = prompt("Enter your username");
// let password = prompt("Enter your password");


// if (username == "admin" || password.length >= 8) {
//     console.log("login successfully");
// } else if (password.length < 8 || username === "") {
//     console.log("login failed");
// } else {
//     console.log("try again");
// }


// let username = prompt("Username");
// let password = prompt("Password");

// if (username === "sukalpa08" && password === "sukalpa123") {
//     console.log("login successfully");
// } else {
//     console.log("login failed");
// }