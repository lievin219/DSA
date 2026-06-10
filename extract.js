function extract(character){
      let result=''
       for(let i=0;i<character.length;i+=2){
         let first=character[i]
         let second=character[i+1]
          if(first!==undefined){
             result=result+second+first
          }
          else{
             result=second
          }
       }
        console.log(result)
}

extract('abcdf')