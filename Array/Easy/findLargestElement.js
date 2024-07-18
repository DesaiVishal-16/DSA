//Find the Largest element in an array.

//Problem Statement: Given an array, we have to find the largest element in the array.

//Example 1:
// Input:
// arr[] = {2,5,1,3,0};
//Output:
//5
//Explanation:
//5 is the largest element in the array. EExample 1:
//Output:
// 5

function largestElement(arr) {
  if (arr.length === 0) return "Empty Array";
  let largestEl = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largestEl < arr[i]) {
      largestEl = arr[i];
    }
  }
  return largestEl;
}
let arr = [2, 5, 1, 3, 0];
const largestEL = largestElement(arr);
console.log("Largest Element in an Array is", largestEL);

//TC : O(N)
//SC : 0(1)
