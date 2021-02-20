const maskify = (str) => {
    let newStr =  str.split("").map((char, index) => str.length - index > 4? '#' : char).join("");
  
return newStr;
}




console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));