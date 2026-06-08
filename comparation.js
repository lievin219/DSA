//   Given a string s, count how many pairs of characters match when comparing from both ends.

// Example 
// Input:
// s = "abccba"

// Output:
// 3

function comparation(s){
let left=0
let right=s.length-1
let sum=0
while(left<right){
    if(s[left]===s[right]){
        sum=sum+1
    }
     left++
     right--

   
}
  
console.log(sum)
}

comparation('abceyecba')


 function solution(s){
     let left=0
     let right=s.length-1
     let result=''

      while(left<right){
          result+=s[left]
          result+=s[right]

          left++
          right--
      }
      if(left===right){
         return s[left]
      }
      return result
 }