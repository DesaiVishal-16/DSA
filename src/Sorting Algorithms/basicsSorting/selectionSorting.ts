// Selection Sort Algorithm => Select minimum and Swap it

// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array = [13,46,24,52,20,9]
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

interface Props{
 arr : number[];
 N: number;
};

function selectionSort({arr,N}:Props){
   let minIdx:number;
   for(let i = 0; i < N - 1 ; i++){
      minIdx = i;
      for(let j = i + 1; j < N; j++ ){
         if(arr[j] < arr[minIdx]){   
            minIdx = j 
         }
      } 
       let temp = arr[minIdx]
       arr[minIdx] = arr[i]
       arr[i] = temp
   } 
   console.log("Sorted array is :", arr) 
}


selectionSort({arr: [2,44,22,66,77,1,99,3], N:8})
// Time Complexity => O(n^2)