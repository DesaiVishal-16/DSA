// Recursive Insertion Sort Algorithm

// Problem Statement: Given an array of N integers, write a program to implement the Recursive Insertion Sort algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting we get 9,13,20,24,46,52

function recursiveInsertionSort(arr:number[],i:number,n:number){
     
    if(i >= n) return arr;

    let j:number = i;

     while( j > 0 && arr[j - 1] > arr[j]){
        let temp: number = arr[j - 1];
        arr[j - 1] = arr[j]
        arr[j] = temp
        j--;
     } 
     return recursiveInsertionSort(arr,i +1,n)
    
}

const recursiveInsertionResult = recursiveInsertionSort([13,46,24,52,20,9],0, 6)
console.log(recursiveInsertionResult);
