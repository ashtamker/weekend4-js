const fibonacciNum = (pos) => {
    let a = 1, b = 0, temp;

    while (pos >= 0){
      temp = a;
      a = a + b;
      b = temp;
      pos--;
    }
  
    console.log(b); 
  }

  fibonacciNum(11);
