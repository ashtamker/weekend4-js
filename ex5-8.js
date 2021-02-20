const longestWordLen = (str) => {
    return str.split(" ").reduce((longest, word) => { 
      if(word.length > longest){
          return word.length;

      }
      else{
      return longest
      } 
    },0
        );
}

console.log(longestWordLen("Hello my name is oliver"));