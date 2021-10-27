function palindromo(str){
	let newString = "";
	for (let i = str.length -1; i>=0 ;i--){
		newString += str[i];
	}
	return newString === str? `la cadena evaluda ${str} ES palindroma` 
				: `la cadena evaluada ${str} NO es palindroma`;
}


//let resutl = palindromo("arenera");

console.log(palindromo("arenea"));
