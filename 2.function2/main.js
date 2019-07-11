function palindrome(message){
	for(var i = 0;i < message.length/2;i++){
		if(message.charAt(i) != message.charAt(message.length-i-1)){
			return false;
		}
	}
	return true;
}
console.log(palindrome('hello'));
console.log(palindrome('abcba')); 
