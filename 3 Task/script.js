init();

function init () {
	var i, j, symbol='#';

	for(i = 0; i < 10; i++) {

		for (i = 0; i < 10; i++) {
			console.log(symbol);
			symbol = symbol + '#';
		}
	}
}
