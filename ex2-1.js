function sumLowest(arr){
    arr.sort((a,b) => a - b)
    return sum = arr[0] + arr[1]; 

}






let arr = [19, 95, 42, 12, 7];
console.log(sumLowest(arr));