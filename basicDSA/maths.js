// 1. Count digits in a number

// Input:N = 12345
// Output:5

//Extraction of digits

function countDigits(N){
    let count = 0
   while(N !== 0){
    count++
    N = Math.floor(N/10)      //inreverse=>12345=>1234>123>12>1
   }
   return count
}
console.log(countDigits(12345));




// 2. Reverse Digits of A Number

// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Input:N = 12345
// Output:54321


const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function reverseDigits(N){
    const isNegative = N<0;
    let absX = Math.abs(N)
    let reversed = 0;
    while(absX>0){
        const digit = absX % 10
         reversed = (reversed*10) + digit
         absX = Math.floor(absX /10)      
    }
    if(isNegative){
        reversed *= -1;
    }
    if(reversed<-Math.pow(2,31)||reversed>Math.pow(2,31)-1){
      return 0;
    }
    return reversed
}

rl.question("Enter a number: ",(number)=>{
       number = parseInt(number)
       console.log(reverseDigits(number));
       rl.close()
})