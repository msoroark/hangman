var wordCombos = [{
	word: 'peppermint butler', 
	phrase: 'Loyal and faithful butler of Princess Bubble Gum. Also possibly some sort of demon. Who can say?',
	videoID: 'NxQOD7DmxmE'
}, {
	word: 'bacon pancakes',
	phrase: 'Take some bacon and put it in a pancake!',
	videoID: 'FjxAAezqJZQ',
}, {
	word: 'treetrunks',
	phrase: 'A sassy yellow elephant from Candy Kingdom, she has no time for messing around.',
	videoID: '9blaYtgZk-E',
}, {
	word: 'gunter',
	phrase: 'Gunters real name is Orgalorg. While is main goal is domination of the solar sytem, he mostly just hangs out with his best friend, the Ice King',
	videoID: 'QscSV4lxw7Q',
}, {
	word: 'lumpy space',
	phrase: 'Home of Lumpy space princess. Oh my glob!',
	videoID: 'AAmJslV48g',
}, {
	word: 'lady rainicorn',
	phrase: 'Lady rainicorn is the Korean speaking girlfriend of Jake. Also, like, half rainbow half unicorn.',
	videoID: 'LErwHmjBuYQ#t=0m35s',
}, ];

function getWord(){
	return wordCombos.shift();
}

var wordCombo = getWord();
var correctAnswer = wordCombo.word;
var winningPhrase = wordCombo.phrase;
var wins = 0;
var guesses = 15;




function newGame() {
	//get new word]
	wordCombo = getWord();
	console.log(wordCombo);
	correctAnswer = wordCombo.word;
	winningPhrase = wordCombo.phrase;
	currentWord = makeUnderscores(correctAnswer);

	document.querySelector('#current_word').innerHTML = currentWord;
	//clear guesses so far
	document.querySelector('#g_sofar').innerHTML = "";
	//reset guesses 
	guesses = 15;

}

 document.getElementById("button").onclick = function(){
 	newGame()};
 	


//Display for when game is won or lost
function finishGame() {
	if (currentWord === correctAnswer){
	//fishish game text
	document.querySelector('#finish_game_text').innerHTML = 'Mathmatical! You got it!';
	document.querySelector('#phrase').innerHTML = wordCombo.phrase;
	var videoHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
		wordCombo.videoID +  '?&autoplay=1"frameborder="0" allowfullscreen></iframe>'
	document.querySelector('#video').innerHTML = videoHTML;
	//phrase displayed
	} else {
	document.querySelector('#finish_game_text').innerHTML = 'UNACCEPTABLE! Get it together, dude.';
	document.querySelector('#video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/07So_lJQyqw?&autoplay=1" frameborder="0" allowfullscreen></iframe>';
	winningPhrase = "";
	}
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
console.log(currentWord)
document.querySelector("#current_word").innerHTML = currentWord;



document.onkeyup = function(event) {
	//key user pushes
	var userGuess = event.key;
	console.log(userGuess);

	
	
	var indices = indicesOf(correctAnswer, userGuess);
	if (indices.length === 0) { //user guesses wrong
		guesses -= 1;
		if (guesses === 0){
			finishGame()
		}
	} else {
		currentWord = replaceIndices(currentWord, indices, userGuess);
	}


	if (currentWord === correctAnswer) {
		wins +=1;
		finishGame()
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