// Print Name 5 times

function fivetimesName(i,n){
    let count = i
    if(count>=n) return;
    console.log("sam");
    fivetimesName(count + 1,n)

}
console.log("Print Name 5 times:");
fivetimesName(0,5)



//Print 1 to N using Recursion

function oneToN(i,n){
    let count = i;
    if(count>n) return;
    console.log(count);
    oneToN(count+1,n)
}
console.log("Print 1 to N using Recursion:");
oneToN(1,5)


//Print N to 1 using Recursion

function nToOne(i,n){
  let count = i
  if(n>i)return;
  console.log(count);
  nToOne(i-1,n)
}
console.log("Print N to 1 using Recursion:");
nToOne(5,1)


///Print 1 to N using Recursion Backtracking

function oneToNBack(i,n){
    if(i<1) return;
    oneToNBack(i-1,n)
    console.log(i); 
}
console.log("Print 1 to N using Recursion Backtracking:");
oneToNBack(5,5)

//Print N to 1 using Recursion Backtracking

function nToOneBack(i,n){
    if(n<i)return;
    nToOneBack(i+1,n)
    console.log(i);
  }
  console.log("Print N to 1 using Recursion Backtracking:");
  nToOneBack(1,5)


//Sum of first N Natural Numbers

//Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15
  

  function sumFirstNaturalNum(i,N,sum=0){
       if(i>N) return console.log(sum);
        sum += i                                                            
       sumFirstNaturalNum(i+1,N,sum)                                                                                             
  }
  console.log("Sum of first N Natural Numbers:");
  sumFirstNaturalNum(1,5)


// Factorial of a Number : Iterative and Recursive

// Problem Statement: Given a number X,  print its factorial.

// To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

// Note: X  is always a positive number. 

// Input: X = 5
// Output: 120
// Explanation: 5! = 5*4*3*2*1

//Factorial of a Number : Iterative

function findFactorialIt(N){
  let sum = 1
       for(i=N;i>1;i--){
           sum *= i
       }
       return sum
}
console.log("Factorial of a Number : Iterative")
console.log(findFactorialIt(5));

// Factorial of a Number : Recursive

//Method 1
function findFactorial(i,N,sum=1){
     if(i>N) return console.log(sum);;
      sum *= i
      findFactorial(i+1,N,sum)
}
console.log("Factorial of a Number in Recursive m1 :");
findFactorial(1,5)

//Method 2
function findFactorial2(N){
  if(N==0) return 1;
  return N*findFactorial2(N-1)
}
console.log("Factorial of a Number in Recursive m2 :");
console.log(findFactorial2(5))

