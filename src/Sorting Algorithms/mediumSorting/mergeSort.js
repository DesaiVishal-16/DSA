// Merge Sort Algorithm      => Divide & Merge

// Problem:  Given an array of size n, sort the array using Merge Sort.

// Examples:

// Example 1:
// Input: N=5, arr[]={4,2,1,6,7}
// Output: 1,2,4,6,7,

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low; // starting index of left half of array
  let right = mid + 1; // starting index of Right half of array

  //storing elements in temp array in sorted mannner
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  // if elements of left half still left
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  // if elements of Right half still left
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  // transferring all elements from temporary to arr
  for (i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid); //Left halves
  mergeSort(arr, mid + 1, high); //Right halves
  merge(arr, low, mid, high); // Merging Sorting halves
}

let arr = [4, 2, 1, 6, 7];
let n = arr.length;

console.log("Before Sorting array");
console.log(arr.join(" "));

mergeSort(arr, 0, n - 1);

console.log("After Sorting array");
console.log(arr.join(" "));
