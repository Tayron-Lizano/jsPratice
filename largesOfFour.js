function largesOfFour(arr){
  let newArray = [];
  let max =0;

  for(let i =0; i<arr.length; i++){
    for(let j=0;j<arr[i].length ;j++){
      if(arr[i][j]>max){
	max = arr[i][j];
      }
    }
    newArray.push(max);
  }

  return newArray;

}


console.log(largesOfFour([[4, ,5, 1, 9],[13, 27, 18, 29],[32, 35, 37, 39], [1000, 1009, 857, 1]]));

