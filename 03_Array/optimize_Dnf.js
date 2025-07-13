/**
 * 🔢 Problem: Sort Binary Array (Dutch National Flag - 0s and 1s)
 * 
 * 🧾 Problem Definition:
 * Given an array consisting only of 0s and 1s, sort the array in-place
 * such that all 0s appear before all 1s.
 * 
 * 🔍 Example:
 * Input:  [1, 0, 0, 1, 0, 1]
 * Output: [0, 0, 0, 1, 1, 1]
 * 
 * 🧠 Approach (Two-Pointer Technique):
 * 1. Use two pointers: one starting from the beginning (countZero)
 *    and one from the end (countOne).
 * 2. If arr[countZero] is 1 and arr[countOne] is 0 → swap them.
 * 3. Else move the pointers inward depending on values:
 *    - If arr[countZero] is 0 → move countZero forward
 *    - If arr[countOne] is 1 → move countOne backward
 * 
 * ✅ Time Complexity: O(n)
 * ✅ Space Complexity: O(1) — in-place
 */

function dnf(arr) {
    let countZero = 0;                // Pointer from start
    let countOne = arr.length - 1;    // Pointer from end
  
    // 🔁 Process the array until both pointers meet
    while (countZero < countOne) {
      
      // 🧪 If left is 1 and right is 0 → swap
      if (arr[countZero] === 1 && arr[countOne] === 0) {
        let temp = arr[countZero];
        arr[countZero] = arr[countOne];
        arr[countOne] = temp;
  
        countZero++; //start pointer moving to next location 
        countOne--;   // end pointer moving to previous location
      } else {
        // ✅ If left is already 0 → move forward
        if (arr[countZero] === 0) {
          countZero++;
        }
  
        // ✅ If right is already 1 → move backward
        if (arr[countOne] === 1) {
          countOne--;
        }
      }
    }
  
    return arr;
  }
  
  // ✅ Test the function
  console.log(dnf([1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1]));
  