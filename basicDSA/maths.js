// 1. Count digits in a number

// Input:N = 12345
// Output:5

//Extraction of digits

function countDigits(N){
    let count = 0
   while(N !== 0){
    count++
    N = Math.floor(N/10)      //inreverse=>12345=>1234>123>12>1
   }
   return count
}
console.log(countDigits(12345));


