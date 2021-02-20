const dofilter = (arr, act) => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(act(arr[i], i)){
            newArr.push(arr[i]);
        }
    };

    return newArr;
}

const doForEach = (arr, act) => {
    for(let i = 0; i < arr.length; i++){
        act(arr[i], i);
    };
}

const doMap = (arr, act) => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(act(arr[i], i));
    };

    return newArr;
}

