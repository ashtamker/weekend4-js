function  findNextSquare(num) {
    if(Number.isInteger(Math.sqrt(num)) === true){

        console.log((Math.sqrt(num) + 1) ** 2);

    }
   else {
       console.log(1);
   }
}


findNextSquare(625);
