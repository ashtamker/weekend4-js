function centuryFromYear(num) {
    if(num < 101){
        console.log(1);
    }
    else if(num % 100 == 0) {
        console.log(Math.floor(num / 100));
    }

    else{
        console.log(Math.floor(num / 100 + 1));
    }
}


centuryFromYear(200);