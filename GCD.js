 function gcd(number1,number2){
    const min =Math.min(number1,number2);
    let gcd = 1;
    for(let i = 2; i <= min; i++){
        if(number1 % i === 0 && number2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}


 const ans=gcd(24,28)
 console.log(ans)
