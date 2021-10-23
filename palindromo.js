function palindromo(str){
	let newString = "";
	for (let i = str.length -1; i>=0 ;i--){
		newString += str[i];
	}
	return newString === str? `la cadena evaluda ${str} es palindroma` 
				: `la cadena evaluada ${str} no es palindroma`;
}


//let resutl = palindromo("arenera");

console.log(palindromo("arenea"));
