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
console.log("Mehod 1");
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
console.log("Mehod 2");
results2.forEach((result, index) => {
  console.log(`The number ${queries2[index]} appears ${result} times in the array.`);
});



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

console.log("Alphabets:");
resultStr.forEach((res, index) => { 
    console.log(`The character '${queriesStr[index]}' appears ${res} times in the array.`);
});