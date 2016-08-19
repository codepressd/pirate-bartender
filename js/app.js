/*Create Questions Constructor Function*/

var questions = function(Question, response) {
    this.Question = Question;

}

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

Storeroom.prototype.removeQuantity = function(itemLocal){
	itemLocal.amt --;
}



/*Initiate Pantry*/

var foodStorage = new Storeroom();

/*Create all Ingredients and Add to foodStorage*/

var salty = new ingredients("salty", [{ ingredient: "Salted Rim", amt: 4 },
    { ingredient: "Olives", amt: 5 }, { ingredient: "Tomato Juice", amt: 3 }
]);

var sweet = new ingredients("sweet", [{ ingredient: "Sugared Rim", amt: 4 },
    { ingredient: "Cherries", amt: 5 }, { ingredient: "Candied Grapefruit", amt: 3 }
]);

var savory = new ingredients("savory", [{ ingredient: "Balsamic Cherry Shrub", amt: 4 },
    { ingredient: "Rosemary", amt: 5 }, { ingredient: "Cured Pork", amt: 3 }
]);

var strong = new ingredients("strong", [{ ingredient: "Double Shot Vodka", amt: 4 },
    { ingredient: "Double Shot Gin", amt: 5 }, { ingredient: "Double Shot Rum", amt: 3 }
]);

var sour = new ingredients("sour", [{ ingredient: "Lemon Juice", amt: 4 },
    { ingredient: "Grapefruit Juice", amt: 5 }, { ingredient: "Lime Juice", amt: 3 }
]);

