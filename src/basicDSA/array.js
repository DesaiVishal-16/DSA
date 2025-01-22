// Array Functions:

// Write a function to sort an array of numbers in ascending order.

const ascendingOrder=(arr)=>{                 //arr =
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
               let sort =arr[j]
               arr[j]=arr[j+1]
                arr[j+1] =sort
            }
        }

    }
     return arr;
}
 
const ascendingArray=ascendingOrder([4,3,2,1])
console.log(ascendingArray);

// Create a function to filter out even numbers from an array.

const evenNum=(nums)=>{
    let evenNumbers= []
    for(let num of nums){
        if(num%2===0){
           evenNumbers.push(num)
        }
    }
    return evenNumbers
}
const nums = [1,2,3,4,6]
console.log(evenNum(nums));


// Implement a function to map over an array and double each element.

function doubleElement(arr){
   return arr.map(element => element*2)
}

const array = [2,4,7,3,2]
const doubleArray = doubleElement(array)
console.log(doubleArray);
