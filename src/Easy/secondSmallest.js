//find second smallest element in an array

//problem statement: given an array, find second smallest element in the array. print ‘-1’ in the event that either of them doesn’t exist.

// example 1:

// input:
//  [1,2,4,7,7,5]
// output:
// 	second largest : 2
// explanation:
//  the elements are as follows 1,2,3,5,7,7 and hence second smallest of these is 2.

function secondSmallestEl(arr) {
  if (arr.length < 2) return -1;

  let smallest = Infinity;
  let sSmallest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      sSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < sSmallest && arr[i] !== sSmallest) {
      sSmallest = arr[i];
    }
  }
  return sSmallest;
}
let arr = [1, 2, 4, 7, 7, 5];
const secondSmallest = secondSmallestEl(arr);
console.log(secondSmallest);

//Time Complexity => O(N)
//Space Complexity => O(1)
