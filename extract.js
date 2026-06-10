function extract(character){
      let result=''
       for(let i=0;i<character.length;i+=2){
         let first=character[i]
         let second=character[i+1]
          if(second!==undefined){
             result=result+second+first
          }
          else{
             result=result+first
          }
       }
        console.log(result)
}

extract('abcdf')