const toInitials = (name) => {
    let arr  =  name.split(" ");
    return (arr[0][0].toUpperCase() + '.').concat(arr[1][0].toUpperCase());
};



console.log(toInitials("Sam Harris"));
console.log(toInitials("tony stark"));