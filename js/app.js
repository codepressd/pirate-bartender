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


};

//display questions and options



function createQuestion() {

    var numOfQuestions = 0;
    //var currentQuestion = BartenderApp.allQuestions[numOfQuestions].question;

    if (typeof BartenderApp.allQuestions[numOfQuestions] != "undefinded") {

        $('.display-question').text(BartenderApp.allQuestions[numOfQuestions].question[0]);
        $('.one').text(BartenderApp.allQuestions[numOfQuestions].question[1]);
        $('.two').text(BartenderApp.allQuestions[numOfQuestions].question[2]);
        numOfQuestions++;
    } else {
        Bartender.makeDrink(answers);
    }
}

$(".answer").on('click', function(event) {
    var pickedAnswer = $(event.target).text();
    newAnswers.push(pickedAnswer);
    /*    $('.intro h1').text("");
        $('.one').text("");
        $('.two').text("");*/
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
