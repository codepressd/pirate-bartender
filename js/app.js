// Object with questions - Don't see the reason to use a constructor/Overkill
var onQuestion = 1;
var questions = {
    1: "Do ye like yer drinks strong?",
    2: "Do ye like it with a salty tang ?",
    3: "Are ye a lubber who likes it savory ?",
    4: "Would ye like a bit of sweetness with yer poison ?",
    5: "Are ye one for a sour finish ?"
};




var Bartender = function(num) {

//display questions and options
	$('.intro h1').text(questions[num]);
	$('.one').text(foodStorage.ingredients[num][0].ingredient);
	$('.two').text(foodStorage.ingredients[num][1].ingredient);
	$('.three').text(foodStorage.ingredients[num][2].ingredient);

};


$(".init-bar").on("click", function() {

    $(".init-bar").remove();
    $(".buttons button").removeClass('hidden');
    Bartender(onQuestion);

});


/*Create Ingredients constructor Function*/


var ingredients = function(name, arr) {
        this.name = name;
        this.ingredients = arr;
        foodStorage.addItems(this.name, this.ingredients); 

    }

/*Create Store room constructor function*/


var Storeroom = function() {
    this.ingredients = {};
}
Storeroom.prototype.addItems = function(name, item) {
    this.ingredients[name] = item;
}
Storeroom.prototype.removeQuantity = function(itemLocal) {
    itemLocal.amt--;
}


/*Initiate Pantry*/


var foodStorage = new Storeroom();

var salty = new ingredients(2, [{ ingredient: "Salted Rim", amt: 4 }, { ingredient: "Olives", amt: 5 }, { ingredient: "Tomato Juice", amt: 3 }]);

var sweet = new ingredients(4, [{ ingredient: "Sugared Rim", amt: 4 }, { ingredient: "Cherries", amt: 5 }, { ingredient: "Candied Grapefruit", amt: 3 }]);

var savory = new ingredients(3, [{ ingredient: "Balsamic Cherry Shrub", amt: 4 }, { ingredient: "Rosemary", amt: 5 }, { ingredient: "Cured Pork", amt: 3 }]);

var strong = new ingredients(1, [{ ingredient: "Double Shot Vodka", amt: 4 }, { ingredient: "Double Shot Gin", amt: 5 }, { ingredient: "Double Shot Rum", amt: 3 }]);

var sour = new ingredients(5, [{ ingredient: "Lemon Juice", amt: 4 }, { ingredient: "Grapefruit Juice", amt: 5 }, { ingredient: "Lime Juice", amt: 3 }]);
