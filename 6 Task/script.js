init();

//Compare numbers and say result
function init()  {
	var generateNumb =  generateNumber();
	while (userNumb !== generateNumb) {
		var userNumb = getUserNumber();
		if(userNumb < generateNumb) {
			alert("Our number is higher, try again");
		} else if(userNumb > generateNumb) {
			alert ("Our number is lower, try again");
		} else {
			alert ("You are right, the number is " + userNumb);
		}
	}
}

//Get number from user
function getUserNumber() {
	var userNumb = 101;
	while (userNumb < 0 || userNumb > 100) {
		userNumb = prompt("Enter number from 0 to 100:");
	}; 
	return userNumb;
}

//Generate random number 1 - 100
function generateNumber() {
	var number = Math.random() * 100;
	number = number.toFixed();
	return number;
}

