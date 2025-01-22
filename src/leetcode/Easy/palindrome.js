// Given an integer x, return true if x is a palindrome, and false otherwise.

 
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.



var isPalindrome = function(x) {
    let numStr = String(x)
    let reverseStr = numStr.split('').reverse().join('')
      if(numStr===reverseStr ){
       return true;   
      }else if(numStr!==reverseStr){
      return false;
      }else if(x<0){
          return false;
      }else{
          return false;
      }
    };

    // console.log(isPalindrome(121));