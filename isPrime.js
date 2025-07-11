  function isPrime(n){
    for (let index = 2; index < n; index++) {
       if(n%index==0){
        console.log(`${n} is not a prime number}`)
        return false;
       }
    
        
    }
    console.log(`${n} is a prime number`)
    return true;
  }
  
  
  // let check = input("Enter a number: ")
  isPrime(15)