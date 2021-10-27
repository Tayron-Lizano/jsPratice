function titleCase(str){


	str = str.split(' ');

	let newTitle = [];

	for (let i=0; i<str.length -1; i++){
			newTitle[i] = str[i].toLowerCase().replaceAt(0, str[i].charAt(0).toUpperCase());

	}

	return str;

}


console.log(titleCase("hola como estan?"));
