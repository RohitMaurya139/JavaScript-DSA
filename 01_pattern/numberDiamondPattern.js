function numDiaPattern1(n) {
   // ------------------------
   // First Half of the Pattern
   // ------------------------
   // This loop prints the upper half of the diamond (including the middle line)
   for (let i = 1; i <= n; i++) {
       let row = "";

       // Print leading spaces before each row
       // For row i, we print (i - 1) spaces
       for (let j = 1; j <= i - 1; j++) {
           row += " ";
       }

       // Print numbers starting from 'i' up to 'n'
       // Each number is followed by a space
       for (let k = i; k <= n; k++) {
           row += k + " ";
       }

       // Output the row
       console.log(row);
   }

   // ------------------------
   // Second Half of the Pattern
   // ------------------------
   // This loop prints the lower half of the diamond
   for (let i = 1; i <= n - 1; i++) {
       let row = "";

       // Print leading spaces
       // For row i, we print (n - 1 - i) spaces in reverse style
       for (let j = n - 2; j >= i; j--) {
           row += " ";
       }

       // Print numbers starting from (n - i) to n
       // This creates the bottom expanding part
       for (let k = n - i; k <= n; k++) {
           row += k + " ";
       }

       // Output the row
       console.log(row);
   }
}

// Function call to print diamond number pattern with n = 7
numDiaPattern1(10);

/*  Expected Output for n=7:

1 2 3 4 5 6 7 
2 3 4 5 6 7 
 3 4 5 6 7 
  4 5 6 7 
   5 6 7 
    6 7 
     7 
    6 7 
   5 6 7 
  4 5 6 7 
 3 4 5 6 7 
2 3 4 5 6 7 
1 2 3 4 5 6 7 

Pattern explanation:
- First half: Numbers decrease from the left as we move down, with spaces increasing.
- Second half: Numbers increase from a smaller start until full width is reached again.
*/
