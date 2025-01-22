// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl".



var longestCommonPrefix = function(strs) {

    if (!strs || strs.length === 0) {
         return "";
     }

let asw= strs.sort();
     console.log(asw);
    const firstStr = strs[0];

    const lastStr = strs[strs.length - 1];

    let commonPrefix = "";
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === lastStr[i]) {
            commonPrefix += firstStr[i];
        } else {
          break;
        }
    }

    return commonPrefix;
 };



  
 console.log(longestCommonPrefix(["bv","aa","bv"]));
