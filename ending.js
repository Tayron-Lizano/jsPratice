function ending(str, target){
	//let newArray = str.split('');
	
	
	//return newArray[newArray.length -1] === target? true : false;
	//
	return str.slice(str.length - target.length) === target? true : false;
	
	//return str.slice(3) === target ? true : false;
}


console.log(ending("holas", "ss"));
