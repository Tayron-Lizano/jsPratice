function truncateString(str, num){

	let newStr = str.slice(0, num);

	if(str.length > num){
		return newStr + '...';
	}


	return str;
}


console.log(truncateString("hola como estan?", 5));
