// Selection Sort Algorithm

// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array = [13,46,24,52,20,9]
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52


function selectionSort(arr,N){
     let min ;
     for(let i = 0; i < N-1; i++){
         min = i
       for(let j = i + 1; j <= N; j++){
         if(arr[j] < arr[min]){
         min = j
         }
       }
       let temp = arr[min]
       arr[min] = arr[i]
       arr[i]   = temp
     }
      console.log(arr.join(','));
}
selectionSort([13,46,24,52,20,9],6)