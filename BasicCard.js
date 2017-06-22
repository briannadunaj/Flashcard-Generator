var inquirer = require("inquirer");

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

var first = new BasicCard("a German-born physicist who developed the general theory of relativity", "Albert Einstein");
var second = new BasicCard("an Italian physicist, mathematician, astronomer, and philosopher who played a major role in the initiation and development of modern science", "Galileo");
var third = new BasicCard("a Polish mathematician and astronomer who proposed a model of the universe placing the Sun, rather than the Earth, at the center", "Copernicus");

var right = 0;
var wrong = 0;

var askQuestion = function(){
//	inquirer.registerPrompt('recursive', require('inquirer-recursive'));
	inquirer.prompt([
	{
		type: "input",
		name: "firstQuestion",
		message: first.front,

	},
	{
		when: function(answers){
			if (answers.firstQuestion === first.back){
				right++;
				console.log("Correct! " + first.back + " was " + first.front);
			} else {
				wrong++;
				console.log("Incorrect. " + first.back + " was " + first.front);
			}
		}
	},

	{
		type: "input",
		name: "secondQuestion",
		message: second.front,
	},
	{
		when: function(answers){
			if (answers.secondQuestion === second.back){
				right++;
				console.log("Correct! " + second.back + " was " + second.front);
			} else {
				wrong++;
				console.log("Incorrect. " + second.back + " was " + second.front);
			}
		}
	},
	{
		type: "input",
		name: "thirdQuestion",
		message: third.front,
	},
	{
		when: function(answers){
			if (answers.thirdQuestion === third.back){
				right++;
				console.log("Correct! " + third.back + " was " + third.front);
			} else {
				wrong++;
				console.log("Incorrect. " + third.back + " was " + third.front);
			}
		}
	}

	]).then(function(answers){
		console.log("You answered " + right + " flashcards correctly and " + wrong + " flashcards incorrectly.");
	})
}

askQuestion();