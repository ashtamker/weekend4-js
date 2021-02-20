const accum = (str) => {
    let word = '';
    for(let i = 0; i < str.length; i++){
        word = word + str[i].toUpperCase();
         for(let j = 0; j < i; j++){
            word = word + str[i].toLowerCase();
        if(i !== str.length - 1){
            word = word + '-';
        }
    }
}
    return word;
}

console.log(accum("RqaEzty"));
 