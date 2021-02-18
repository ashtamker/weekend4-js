const binaryToDec = (arr) => {
    let tmp = 0;
    let j = 1;
    for(let i = arr.length - 1; i > -1; i --){
        
    if(arr[i] === 0){
        tmp = tmp + 0;
        j = j * 2;
        
    }
    else{
    
    tmp = tmp + (1 * j);
    j = j * 2; 
         
    } 
  
}
 console.log(tmp);
}



let test1 =  [1, 0, 0, 1];
let test2 =  [1, 0, 1, 1];
let test3 =  [1, 0, 1, 1, 0];

binaryToDec(test1);
binaryToDec(test2);
binaryToDec(test3);