/**
 * 🔢 Problem: Sort Binary Array (Dutch National Flag - 0s and 1s)
 * 
 * 🧾 Problem Definition:
 * Given an array containing only 0s and 1s, sort the array such that
 * all 0s appear before all 1s.
 * 
 * 🔍 Example:
 * Input:  [1, 0, 1, 0, 0, 1]
 * Output: [0, 0, 0, 1, 1, 1]
 * 
 * 🧠 Approach:
 * 1. Count the number of 0s and 1s.
 * 2. Create a new array by pushing the counted number of 0s followed by 1s.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) — because a new array is created
 */

function dnf(arr) {
    let countZero = 0;
    let countOne = 0;
  
    // 🔁 Step 1: Count the number of 0s and 1s
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === 0) {
        countZero++;
      } else {
        countOne++;
      }
    }
  
    // 🔁 Step 2: Build a new sorted array with 0s followed by 1s
    arr = [];
  
    // Push all 0s
    for (let index = 0; index < countZero; index++) {
      arr.push(0);
    }
  
    // Push all 1s
    for (let index = 0; index < countOne; index++) {
      arr.push(1);
    }
  
    return arr;
  }
  
  // ✅ Test the function
  console.log(dnf([1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1]));
  