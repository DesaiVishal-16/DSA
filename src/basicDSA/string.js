// String Manipulation Functions:


// Write a function to reverse a given string.

const reverse=(input)=>{
    const str = String(input)
    // First method
    return str.split("").reverse().join("")            // str.split() => h,i str.reverse()= > i,h   str.join() => ih

    //Second method
    let reversed =""
    for(i=str.length-1;i>=0;i--){
        reversed +=str[i]  
    }
    return reversed
}
const resReverse = reverse("hi")
console.log(`Reverse is : ${resReverse}`);


// Create a function to count the number of vowels in a string.
//vowels e,i,o,u,y

const numberOfVowels=(str)=>{
      str = str.toLowerCase()

       let count = 0;

       let vowels = ["a","e","i","o","u"]

       for(let char of str){
          if(vowels.includes(char)){
            count++
          }
       }
       return count

}

 
const resVowels = numberOfVowels("hi am i the only one")
console.log("No of vowels",resVowels);


// Implement a function to capitalize the first letter of each word in a sentence.
const capitalize=(sentence)=>{
    sentence = sentence.toLowerCase()
    const words = sentence.split(" ")
    for(let i=0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ");
}

const firstSentenceCaptial = capitalize("now the fiRst words of a sentence is capital")
console.log(firstSentenceCaptial);