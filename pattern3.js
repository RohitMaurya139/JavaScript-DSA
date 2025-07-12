function Pattern3(n) {
    let row
    let star
    for (let i = 1; i <=n; i++) {
          row=""
         
          for (let k = 1; k <= n-i; k++) {
            row+="  "
             
         }
        for (let j = 1; j <= i; j++) {
           row+="* "
            
        }
        console.log(row)
     }
}
Pattern3(5)

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
