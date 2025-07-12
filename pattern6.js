function upperTriangle(n){
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

function lowerTriangle(n){
   let str
   for (let row = 1; row <=n-1; row++) {
      str=""
      for(let i=1;i<=row;i++){
         str+="  "
      }
      for(let j=1;j<=(2*(n-row)-1);j++){    // this is the main concept here 2*(n-row)-1
         str+="* "
      }
      console.log(str)
   }
}

function pattern6(n){
   upperTriangle(n)
   lowerTriangle(n)
}
pattern6(5)

//          * 
//        * * * 
//      * * * * * 
//    * * * * * * * 
//  * * * * * * * * * 
//    * * * * * * * 
//      * * * * * 
//        * * * 
//          * 
