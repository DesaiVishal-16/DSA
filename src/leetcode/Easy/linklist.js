// class ListNode {
//     constructor(val, next) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
//     }
// }

// var mergeTwoLists = (list1, list2) => {
//     if (!list1) {
//         return list2;
//     }
//     if (!list2) {
//         return list1;
//     }

//     let dummy = new ListNode(-1);
//     let current = dummy;
     
//     while (list1 !== null && list2 !== null) {
//         if (list1.val < list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     // Append the remaining elements in sorted order
//     if (list1 !== null) {
//         current.next = list1;
//     } else {
//         current.next = list2;
//     }

//     return dummy.next;
// };

// // Function to convert ListNode to array
// var listToArray = (list) => {
//     let result = [];
//     while (list !== null) {
//         result.push(list.val);
//         list = list.next;
//     }
//     return result;
// };

// // Example usage:
// let list1 = new ListNode(2, new ListNode(4, new ListNode(6)));
// let list2 = new ListNode(1, new ListNode(3, new ListNode(7)));

// let result = mergeTwoLists(list1, list2);
// let resultArray = listToArray(result);

// console.log(resultArray);


// console.log(result);



// var removeDuplicates = function(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }

//     let i = 0;

//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
        
//         }
//     }
//     return i + 1;
// };


// let nums =[0,0,1,1,1,2,2,3,3,4]

// let s = [...new Set(nums)]

// console.log(s);

// console.log(removeDuplicates(nums))

// let nums =[1,1,2]
// let i=0;
// var removeDuplicates = function(nums) {
// for (let j = 1; j < nums.length; j++) {                // j=1 ; j<2
//     if (nums[j] !== nums[i]) {                         // num[2]!==nums[1]  => 2 !== 1  
//         i++;                                           // i++ => 1 => 2
//         nums[i] = nums[j];                             // nums[2] =nums[2]   => 2 =2
//     }
// }
// return i+1;
// }
 
// console.log(removeDuplicates(nums));



// var removeElement = function(nums, val) {
//     let removeVal = nums.Filter(val)
//     console.log(removeVal);
// };

// removeElement([1,2,3],1)


// let nums=[1,2]
// let val=2
// let k1 = removeElement(nums, val);
// console.log(k1);


// let haystack="asdasd"
// let needle="asd"
// function strStr(haystack, needle) {
    
//     return haystack.indexOf(needle)

// }
// console.log(strStr(haystack,needle))


const i=2;

function d(){
     c=i+2;
               
}

d();
console.log(d());
console.log(c);