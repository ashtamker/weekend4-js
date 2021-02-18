const toCamelCase = (str) => {
    let i = str.indexOf('_');
    let tmp = '';
    
    tmp = tmp + str.slice(0, i);

    return tmp;
}


console.log(toCamelCase("The_Stealth_Warrior"));