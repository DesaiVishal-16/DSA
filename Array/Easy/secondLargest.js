//Find Second Largest Element in an array

//Problem Statement: Given an array, find second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// Example 1:

// Input:
//  [1,2,4,7,7,5]
// Output:
// 	Second Largest : 5
// Explanation:
//  The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5.

function secondLargestEl(arr) {
  if (arr.length < 2) return -1;

  let largest = arr[0]; //or -Infinity =>To handle negative numbers.
  let sLargest = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest === -Infinity ? -1 : sLargest;
}
let arr = [1, 2, 4, 7, 7, 5];
const secondLaeget = secondLargestEl(arr);
console.log(secondLaeget);

//TC => O(N)
//SC => O(1)
