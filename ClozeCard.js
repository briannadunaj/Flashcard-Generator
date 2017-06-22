var inquirer = require("inquirer");

function ClozeCard(cloze, partial, fullText){
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
}

var firstCloze = new ClozeCard(
	"Albert Einstein",
	"a German-born physicist who developed the general theory of relativity",
	"Albert Einstein was a German-born physicist who developed the general theory of relativity");
var secondCloze = new ClozeCard(
	"Galileo",
	"an Italian physicist, mathematician, astronomer, and philosopher who played a major role in the initiation and development of modern science", 
	"Galileo was an Italian physicist, mathematician, astronomer, and philosopher who played a major role in the initiation and development of modern science");
var thirdCloze = new ClozeCard(
	"Copernicus",
	"a Polish mathematician and astronomer who proposed a model of the universe placing the Sun, rather than the Earth, at the center", 
	"Copernicus was a Polish mathematician and astronomer who proposed a model of the universe placing the Sun, rather than the Earth, at the center");

var right = 0;
var wrong = 0;

var Flashcards = function(){
	inquirer.prompt([
	{
		type: "input",
		name: "firstCard",
		message: firstCloze.partial,

	},
	{
		when: function(answers){
			if (answers.firstCard === firstCloze.cloze){
				right++;
				console.log("Correct! " + firstCloze.fullText);
			} else {
				wrong++;
				console.log("Incorrect. " + firstCloze.fullText);
			}
		}
	},

	{
		type: "input",
		name: "secondCard",
		message: secondCloze.partial,
	},
	{
		when: function(answers){
			if (answers.secondCard === secondCloze.cloze){
				right++;
				console.log("Correct! " + secondCloze.fullText);
			} else {
				wrong++;
				console.log("Incorrect. " + secondCloze.fullText);
			}
		}
	},
	{
		type: "input",
		name: "thirdCard",
		message: thirdCloze.partial,
	},
	{
		when: function(answers){
			if (answers.thirdCard === thirdCloze.cloze){
				right++;
				console.log("Correct! " + thirdCloze.fullText);
			} else {
				wrong++;
				console.log("Incorrect. " + thirdCloze.fullText);
			}
		}
	}

	]).then(function(answers){
		console.log("You answered " + right + " flashcards correctly and " + wrong + " flashcards incorrectly.");
	})
}

Flashcards();