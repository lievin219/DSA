function length(characters){
 let kept=[]
 const obj={}
 let firstValue=''
  for(let i=0;i<characters.length;i++){
     let item=characters[i]
     obj[item]=(obj[item]||0) +1

 
   

 }
  for(let i=0;i<characters.length;i++){
     let item=characters[i]
     if(obj[item]===1){
         return item
     }
}

 
 }
 console.log(length('aaabbcde'))