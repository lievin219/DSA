// Given a string s, return the index of the first character that appears only once in the string.

// Example 1

// Input:

// "leetcode"

// Output:

// 0

 function indexing(string){
     let characters={}
      for (let i=0;i<string.length;i++){
         let item=string[i]
         characters[item]=(characters[item]||0)+1
      }
      for(let i=0;i<string.length;i++){
         let item=string[i]
          if(characters[item]===1){
          console.log( i)
          }
      }
 }

 indexing('gakiza')