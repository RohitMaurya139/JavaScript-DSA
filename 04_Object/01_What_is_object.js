 /* 📦 What is an Object in JavaScript?
An object is a collection of key-value pairs.
It allows you to group related data and functions (called methods). */

/* How to create object */
const person = {
    name: "Rohit",
    age: 22,
    isStudent: true,
    greet: function () {
      console.log("Hello!");
    }
  };
/* name, age, and isStudent are keys (properties).

"Rohit", 22, and true are their values.

greet is a method (a function inside an object). */

/* 🔍 Accessing Object Properties */
//1. Dot Notation (preferred):
console.log(person.name);      // "Rohit"
console.log(person.age);       // 22

//2. Bracket Notation (for dynamic keys):
console.log(person["isStudent"]); // true
//key_Name must be pass as string
let key = "age";
console.log(person[key]);         // 22


/* ✏️ Modifying Properties */
person.name = "Ankit";          // Update value
person.city = "Delhi";         // Add new property
delete person.isStudent;       // Remove a property


/* 🔁 Looping Through Object Properties */
//use for...in loop in object
/* 
The variable key represents each property name (string) in the person object.
It is like the "key" in a key-value pair.
| Element       | Represents                      |
| ------------- | ------------------------------- |
| `key`         | Property name (as a string)     |
| `person[key]` | Value corresponding to that key |

On 1st loop → key = "name" → person["name"] = "Rohit"
On 2nd loop → key = "age" → person["age"] = 22
On 3rd loop → key = "isStudent" → person["isStudent"] = true
*/
for (let key in person) {
    console.log(key, person[key]);
  }
  


  /* 📌 Object Methods */
  // Method is just a function inside objects
  const user = {
    username: "rohit123",
    login: function () {
      console.log(this.username + " logged in.");
    }
  };
  
  user.login(); // "rohit123 logged in."

  /* 
  🛠️ Useful Built-in Object Methods
  | Method                       | Description                           |
| ---------------------------- | ------------------------------------- |
| `Object.keys(obj)`           | Returns array of keys                 |
| `Object.values(obj)`         | Returns array of values               |
| `Object.entries(obj)`        | Returns array of `[key, value]` pairs |
| `Object.hasOwnProperty(key)` | Checks if key exists                  |

  */
