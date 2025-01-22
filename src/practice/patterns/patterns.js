/*

Pattern-1: Rectangular Star Pattern
   Problem Statement: Given an integer N, print the following pattern.
   Examples:
   Example 1:
   Input: N = 3
   Output: 
   * * *
   * * *
   * * *

*/


function pattSquare(N){
    let pattern = "";
       for (let i = 0;i < N;i++){
           for (let j = 0;j < N;j++){
                  pattern += '*'
		} 
		 pattern += '\n'

	} 
    return pattern

}

 let squarePattern = pattSquare(3)
console.log(squarePattern)


