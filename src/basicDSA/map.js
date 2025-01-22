//Q. 1
//Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, 
//we need to find out how many times the number appears in the array. For example, if the query is 1 our answer would be 2, 
//and if the query is 4 the answer will be 0. 

const arr = [1, 2, 1, 3, 2] 
const queries = [1, 3, 4, 2, 10]
const myMap = new Map()

 for(let num of arr){
         if(myMap.has(num)){
           myMap.set(num,myMap.get(num)+1)
         }else{
           myMap.set(num,1)
         }
 }
function answerQueries(queries,myMap){
             let result = []
        for(let query of queries){
          if(myMap.has(query)){
            result.push(myMap.get(query))
          }else{
            result.push(0)
          }
        }
        return result
}

const resultsMap = answerQueries(queries, myMap);
console.log("1.  For Num:");
console.log(resultsMap);
resultsMap.forEach((res,index)=>{
  console.log(`The number ${queries[index]} appears ${res} times in the array.`);
 })


 //Q. 2
//Given the string: “abcdabefc” we are given some queries: [a, c, z]. 
//For each query, we need to find out how many times the character appears in the string.
//For example, if the query is ‘a’ our answer would be 2, and if the query is ‘z’ the answer will be 0. 


const arr2 = "abcdabefc"
const queries2 =  ['a','c','z']

const myMap2 = new Map()
 
const charArr = arr2.split('')
for(let char of charArr){
    if(myMap2.has(char)){
     myMap2.set(char,myMap2.get(char)+1)
    }else{
        myMap2.set(char,1)
    }
}

 function answerQueries2 (queries2,myMap2){
     let result = []
     for(let query of queries2){
        if(myMap2.has(query)){
            result.push(myMap2.get(query))
        }else{
             result.push(0)
        }
     }
     return result
 }

 const resultsMap2 = answerQueries2(queries2,myMap2)
 console.log("2.  For Char:");
 console.log(resultsMap2);
resultsMap2.forEach((res,index)=>{
    console.log(`The number ${queries2[index]} appears ${res} times in the array.`)
})
 

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

const countMap = new Map()

for(let num of arr3){
    if(countMap.has(num)){
       countMap.set(num,countMap.get(num)+1)
    }else{
        countMap.set(num,1)
    }
}
console.log("3. Count frequency of each element in the array");
console.log(countMap);
countMap.forEach((value,key)=>{
       console.log(`${key}=>${value}`);
})


// Q. 4 Find the highest/lowest frequency element

// Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

// Examples:

// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

// Example 2:

// Input: array[] = {2,2,3,4,4,2};
// Output: 2 3
// Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest


function frequency(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    let maxFreq = 0, minFreq = arr.length;
    let maxEle = 0, minEle = 0;

    for (let [element, count] of map.entries()) {
        if (count > maxFreq) {
            maxEle = element;
            maxFreq = count;
        }
        if (count < minFreq) {
            minEle = element;
            minFreq = count;
        }
    }

    console.log("The highest frequency element is:", maxEle);
    console.log("The lowest frequency element is:", minEle);
}
const arr4 = [10, 5, 10, 15, 10, 5];
frequency(arr4);