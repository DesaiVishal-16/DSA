// Basic Math Functions:

// Write a function to calculate the sum of two numbers.

function sum(a,b){
  return a+b;
}
const resSum = sum(1,3)
console.log("Sum is",resSum);


// Create a function to find the difference between two numbers.

function diff(a,b){
    if(a<b){
   return b-a;
    }
}
const resDiff = diff(1,3)
console.log(`Difference is ${resDiff}`);


// Implement a function to multiply two numbers.

const multi=(a,b)=>{
    return a*b
}
const resMulti = multi(1,3)
console.log(`Multiplication: ${resMulti}`);

// Write a function to divide one number by another.

const divide=(a,b)=>{
return a/b
}
const resDiv = divide(1,3)
console.log(`Divide is ${resDiv}`,resDiv);