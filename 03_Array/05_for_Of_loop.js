/*The
 for...of loop in JavaScript is used to iterate over iterable objects, such as:

    -Arrays
    -Strings
    -Maps
    -Sets etc.                        */
//Array
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
    //fruit represents each array element
    console.log(fruit);
}

//string
const word = "Hi";

for (const char of word) {
    //char represents each character
    console.log(char);
}
