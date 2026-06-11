// Given a string s, create a new string where all vowels (a, e, i, o, u) are moved to the end, while keeping the relative order of the consonants and vowels unchanged.

// Examples

// Input

	

// Output


// "abcdef"	"bcdfae"
// "hello"	"hlleo"
// "aeiou"	"aeiou"

 function Vowels(characters){
      const vowel=['a','o','e','u','i']
      let lastCharacter=characters[characters.length-1]
      let consonants=''
      let vowelValues=''
        console.log(lastCharacter)
    //    "aeiou"	"aeiou"
       for(let i=0;i<characters.length;i++){
        
             if(vowel.includes(characters[i])){
                
                vowelValues=vowelValues+characters[i]

             }
             else{
                 consonants=consonants+characters[i]
             }

             result=consonants+vowelValues
             
       
       }
       console.log(result)
      
 }
 Vowels('gakizi')