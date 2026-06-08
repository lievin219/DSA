// Question 1  Given a string s, count how many pairs of characters match when comparing from both ends.

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

//Question 2. Given a string of lowercase English letters s, your task is to rearrange its letters by pairing them together according to the following rule: first letter with the last one, second letter with the second-to-last one, etc. More formally, if s = c1c2c3...cn-2cn-1cn (where ci is the ith letter of s), then the letters should be arranged into c1cnc2cn-1c3cn-2.... If s contains an odd number of letters, the middle letter should not be paired with any other letters, but placed at the end of the output string instead.

// Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(s.length2) will fit within the execution time limit.

// Example

// For s = "abcdef", the output should be solution(s) = "afbecd";

// For s = "abcde", the output should be solution(s) = "aebdc".

// Since s has an odd number of letters, the middle letter 'c' is placed at the end.

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