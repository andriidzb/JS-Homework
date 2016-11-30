init();

//Ask for X2, Y2 and show result
function init() {
	var userCoordinateX = prompt("Enter value of X2:");
	var userCoordinateY = prompt("Enter value of Y2:");
	var pcCoordinateX = myCoordinateX();
	var pcCoordinateY = myCoordinateY();
	var distance = distanceBetweenPoints(pcCoordinateX, pcCoordinateY, userCoordinateX, userCoordinateY);
	alert("Distance between points A(" + pcCoordinateX + ", " + pcCoordinateY+ ")" + " and B(" + userCoordinateX + ", " + userCoordinateY+ ")  is: " + distance);
}

//Calculate result
function distanceBetweenPoints(X1, Y1, X2, Y2) {
	var partOfResult = (X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2);
	var result  = Math.sqrt(partOfResult);
	return result;
}

//Generate coordinate X1
function myCoordinateX() {
	var myX = Math.random() * 10;
	var myX = myX.toFixed();
	return  myX;
}

//Generate coordinate Y1
function myCoordinateY() {
	var myY = Math.random() * 10;
	var myY = myY.toFixed();
	return  myY;
}