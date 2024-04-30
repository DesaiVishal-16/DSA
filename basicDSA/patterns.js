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