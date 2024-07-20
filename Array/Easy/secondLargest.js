//find second largest element in an array

//problem statement: given an array, find second largest element in the array. print ‘-1’ in the event that either of them doesn’t exist.

// example 1:

// input:
//  [1,2,4,7,7,5]
// output:
// 	second largest : 5
// explanation:
//  the elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5.

function secondLargestEl(arr) {
  if (arr.length < 2) return -1;

  let largest = arr[0]; //or -infinity =>to handle negative numbers.
  let slargest = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > slargest) {
      slargest = arr[i];
    }
  }
  return slargest === -infinity ? -1 : slargest;
}
let arr = [1, 2, 4, 7, 7, 5];
const secondLargest = secondLargestEl(arr);
console.log(secondLargest);

//tc => o(n)
//sc => o(1)
