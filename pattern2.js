function Pattern2(n) {
    let row
    for (let i = n; i >0; i--) {
          row=""
        for (let j = i; j >0; j--) {
           row+="* "
            
        }
        console.log(row)
     }
}
Pattern2(5)
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
