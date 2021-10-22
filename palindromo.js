function palindromo(str){
	let newString = "";
	for (let i = str.length -1; i>=0 ;i--){
		newString += str[i];
	}
	return newString === str? "la cadena evaluda es palindroma" : "la cadena evaluada no es palindroma";
}


let resutl = palindromo("ama");

console.log(resutl);
