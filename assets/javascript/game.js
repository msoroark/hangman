

	var words = ['Peppermint Butler', 'Bacon Pancakes', 'Algebraic', 'Jiggler', 'Candy Kingdom', 'Mathmatical', 'Lumpy Space', 'Turtle Princess'];
	var currentWord = words[Math.floor(Math.random() * words.length)];
		console.log(currentWord);
	var wins = 0;
	var guesses = 15;


	
	// I want to display current word-now I want it to be underscored. 

	function makeUnderscores(currentWord) {
		// replace input with underscores
		var output = ""
		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === " ") {
				output += " ";
			} else {
				output += "_";
			}
		}
		return output;
	}

	// return an array of the indices of sub in str
	function indicesOf(stringToSearch, substringToFind) {
		var indices = []
		stringToSearch = stringToSearch.toUpperCase();
		substringToFind = substringToFind.toUpperCase();
		var hit = stringToSearch.indexOf(substringToFind);
		while(hit != -1) {
			indices.push(hit);
			hit = stringToSearch.indexOf(substringToFind, hit +1);
		}
		return indices;
	}

	var underscored = makeUnderscores(currentWord);
	document.querySelector("#current_word").innerHTML = underscored;


	
	document.onkeyup = function(event) {
		//key user pushes
		var userGuess = event.key;
		//totall guesses on letters
		var totalGuess = 15;
			// wins-counter
		var wins = 0
		console.log(userGuess);

		// var indices = [];
		// var hit = (currentWord).indexOf(userGuess);

		// while(hit != -1) {
		// 	indices.push(hit);
		// 	hit = currentWord.indexOf(userGuess, hit + 1);
		// }
		
		var indices = indicesOf(currentWord, userGuess);

		// console.log(hit);
		console.log(indices);

		
		//listeners for letters

		
		
		//how many guesses, count down to 0
	
		// display letters guessed. if doesnt equal letter in word, ++ to total guess, else show letter
		document.querySelector("#win_count").innerHTML = wins;
		document.querySelector("#g_left").innerHTML = guesses;
	 	var currentValue = document.querySelector("#g_sofar").innerText;
		var newText = (userGuess + ", " + currentValue).toUpperCase();
		document.querySelector('#g_sofar').innerHTML = newText;

		}

	
	function newWord() {
		//get new word
		currentWord = words[Math.floor(Math.random() * words.length)];
		console.log(currentWord);
		//clear guesses so far
		document.querySelector('#g_sofar').innerHTML = "";
		//reset guesses 
		guesses = 15;

	}

	
		//new image after win, new word button.