const findUniq = (arr) => {
    arr.sort((a,b) => a - b)
    if(arr[0] === arr[1]){
        console.log(arr.pop());
    }
    else{
        console.log(arr.shift());  
    }

}

findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([ 0, 0, 0.55, 0, 0 ]);


