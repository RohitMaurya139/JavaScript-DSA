function pattern5(n){
    let row
   
    for (let i = 1; i <=n; i++) {
          row=""
        for (let j = 1; j <=n-i; j++) {
           row+="* "
            
        }
        console.log(row)
     }
}
Pattern5(6)
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
