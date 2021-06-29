// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num1 = 1;
while (num1 <= 5) {
  console.log(num1);
  num1++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num2 = 0;
do {
  num2++;
  console.log(num2);
} while (num2 < 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let num3 = 1; num3 <= 5; num3++) {
  console.log(num3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let num4 = 10;
while (num4 >= 1) {
  console.log(num4);
  num4--;
}

let i4 = 11;
do {
  i4--;
  console.log(i4);
} while (i4 > 1);

for (let j4 = 10; j4 >= 1; j4--) {
  console.log(j4);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let num5 = 7;
while (num5 <= 27) {
  console.log(num5);
  num5++;
}

let i5 = 6;
do {
  i5++;
  console.log(i5);
} while (i5 < 27);

for (let j5 = 7; j5 <= 27; j5++) {
  console.log(j5);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let num6 = 10;
while (num6 < 100) {
  console.log(num6);
  num6 += 10;
}

let i6 = 0;
do {
  i6 += 10;
  console.log(i6);
} while (i6 < 89);

for (let j6 = 10; j6 < 100; j6 += 10) {
  console.log(j6);
}


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// let counterFour = 1;
// while (counterFour < 2) {
//   console.log("HELP ME!");
//   counterFour--;
// }

// counterFour starting value is already less than 2, my decrementing it by one, it will always be less than 2. 
// To break the loop we need to change the condition to (counterFour > -100).

let counterFour1 = 1;
while (counterFour1 > -100) {
  console.log("HELP ME!");
  counterFour1--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
for (let num8 = 0; num8 <= 7; num8++) {
  console.log(num8);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
for (let i = 0; i <= 100; i++) {
  if (i === 7) {
    console.log(i + " my favorite number!");
  } else{
    console.log(i + " not my favorite number");
  } 
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// "for" loop is good for iterating. "while" loop is good for doing something until some condition is met. 
// "do while" loop is similar to the "while" loop. I would choose it over "while" loop if I need to di something at least once.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// For question 10, I used stack overflow.

// Email your file to us or commit your file to GitHub and email us a link.
