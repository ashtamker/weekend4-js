function nbYear(p0,percent,aug,p){
    let target = 0;
    while(p0 < (p + 1)){
        p0 = Math.floor((p0 + (p0 * (percent/100) + aug)));
        console.log(p0);



        target++;
    } 
    console.log(target);
     
}

nbYear(1500, 5, 100, 8000);