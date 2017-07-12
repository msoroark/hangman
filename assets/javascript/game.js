

var words = ['Peppermint Butler', 'Bacon Pancakes', 'Algebraic', 'Jiggler', 'Candy Kingdom', 'Mathmatical', 'Lumpy Space', 'Turtle Princess'];
var correctAnswer = words[Math.floor(Math.random() * words.length)];
	console.log(correctAnswer);
var wins = 0;
var guesses = 15;

function newWord() {
	//get new word
	correctAnswer = words[Math.floor(Math.random() * words.length)];
	console.log(correctAnswer);
	//clear guesses so far
	document.querySelector('#g_sofar').innerHTML = "";
	//reset guesses 
	guesses = 15;

}

// I want to display current word-now I want it to be underscored. 

function makeUnderscores(correctAnswer) {
	// replace input with underscores
	var output = ""
	for (var i = 0; i < correctAnswer.length; i++) {
		if (correctAnswer[i] === " ") {
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

// stringToReplace = Megan indices = [0, 1] replaceWith = v result = "vvgan"
function replaceIndices(stringToReplace, positions, replaceWith) {
	var replacedString = "";
	for (var pos = 0; pos < stringToReplace.length; pos++) {
		if (positions.indexOf(pos) != -1) {
			replacedString += replaceWith;
		} else {
			replacedString += stringToReplace[pos];
		}
	}
	return replacedString;
}


var currentWord = makeUnderscores(correctAnswer);
document.querySelector("#current_word").innerHTML = currentWord;



document.onkeyup = function(event) {
	//key user pushes
	var userGuess = event.key;
	console.log(userGuess);

	
	
	var indices = indicesOf(correctAnswer, userGuess);
	if (indices.length === 0) { //user guesses wrong
		guesses -= 1;
		if (guesses === 0){
			newWord()
		}
	} else {
		currentWord = replaceIndices(currentWord, indices, userGuess);
	}




	// console.log(indices);
	console.log(indices);


	// display letters guessed. if doesnt equal letter in word, ++ to total guess, else show letter
	document.querySelector("#win_count").innerHTML = wins;
	document.querySelector("#g_left").innerHTML = guesses;
 	var currentValue = document.querySelector("#g_sofar").innerText;
	var newText = (userGuess + ", " + currentValue).toUpperCase();
	document.querySelector('#g_sofar').innerHTML = newText;
	document.querySelector('#current_word').innerHTML = currentWord;

}

	
		//new image after win, new word button.