function Pattern4(n) {
    let row
   
    for (let i = 1; i <=n; i++) {
          row=""
         
          for (let k = 1; k <= n-i; k++) {
            row+="  "
             
         }
        for (let j = 1; j <= (2*i-1); j++) {
           row+="* "
            
        }
        console.log(row)
     }
}
Pattern4(6)

//           *  
//         * * * 
//       * * * * * 
//     * * * * * * * 
//   * * * * * * * * * 
// * * * * * * * * * * * 