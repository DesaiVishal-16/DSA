// Problem Statement: Given an array of N integers, write a program to implement the Recursive Bubble Sort algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting we get 9,13,20,24,46,52

// Example 2:
// Input: N = 5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting we get 1,2,3,4,5


function BubbleSortRecursive({arr,n}:{arr:number[],n:number}){
    if(n === 1) return arr;
     for(let i = 0; i < n-1; i++){
        if(arr[i] > arr[i +1]){
            let temp:number = arr[i +1]
            arr[i + 1] = arr[i];
            arr[i] = temp;
        } 
     } 
       return BubbleSortRecursive({arr,n:n-1})
}

const resultRecursive = BubbleSortRecursive({arr:[13,46,24,52,20,9],n:6})
console.log(resultRecursive);
