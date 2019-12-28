function countNumbers(str) {
	let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(+str[i])) {
            newStr += str[i];
        }
    }
    let count = {};
	for (var i = 0; i < newStr.length; i++) {
		if (count[newStr[i]] === undefined) {
			count[newStr[i]] = 1;
		} else {
			count[newStr[i]]++;
		}
	}
	return count;
}
countNumbers('erer384jj4444666888jfd123');