function repeatString(str, times){
  let cadena = "";
	if(times>0){
		for(let i=0;i<times;i++){
			cadena += str;
		}
	}else{
		return "";
	}


	return cadena ;
}

console.log(repeatString("abc", 3));
