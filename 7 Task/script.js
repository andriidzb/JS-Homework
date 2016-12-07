init();

//Main function
function init() {

 var userWillPlay = willPlay();
 var number;
 var maxNumber = 5;

 if (userWillPlay) {
  pcNumber = generateNumber(maxNumber);
  console.log(pcNumber);
 } else {
  return 0;
 }

 var userNumber = getUserNumber(0, 5);

 var i = 0;
 var winForGame = 10;
 var resultOfCompare = compareNumbers(pcNumber, userNumber, i, winForGame);

 while (resultOfCompare == 0 && i < 2) {
  i++;
  alert("Try again!");
 	userNumber = getUserNumber(0, 5);
  resultOfCompare = compareNumbers(pcNumber, userNumber, i, winForGame);

 }

 if (resultOfCompare == 0) {
 	console.log("Your win 0$");
 	init();
 } 
 
 var sumOfWin = +resultOfCompare;
 var newSumOfWin = 1;
 if (sumOfWin > 0) {
  var startNewGame = playAgain(); 
 } else {
 	return 0;
 }

 while (startNewGame && newSumOfWin != 0) {
	winForGame = winForGame * 3;
	maxNumber = maxNumber * 2;
	newSumOfWin = newGameFunc(maxNumber, sumOfWin, winForGame);
	sumOfWin = newSumOfWin + sumOfWin;
	if (newSumOfWin == 0) {
		break;
 }

	startNewGame = playAgain();

 }

 	if (sumOfWin > 0) {
 	 console.log("Thanks for the game! Your win " + sumOfWin + "$");
 	} else {
 		return 0;
 	}
 init();
}

//Ask user does he want play again IF HE WON MONEY ALREADY
function playAgain() {
	var newGame = confirm("Do you want to play again?");
	return newGame;
}

//Ask user does he want to play the game first time (without any win)
function willPlay() {
 var userPlay = confirm("Do you want to play the game?");
 if (userPlay) {
  return 1;
 } else {
  console.log("Today you will not win the jackpot, but you could");
  return 0;
 }
}

//Generate PC number
function generateNumber(range) {
 var number = Math.random() * range;
 number = number.toFixed();
 return number;
}

//Get user number
function getUserNumber(min, max) {
 var userNumb = -1;
 while (userNumb < 0 || userNumb > max) {
	 userNumb = prompt("You have 3 attemps to guess the number. Enter number from " + min + " to " + max + ":");
 }; 
 return userNumb;
}

//Compare numbers and say how much money user won
function compareNumbers(generateNumb, userNumb, i, winForGame) {
 var result = 0;
 if (generateNumb == userNumb && i == 0) {
  alert("Congratulations! You won " + winForGame + "$!");
  result = winForGame;
  return result;
 } else  if (generateNumb == userNumb && i == 1) {
  alert("Congratulations! You won " + winForGame/2 + "$!");
  result = winForGame/2;
  return result;
 } else  if (generateNumb == userNumb && i == 2) {
  alert("Congratulations! You won " + winForGame/5 + "$!");
  result = winForGame/5;
  return result;
 } else {
 	return result;
 }
}

//Calculate new awards and gap
function newGameFunc(maxNumber, sumOfWin, winForGame) {
 var i = 0;
 var newPcNumber = generateNumber(maxNumber); 
 console.log(newPcNumber);
 var userNumber = getUserNumber(0, maxNumber);
 var newCompare = 0;

 newCompare = compareNumbers(newPcNumber, userNumber, i, winForGame);
 
  while (newCompare == 0 && i < 2) {
 	i++;
 	alert("Try again!");
 	userNumber = getUserNumber(0, maxNumber);
  newCompare = compareNumbers(newPcNumber, userNumber, i, winForGame);
 }

 if (newCompare == 0) {
 	return 0;
 }

 sumOfWin = sumOfWin + newCompare;

 return sumOfWin;
}