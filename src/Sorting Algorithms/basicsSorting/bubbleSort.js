// Bubble Sort Algorithm => Push maximum to last by Adjacent Swap

// Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting we get 9,13,20,24,46,52

function bubbleSort(arr, N) {
  for (let i = N - 1; i >= 0; i--) {
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr.join(","));
}
bubbleSort([13, 46, 24, 52, 20, 9], 6);

//Time Complexity => O(N^2)
// Worst Case

// if array is sorted
function bubbleSort2(arr, N) {
  for (let i = N - 1; i >= 0; i--) {
    let didSwap = 0;
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
    }
  }
  console.log(arr.join(","));
}
bubbleSort2([1, 2, 3, 4, 5, 6], 6);

//Time Complexity => O(N)
//Best Case
