const isIsogram = (str) => {
    const counter = [];

    const arr = str.split("");

    for(let i = 0; i < arr.length; i++){
        let letter = arr[i].toLowerCase();
        if(counter[letter]){
            return false;
        }
        else{
            counter[letter] = '-';
        }
            
    };

    return true;
};


console.log(isIsogram(""));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));