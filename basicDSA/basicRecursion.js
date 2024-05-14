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