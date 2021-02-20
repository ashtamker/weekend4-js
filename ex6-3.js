const longest = (str1, str2) => {
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    let oneWord = [], i = 0, j = 0, k = 0;

    if(str1[0] < str2[0]){
        oneWord.push(str[1]);
        i++;
    }

    else{
        oneWord.push(str2[0]);
        j++;
    }

    while(i < str1.length || j < str2.length){
        if(str1[i] < str2[j] || str2[j] === undefined){
            if(str1[i] > oneWord[k]){
                oneWord.push(str1[i]);
                k++;
            }
            i++;
        }
        else{
            if(str2[j] > oneWord[k]){
                oneWord.push(str2[j]);
                k++;
            }
            j++;
        }
    }

    return oneWord.join("");
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

console.log(longest(a, b));