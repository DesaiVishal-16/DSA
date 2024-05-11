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



// 3. Check if a number is Palindrome or Not

// Input:N = 4554
// Output:Palindrome Number

//Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number

// Input:N = 7789
// Output: Not Palindrome


function checkPalindrome(N){
     let num = N
     let reversed = 0
    while(N > 0){
       let rem = N % 10
       reversed = (reversed * 10) + rem
       N =  Math.floor(N / 10)
    }
    if(num===reversed){
        return "Palindrome Number"
    }else{
        return "Not Palindrome Number"
    }   
}
console.log(checkPalindrome(4554));



// 4. Check if a number is Armstrong Number or not

//Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

//An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.


// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153

function armstrongNum(N){
    let num = N
    let sum = 0 

    while(N > 0){
      let rem = N % 10
      let pow = rem*rem*rem
      sum += pow
      N = Math.floor(N/10)
     }
      return sum===num
}
console.log(armstrongNum(153));