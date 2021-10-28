function reverseString(str){
	let newString = "";
	for (let i = str.length -1; i>=0 ;i--){
		newString += str[i];
	}
	return newString;
}


let resutl = reverseString("Hola cómo estan todos por allá? esperoq ue muy bien, cuidense mucho");

console.log(resutl);
