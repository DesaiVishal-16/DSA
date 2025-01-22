
// nums =[2,5,5,11]
// target =10

// nums =[-1,-2,-3,-4,-5]
// target =-8


let twoSum = (nums, target)=> {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
        let numbers=nums[i]+nums[j]
       if(target===numbers){
          return [i,j]
       }
    }}
    return[i,j]
};

console.log(twoSum([2,5,5,11],10))
// console.log(twoSum([-1,-2,-3,-4,-5]),-8)