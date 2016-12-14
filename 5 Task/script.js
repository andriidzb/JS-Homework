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
 object = {
  a: num
 }
 return object;
}

function e(num) {
 return function () {
 	return num;
 }
}

function f(num1, num2) {
 var array = [];
 var i;
 for ( i = 0; i < num2; i++ ) {
  array[i] = num1;
 }
 return array;
}

function g(num) {
 if(!num) {
 	return 99;
 } else {
 	return num;
 }
}

function h(num) {
	return num();
}

function j(arr) {
 var sum = 0;
 var i;
 for (i = 0; i < arr.length; i++) {
 	sum = sum + arr[i];
 }
 return sum;
}

function k(object) {
 var sum = 0;
 var i;
 for ( i in object) {
 	sum = sum + object[i];
 } 
 return sum;
}

function m(arr1, arr2) {
 var arr3 = [];
 var i;
 for ( i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
 }
 return arr3;
}

function n(num1) {
 return function (num2) {
  return function (num3) {
	 return num1 + num2 + num3;
	}
 }
}
