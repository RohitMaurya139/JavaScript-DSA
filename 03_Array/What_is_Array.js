 /* 
 📦 What is an Array in JavaScript?
An array is a special variable that can store multiple values in a single variable.
Values can be of any type: numbers, strings, objects, even other arrays!
*/

/* Differentway to create array */
let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(1, 2, 3, 4);

/* 🔍 Accessing Elements */
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"

/* ✏️ Modifying Elements */
fruits[1] = "mango"; // changes "banana" to "mango"

/* Add element */
fruits.push("orange");     // Add at end
fruits.unshift("kiwi");    // Add at start

/* Remove element */
fruits.pop();     // Remove from end
fruits.shift();   // Remove from start

/* find length of Array */
console.log(fruits.length);  // Number of elements

/* Loop through Array */
//for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
//for of loop
for (let fruit of fruits) {
    console.log(fruit);
  }
// for each loop
fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  