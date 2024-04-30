// roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.





// var romanToInt = function(s) {

//     let one="I";
//     let five="V";
//     let ten="X";
//     let fifty="L";
      
//       for(i=one;i<3;i++){
//           let store=[i]
//       }
// };

// console.log(romanToInt("III"));

// let s=4;
// console.log(s.length);

var romanToInt = function(s) {
    const romans={
       "I":1,
       "V":5,
       "X":10,
       "L":50,
       "C":100,
       "D":500,
       "M":1000
    }
      let output=0;
       for(let i=0;i<s.length;i++){
           let num=romans[s[i]];
           let nextNum=romans[s[i+1]]
       
          if(num<nextNum){
              output+=nextNum-num;
              i++;
          }else{
              output+=num;
          }
       }
             return output;
    };