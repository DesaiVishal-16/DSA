// Merge Sort Algorithm      => Divide & Merge

// Problem:  Given an array of size n, sort the array using Merge Sort.

// Examples:

// Example 1:
// Input: N=5, arr[]={4,2,1,6,7}
// Output: 1,2,4,6,7,

interface MergeProps {
  arr: number[];
  low: number;
  mid: number;
  high: number;
}

interface MergeSortProps {
  arr: number[];
  low: number;
  high: number;
}; 

function merge({ arr, low, mid, high }: MergeProps): void {
   
  const temp:number[] = [];
  let left = low;           
  let right = mid + 1;  

     while(left <= mid && right <= high) {
         if(arr[left] <= arr[right]){
            temp.push(arr[left])
            left++;
         }else{
            temp.push(arr[right]);
            right++;
         }
     }
     while(left <= mid){
        temp.push(arr[left])
        left++;
     }
     while(right <= high){
        temp.push(arr[right]);
        right++;
     }
     for(let i = 0; i < temp.length; i++ ){
        arr[low + i] = temp[i] 
     }
};
 function mergeSort({arr,low,high}:MergeSortProps){
      if(low >= high) return; 
       
      const mid = Math.floor((low + high) / 2);

       mergeSort({arr, low, high: mid})
       mergeSort({arr, low: mid + 1, high})
       merge({arr, low , mid ,high})
 };

// Example usage
const arr = [4, 2, 1, 6, 7];

mergeSort({ arr, low: 0, high: arr.length - 1 });

console.log("After Sorting:");
console.log(arr);

// TC => 0(N[log N ^ 2])
// SC => 0(N) 