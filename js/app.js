var BartenderApp = BartenderApp || {}
BartenderApp.allQuestions = [];
BartenderApp.listOfPatrons = [];

// Function to construct questions

var Questions = function(question) {
    this.question = question;
    BartenderApp.allQuestions.push(this);
}


var drinkStrength = new Questions(["Do you Like your drinks Strong?", "strong", "weak"]);
var sweetOrSour = new Questions(["Do you Like your drinks sweet or sour?", "sour", "sweet"]);
var saltOrSavory = new Questions(["Do you like salty or savory?", "salty", "savory"]);

//Answers

var newAnswers = [];

var Answers = function(answers) {
    this.answers = answers;
    BartenderApp.listOfPatrons.push(this);
};

// Bartender Constructor
var Bartender = function(order) {
    this.order = order;
};

Bartender.prototype.makeDrink = function() {
    var drink = [];

    order = this.order.answers;

    if (order.indexOf("strong") >= 0) {
        var rand = strong.ingredient.length;
        rand = Math.round(Math.random() * rand);
        drink.push(strong.ingredient[rand]); // need to add randomness
    };

    if (order.indexOf("weak") >= 0) {
        var rand = weak.ingredient.length;
        rand = Math.round(Math.random() * rand);
        drink.push(weak.ingredient[rand]);
    }

    if (order.indexOf("sour") >= 0) {
        var rand = fruityIngredients.ingredient.length;
        rand = Math.round(Math.random() * rand);
        drink.push(sour.ingredient[rand]);
    }

    if (order.indexOf("salty") >= 0) {
        var rand = salty.ingredient.length;
        rand = Math.round(Math.random() * rand);
        drink.push(salty.ingredient[rand]);
    }

    if (order.indexOf("savory") >= 0) {
        var rand = savory.ingredient.length;
        rand = Math.round(Math.random() * rand);
        drink.push(savory.ingredient[rand]);
    }
    $(".display-question").text("Have a "+drink+"!");

};

function makeADrink(answers){

	var mixologist = new Bartender(answers);
	mixologist.makeDrink();
}

//display questions and options

var numOfQuestions = 0;
var currentQuestion = BartenderApp.allQuestions[numOfQuestions].question;

function createQuestion() {

    if (typeof BartenderApp.allQuestions[numOfQuestions] != "undefined") {
        currentQuestion = BartenderApp.allQuestions[numOfQuestions].question;
        $('.display-question').text(currentQuestion[0]);
        $('.one').text(currentQuestion[1]);
        $('.two').text(currentQuestion[2]);
        numOfQuestions++;
    } else {
        makeADrink(newAnswers);
    }
}

$(".answer").on('click', function(event) {
    var pickedAnswer = $(event.target).text();
    newAnswers.push(pickedAnswer);
    createQuestion();
});

//start the bartender
$(".init-bar").on("click", function() {

    $(".init-bar").remove();
    $(".buttons button").removeClass('hidden');
    createQuestion();

});


/*Create Ingredients constructor Function*/

var ingredients = function(ingredient) {
    this.ingredient = ingredient;

}

var salty = new ingredients(["Salted Rim", "Olives", "Tomato Juice"]);

var sweet = new ingredients(["Sugared Rim", "Cherries", "Candied Grapefruit"]);

var savory = new ingredients(["Balsamic Cherry Shrub", "Rosemary", "Cured Pork"]);

var strong = new ingredients(["Double Shot Vodka", "Double Shot Gin", "Double Shot Rum"]);

var weak = new ingredients(["Shot Vodka", "Shot Gin", "Shot Rum"]);

var sour = new ingredients(["Lemon Juice", "Grapefruit Juice", "Lime Juice"]);
