const shortestWordLen = (str) => {
    return str.split(" ").reduce((shortest, word) => { 
      if(word.length < shortest){
          return word.length;

      }
      else{
      return shortest
      } 
    },Infinity
        );
}

console.log(shortestWordLen("Hello my name is oliver"));