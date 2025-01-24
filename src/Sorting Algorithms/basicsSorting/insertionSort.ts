// Insertion Sort Algorithm => Takes an element place it in correct order

// Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: 
// After sorting the array is: 9,13,20,24,46,52

interface Props{
  arr : number[];
  N :  number;
};
function insertionSort({arr,N}:Props):number[]{
    for(let i = 0; i <= N-1; i++){
         let j:number = i;
         while(j > 0 && arr[j-1] > arr[j]){
            let temp:number = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
                j--;
         }
    } 
    console.log("Insertion arr is",arr);
    return arr; 
}
insertionSort({arr: [13,46,24,52,20,9],N:6})

/*
Time Complexity => O(N^2) => worst case
                   O(N)   => best Case
*/