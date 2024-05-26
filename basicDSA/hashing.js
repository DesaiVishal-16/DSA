// Q. 1
//Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, 
//we need to find out how many times the number appears in the array. For example, if the query is 1 our answer would be 2, 
//and if the query is 4 the answer will be 0. 

// Method 1

// Input array and queries
const arr = [1,2,1,3,2]
const queries = [1,3,4,2,10]

// Step 1: Create an object 
let hashMap = {}

arr.forEach((num)=>{
     if(hashMap[num]){
         hashMap[num]++
     }else{
        hashMap[num] = 1
     }
})

// Step 2: Answer each query using the frequency array
const result = queries.map(query=>hashMap[query]||0)

// Print results
console.log("1. Mehod 1");
console.log(result);
result.forEach((res,index)=>{
 console.log(`The number ${queries[index]} appears ${res} times in the array.`);
})

//Method 2 

// Input array and queries
const arr2 = [1, 2, 1, 3, 2, 5, 6, 7, 8, 9, 10, 11, 12];
const queries2 = [1, 3, 4, 2, 10, 11, 12, 13];

// Step 1: Create a frequency array with a fixed size of 13
const maxArraySize = 13;
const frequencyArray = new Array(maxArraySize).fill(0);

arr2.forEach(num => {
  if (num < maxArraySize) {
    frequencyArray[num]++;
  }
});

// Step 2: Answer each query using the frequency array
const results2 = queries2.map(query => (query < maxArraySize ? frequencyArray[query] : 0));

// Print results
console.log("1. Mehod 2");
console.log(results2);
results2.forEach((result, index) => {
  console.log(`The number ${queries2[index]} appears ${result} times in the array.`);
});




//Q. 2
//Given the string: “abcdabefc” we are given some queries: [a, c, z]. 
//For each query, we need to find out how many times the character appears in the string.
//For example, if the query is ‘a’ our answer would be 2, and if the query is ‘z’ the answer will be 0. 

const arrStr = 'abcdabefc'
const queriesStr = ['a','b','z']

const maxArraySizeStr = 26
const frequencyArrayStr = new Array(maxArraySizeStr).fill(0)

arrStr.split('').forEach((char) => { 
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (charCode < maxArraySizeStr) { 
        frequencyArrayStr[charCode]++ 
    }
});

const resultStr = queriesStr.map(query => { 
    const charCode = query.charCodeAt(0) - 'a'.charCodeAt(0)
    return charCode < maxArraySizeStr ? frequencyArrayStr[charCode] : 0
});

console.log("2. Alphabets:");
console.log(resultStr);
resultStr.forEach((res, index) => { 
    console.log(`The character '${queriesStr[index]}' appears ${res} times in the array.`);
});



// Q. 3

// Count frequency of each element in the array

// Problem statement: Given an array, we have found the number of occurrences of each element in the array.

// Examples:

// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10=>3
// 	        5=>2
//         15=>1
// Explanation: 10 occurs 3 times in the array
// 	             5 occurs 2 times in the array
//              15 occurs 1 time in the array


const arr3 = [10,5,10,15,10,5]


const frequencyArray3 = {}

arr3.forEach((num)=>{
  if(frequencyArray3[num]!==undefined){
     frequencyArray3[num]++
    }else{
      frequencyArray3[num] = 1
    }
})
console.log("3. Count frequency of each element in the array");
for(const [key,value] of Object.entries(frequencyArray3)){
  console.log(`${key}=>${value}`);
}

