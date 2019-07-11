function alphabetSort(message) {
	var arr = message.split('');
	arr = arr.sort();
	console.log(arr.join(''));
}
alphabetSort('hello');
