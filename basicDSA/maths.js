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



// 5. Find GCD of two numbers

// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// The Greatest Common Divisor of any two integers is the largest number that divides both integers.


// Input:N1 = 9, N2 = 12
                
// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.


function findGcd(N1,N2){
    let gcd = 1
      for(i=1;i<=Math.min(N1,N2);i++){
        if(N1%i===0 && N2%i===0){
              gcd = i
        }
      }
       return gcd
}
console.log(findGcd(9,12))


// 6. Print all Divisors of a given Number

// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder.
// In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.


// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.

function findDivisors(N) {
    let allDiv = []
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            allDiv.push(i)
        }
    }
    return allDiv;
}
console.log(findDivisors(36));




// 7. Check if a number is prime or not

//Problem Statement: Given an integer N, check whether it is prime or not. 
//A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).

//TC => O(N)
function checkPrime(N){
    let init = 0 
   for(let i=1 ;i <= N;i++){
      if(N % i === 0){
         init += 1
      }
    }
     return init == 2 ? true : false
}
console.log(checkPrime(2));


//Optimized 
//TC => O(sqrt(N))
function checkPrime(N){
    if(N<=1) return false
    if(N<=3) return true
     
    for(i=2;i<Math.sqrt(N);i++){
        if(N%i==0){
        return false
        }  
    }
    return true
}
console.log(checkPrime(2));

