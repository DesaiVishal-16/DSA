// Pattern-1: Recat Star Pattern

// * * *
// * * *
// * * *

function reactPattern(N){
    let pattern = ""
   for(i=0;i<N;i++){
    for(j=0;j<N;j++){
        pattern +=  "* "
   }
        pattern+="\n"
   }
   return pattern;
}
console.log(reactPattern(5))



//Pattern-2: Right-Angled Triangle Pattern

// * 
// * * 
// * * *

function raTriangle(N){
    pattern = ""
    for(i=0;i<N;i++){
      for(j=0;j<=i;j++){
         pattern +="* "
      }
      pattern +="\n"
    }
    return pattern;
}

console.log(raTriangle(5));


//Pattern - 3: Right-Angled Number Pyramid

// 1
// 1 2 
// 1 2 3

function raNumberTraingle(N){
    pattern = ""
    for(i=1;i<=N;i++){
        for(j=1;j<=i;j++){
            pattern +=[j] + " "
        }
        pattern +="\n"
    }
    return pattern;
}

console.log(raNumberTraingle(5));


//Pattern - 4: Right-Angled Number Pyramid - II

// 1
// 2 2 
// 3 3 3

function  raNumPyramidII(N){
    pattern = ""
    for(i=1;i<=N;i++){
        for(j=1;j<=i;j++){
            pattern +=[i] + " "
        }
        pattern +="\n"
    }
    return pattern;
}
console.log(raNumPyramidII(5));


// Pattern-5: Inverted Right Pyramid

// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

function inverRightPyramid(N){
    pattern = ""
    for(i=0;i<N;i++){
        for(j=i;j<N;j++){       // for(j=N;j>i;j--){
            pattern +="* "
        }
        pattern +="\n"
    }
    return pattern
}

console.log(inverRightPyramid(5));

//Pattern - 6: Inverted Numbered Right Pyramid

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

function inverNumRightPyramid(N){
    pattern = ""
    for(i=0;i<N;i++){
        for(j=1;j<=N-i;j++){        // for(j=N;j>i;j--){
            pattern += [j] + " "    // pattern +=[N-j+1]
        }
        pattern +="\n"
    }
      return pattern;
}
console.log(inverNumRightPyramid(5));


//Pattern - 7: Star Pyramid

//       *     
//      ***    
//     *****   
//    *******  
//   ********* 
//  ***********

function starPyramid(N){
    pattern =""
    for(i=0;i<N;i++){
        for(j=0;j<N-i-1;j++){
            pattern +=" "
        }
        for(j=0;j<2*i +1;j++){
            pattern+="*"
        }
        for(j=0;j<N-i-1;j++){
            pattern +=" "
        }
        pattern +="\n"
    }
    return pattern
}
console.log(starPyramid(5));



//Pattern - 8: Inverted Star Pyramid

// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *

function invertstarPyramid(N){
    pattern =""
    for(i=0;i<N;i++){
        for(j=0;j<i;j++){
            pattern +=" "
        }
        for(j=0;j<2*N -(2*i +1);j++){
            pattern+="*"
        }
        for(j=0;j<i;j++){
            pattern +=" "
        }
        pattern +="\n"
    }
    return pattern
}
console.log(invertstarPyramid(5));





//Pattern - 9: Diamond Star Pattern


//     *  
//    ***
//   ***** 
//   *****  
//    ***
//     *


function diamondStar(N){
   pattern=""
   for(i=0;i<N;i++){
    for(j=0;j<N-i-1;j++){
        pattern +=" "
    }
    for(j=0;j<2*i +1;j++){
        pattern +="*"
    }
    for(j=0;j<N-i-1;j++){
        pattern +=" "
    }
    pattern +="\n"
    }
   for(i=0;i<N;i++){
   for(j=0;j<i;j++){
    pattern +=" "
    }
   for(j=0;j<2*N-(2*i+1);j++){
    pattern +="*"
    }
   for(j=0;j<i;j++){
    pattern +=" "
    }
   pattern +="\n"
    }
   return pattern
}
console.log(diamondStar(5));




//Pattern - 10: Half Diamond Star Pattern


// *  
// **
// ***  
// **
// * 


function halfDiamondStar(N){
    pattern =""
    for(i=1;i<=N;i++){
        for(j=1;j<=i;j++){
            pattern +="*"
        }
        pattern +="\n"
    }
    for(i=N-1;i>=1;i--){
        for(j=1;j<=i;j++){
        pattern +="*"
        }
     pattern+="\n"
    }
    return pattern
}
console.log(halfDiamondStar(5));


//Pattern - 11: Binary Number Triangle Pattern

// 1
// 01
// 101
// 0101
// 10101
// 010101

function binaryNumberTriangle(N){
    pattern =""
    for(i=0;i<N;i++){
        for(j=0;j<=i;j++){
            pattern += (j % 2 === i % 2) ? '1' : '0';
        }
        pattern +="\n"
    }
    return pattern
}

console.log(binaryNumberTriangle(6));


//Pattern - 12: Number Crown Pattern

// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321
// 123456654321

function numberCrownPatterns(N){
    pattern +=""
    for(i=1;i<=N;i++){

        for(j=1;j<=i;j++){
            pattern += j
        }
        for(j=0;j<2*(N-i);j++){
            pattern +=" "
        }
        for(j=i;j>0;j--){
            pattern += j
        }
        pattern +="\n"
    }
    return pattern
}


console.log(numberCrownPatterns(6));




//Pattern - 13: Increasing Number Triangle Pattern

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21


function increaseNumberTriangle(N){
     pattern += ""
    let num = 1 
    for(i=1;i<=N;i++){
        let row = ""
      for(j=1;j<=i;j++){
        row += num + " "
        num=num+1    
      }
      pattern +=row + '\n'
    }
    return pattern
}
console.log(increaseNumberTriangle(6));


//Pattern-14: Increasing Letter Triangle Pattern


// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function increaseLetterTriangle(N){
    pattern += ""

    for(i=1;i<=N;i++){
        let row= ""
        for(j=1;j<=i;j++){
            row += String.fromCharCode(64 + j)+ " "
        }
        pattern +=row + '\n'
    } 
    return pattern
}
console.log(increaseLetterTriangle(6));



//Pattern-15: Reverse Letter Triangle Pattern


// A B C D E F
// A B C D E 
// A B C D
// A B C
// A B
// A

function reverseLetterTriangle(N){
    pattern += ""
    for(i=N;i>=1;i--){
        let row = ""
        for(j=1;j<=i;j++){
            row +=String.fromCharCode(64+j)+" "
        }
        pattern += row + '\n'
    }
    return pattern
}
console.log(reverseLetterTriangle(6));




//Pattern - 16: Alpha-Ramp Pattern


// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F


function alphaRamp(N){
    pattern += ""
    for(i=1;i<=N;i++){
        let row = ""
        for(j=1;j<=i;j++){
            row += String.fromCharCode(64 + i) + " "
        }
        pattern += row + '\n'
    }
    return pattern
}
console.log(alphaRamp(6));


//Pattern - 17: Alpha-Hill Pattern

//         A     
//        ABA    
//       ABCBA   
//      ABCDCBA  
//     ABCDEDCBA 
//    ABCDEFEDCBA


function alphaHill(N){
    pattern += ""
    for(i=1;i<=N;i++){
        let row = ""
        for(j=N;j>i;j--){
            row +=" "
        }
        for(j=1;j<=i;j++){
         row += String.fromCharCode(64 + j)
        }
        for(j=i-1;j>=1;j--){
            row += String.fromCharCode(64 + j)
        }
        pattern += row + '\n'
    }
    return pattern
}

console.log(alphaHill(6));



//Pattern-18: Alpha-Triangle Pattern

// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function alphaTriangle(N){
    pattern +=""
    for(i=1;i<=N;i++){
        let row = ""
        for(j=N;j>N-i;j--){
         row += String.fromCharCode(64+j)+ " "
        }
        pattern += row + '\n'
    }
    return pattern
}
console.log(alphaTriangle(6));


//Pattern-19: Symmetric-Void Pattern

// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************


function symmetricVoid(N){

    pattern += ""

  for(i = 0;i < N;i++){
    let row = ""

    for(j = N;j > i;j--){
        row += "*"
    }
   for(k = 0;k <2 *i;k++){
        row += " "
   }
    for(j = N; j > i;j--){
        row += "*"
      }   
    pattern +=row + '\n'
  }

  for(i = 1;i <= N;i++){
        let row = ""
        
    for(j = 1;j <= i;j++){
        row += "*"
    }
    for(k = 0;k < 2*(N-i);k++){
        row += " "
    }
    for(j = 1;j <= i;j++){
        row += "*"
    }
    pattern +=row + '\n'
  }
  return pattern
}

console.log(symmetricVoid(6));


//Pattern - 20: Symmetric-Butterfly Pattern

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *

function symmetricButterfly(N){
   pattern += ""

   for(i = 1;i <= N;i++){
     let row = ""
     for(j = 1;j <= i;j++){
       row += "*"
     }
     for(k = 1;k <= 2*(N-i);k++){
        row += " "
      }
      for(j = 1;j <= i;j++){
        row += "*"
      }
     pattern += row + '\n'
   }

   for(i = 0;i <= N;i++){
    let row =""
    for(j = N;j > i;j--){
      row += "*" 
    }
    for(k = 0;k < 2*i;k++){
       row +=" "
     }
     for(j = N;j > i;j--){
       row += "*"
     }
    pattern += row + '\n'
  }
   return pattern
}
console.log(symmetricButterfly(6));


//Pattern - 21: Hollow Rectangle Pattern

// ******
// *    *
// *    *
// *    *
// *    *
// ******

function hollowRectangle(N){
    pattern += ""

    for(i = 0;i < N;i++){
        let row =""
    
        for(j = 0;j < N;j++){

            if(i==0 || j==0 || i==N-1 || j==N-1){
                row += "*"
            }
            else{
                row += " "
            }
        }
        pattern += row + '\n'
    }
    return pattern
}
console.log(hollowRectangle(6));



//Pattern - 22: The Number Pattern



// 6 6 6 6 6 6 6 6 6 6 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 2 1 2 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 6 6 6 6 6 6 6 6 6 6

function numberPattern(N){
    pattern += ""
    for(i = 0;i < 2*N-1;i++){
       let row = ""
       for(j = 0;j < 2*N-1;j++){

        let top = i
        let bottom = j
        let left = (2*N-2)-j
        let right = (2*N-2)-i

        let minDistance = Math.min(top,bottom,left,right);
        let num = N - minDistance
        row += num + " "
       }
       pattern += row + '\n'
    }
    return pattern
}
console.log(numberPattern(6));
