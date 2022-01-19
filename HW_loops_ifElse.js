/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

let a = 12
let b = 50

if (a>b || b<a){
    console.log(true);
}else{
    console.log(false);
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

let num = 13
if (num === 5){
    console.log(num, "is equal to5");
}else{
    console.log(num, "is NOT equal to 5")
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let x= 11
let y= 8
if(x===8 || y===8 || x+y===8 || x-y===8){
    console.log(true);
}else{
console.log(false);
}

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

totalShoppingCart = 70
shippingCost = 10

if (totalShoppingCart>50){
    console.log(totalShoppingCart-shippingCost);
}else{
console.log(totalShoppingCart);
}

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

newTotalPayment = (totalShoppingCart>50 ? totalShoppingCart-shippingCost : totalShoppingCart)
console.log(newTotalPayment - (newTotalPayment*0.2) )

/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let apple= 1
let banana= 7
let kiwi= 11

if (apple<banana && apple<kiwi && banana<kiwi && banana>apple && kiwi>apple && kiwi>banana){
    console.log(kiwi, banana, apple);
}else{
    console.log("nothing shown")
}

/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

let pencil = "not expensive"
if (typeof pencil === 'number'){
    console.log(pencil, "is number");
}else{
    console.log(pencil, "is NOT number")
}

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

let pluto = 2
if (pluto%2 === 0){
    console.log("This number is even", pluto);
}else{
    console.log("This number is odd", pluto)
}

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

/* WRITE YOUR ANSWER HERE */

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

let n= 3
if (n<5){
    console.log("tiny");
}else if (n<10){
    console.log("small");
}else if (n<15){
    console.log("medium");
}else if (n<20){
    console.log("large");
}else if (n>=20){
    console.log("huge");
}else{
    console.log("doesn't fit to any of the ranges");
}

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false
gender = isMale? "male" : "female";
console.log("The gender is:", gender)

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

let i = 0
while (i<=5){
    console.log( i);
    i++;
}

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

for (let i=10; i>=0; i--){
    console.log("Number",i);
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

for (let i=10; i>=0; i--){
    if (i===3){
        continue;
    }
    else if (i===8){
        continue;
    }else{
        console.log("Number", i);
    }
}

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

for (let i=0; i<=15; i++){
    if (i%2===0){
        console.log("Number is even:", i);
    }else{
        console.log("Number is odd:", i);
    }
}

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

  for (let i=1; i<100; i++){
    if (i%3 === 0){
        console.log("Fizz");
    }
    else if (i%5 === 0){
      console.log("Buzz");  
    }
    else if (i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz"); 
    }
    else{
        console.log(i);
    }
}

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

  let day = 6
  switch (day){
      case (1):
      console.log("Monday");
      break;
      case (2):
      console.log("Tuesday");
      break;
      case (3):
      console.log("Wednesday");
      break;
      case (4):
      console.log("Thursday");
      break;
      case (5):
      console.log("Friday");
      break;
      case (6):
      console.log("Saturday");
      break;
      case (7):
      console.log("Sunday");
      break;
      default:
      console.log("Day not found")
      break;
  }
