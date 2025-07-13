function gcd(number1,number2){
  let rem
  while (number2>0) {
    rem=number1%number2
    number1=number2
    number2=rem
  }
    return number1;
}


 const ans=gcd(24,28)
 console.log(ans)
/* Summary:
The loop keeps replacing the pair (number1, number2) with (number2, rem)

Once number2 becomes 0, number1 holds the GCD

It works because any common divisor of number1 and number2 is also a divisor of number1 % number2 */