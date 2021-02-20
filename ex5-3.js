

const toCamelCase = (word) => {
    const arr = word.split(/[-_]/);
    
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
    }
    return arr.join("");
}




console.log(toCamelCase("the-Stealth-Warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));