  function fib(n){
    let num1=0
    let num2=1    
         /* The Fibonacci series is a sequence of numbers where each number is sum of last 2 number
             n:     0  1  2  3  4  5  6
           fib:     0, 1, 1, 2, 3, 5, 8              */     
    let fibSum
    if(n===0){return 0}
    if(n===1){return 1}
   for (let i = 2; i <= n; i++) {
     fibSum=num1+num2
     num1=num2
     num2=fibSum
   }
   return fibSum
    
   }
  console.log(fib(8))