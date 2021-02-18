function PeopleOnTheBus(arr){
  if(arr[0][1] != 0 || arr[arr.length - 1][0] != 0){
    console.log('Error');
    } 
    else{ 
  let sleeping = 0;
    for(let i = 0; i < arr.length; i++){
      

     sleeping = sleeping + (arr[i][0] - arr[i][1]); 


    }

 console.log(sleeping + ' people asleep');
  }
}


let arr = [[3,0],[8,2],[1,3],[6,2],[3,5],[0,2]];

PeopleOnTheBus(arr);