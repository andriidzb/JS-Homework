init();

function init() {
	var a = k({a:1, b:2, c:3});
	//var a = d(2);
	console.log(a);
}

function a() {
	return 5;
}

function b(num1, num2) {
	return num1 + num2;
}

function c(num1, num2) {
	var result;
	result = Math.pow(num1, num2);
	return result;
}

function d(num) {
	return {a:num};
}

function e(num) {
	return num;
}

function f(num1, num2) {
	var array = [];
	var i;
	for ( i = 0; i < num2; i++ ) {
		array[i] = num1;
	}
	return array;
}

function j([num1, num2, num3]) {
	return num1 + num2 + num3;
}

function k({obj1:number1, obj2:number2, obj3:number3}) {
	return {obj1:number1} + {obj2:number2} + {obj3:number3};
}

