var inquirer = require("inquirer");

function BasicCard(front, back){
	this.front = front;
	this.back = back;

}

var first = new BasicCard("a German-born physicist who developed the general theory of relativity", "Albert Einstein");
var second = new BasicCard("an Italian physicist, mathematician, astronomer, and philosopher who played a major role in the initiation and development of modern science", "Galileo");
var third = new BasicCard("a Polish mathematician and astronomer who proposed a model of the universe placing the Sun, rather than the Earth, at the center", "Copernicus");

var askQuestion = function(){
	inquirer.prompt([
	{
		type: "input",
		name: "firstQuestion",
		message: first.front,
	},
	{
		type: "confirm",
		name: "confirm",
		message: "Are you sure?"
	},
	{
		type: "input",
		name: "secondQuestion",
		message: second.front,
	},
	{
		type: "confirm",
		name: "confirm",
		message: "Are you sure?"
	},
	{
		type: "input",
		name: "thirdQuestion",
		message: third.front,
	},
	{
		type: "confirm",
		name: "confirm",
		message: "Are you sure?"
	}

	]).then(function(answers){

		if (answers.firstQuestion === first.back){
			console.log("Correct! " + first.back + " was " + first.front);
		} else {
			console.log("Incorrect. " + first.back + " was " + first.front);
		}

		if (answers.secondQuestion === second.back){
			console.log("Correct! " + second.back + " was " + second.front);
		} else {
			console.log("Incorrect. " + second.back + " was " + second.front);
		}

		if (answers.thirdQuestion === third.back){
			console.log("Correct! " + third.back + " was " + third.front);
		} else {
			console.log("Incorrect. " + third.back + " was " + third.front);
		}
	})
}

askQuestion();