function hello() {
	return "helloo edabite.com"
}

console.log(hello());

function addition(a, b) {
    return a+b;

}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

function convert(minutes) {
	return minutes *60
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

function bitwiseAND(n1, n2) {
	return n1 & n2
}



function bitwiseOR(n1, n2) {
	return n1 | n2
}


function bitwiseXOR(n1, n2) {
	return n1 ^ n2
}

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));

function countTrue(arr) {
    return arr.filter(Boolean).length;
}

console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false])); // ➞ 0
console.log(countTrue([])); // ➞ 0








