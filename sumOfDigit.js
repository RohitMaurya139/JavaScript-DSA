 function sod(n){
    sum=0
    while (n>0) {
        sum+=n%10   //this will give the last digit of the number
        n=Math.floor(n/10)    
        /* In JavaScript, /= performs floating-point division, so n becomes a decimal (e.g., 4136 / 10 = 413.6),
         and the loop never ends properly. This causes incorrect results or infinite loops.*/ 
    }
    return sum
 }


 console.log(sod(4136))