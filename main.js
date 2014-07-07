$(document).on('ready', function() {
  


});
//creating a new array to push food items
var foodItemList = [];

// create array for plates
var platesList = [];

// create array for drinks
var drinksList = [];


// Constructor for food items
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){

		this['name'] = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
		this.toString=function(){

			var itemList = "";
			for(key in this){
				if(typeof this[key] !== "function"){
					itemList += key + " = " + this[key] + "\n";
				}
			}
			return itemList;
		}
		foodItemList.push(this);
};

// Make food items per task
var burrito = new FoodItem("burrito", 1000, false, false, true);

var tofu = new FoodItem("tofu", 400, true, true, true);

var indianTaco = new FoodItem("indianTaco", 2000, false, false, false);

var margMix = new FoodItem('Margarita Mix', 200, true, true, false);

var tequilla = new FoodItem('Tequilla', 100, true, true, true);

var guac = new FoodItem('Guac', 500, true, true, true);

var chips = new FoodItem('chips', 300, true, true, true);

// Print the 3 food items per task
console.log(burrito.toString(), tofu.toString(), indianTaco.toString());

// new Drink constructor
var Drink =function(name, description, price, ingredients){

		this['name'] =name;
		this.description= description;
		this.price=price;
		this.ingredients=ingredients;

		this.toString=function(){

			var itemList = "";
			for(key in this){
				if(typeof this[key] !== "function") {

					itemList += key + " = " + this[key] + "\n";

				}
			}
		return itemList;
	}

};

// new Plate constructor
var Plate =function(name, description, price, ingredients){

		this.name = name;
		this.description = description;
		this.price = price;
		this.ingredients = ingredients;

		this.toString = function() {
			var itemList = '';
			for(key in this) {
				if(typeof this[key] !== "function"){
					itemList += key + ' = ' + this[key] + '\n';
				}
			}
			return itemList;
		}
		this.isVegan = function () {
			for(i=0; i < ingredients.length; i++) {
				if(!ingredients[i].vegan) {
					return false;
				}
			}
			return true;
		}
		this.isGlutenFree = function() {
			for(i=0; i < ingredients.length; i++) {
				if(!ingredients[i].glutenFree) {
					return false;
				}
			}
			return true;			
		}
		this.isCitrusFree = function() {
			for(i=0; i < ingredients.length; i++) {
				if(!ingredients[i].citrusFree) {
					return false;
				}
			}
			return true;
		}
		platesList.push(this);
};

// new Order constructor
var Order = function(plates){

		this.plates = plates;
		this.toString = function() {
			var itemList = '';
			for(i=0; i < plates.length; i++) {
				itemList += plates[i] + '\n';
			}
			return itemList;
		}

};

// new Menu constructor
var Menu = function(plates){

		this.plates = plates;
		this.toString = function() {
		var itemList = '';
		for(i=0; i < plates.length; i++) {
			itemList += plates[i] + '\n';
		}
		return itemList;
	}
};

var Restaurant = function(name, description, menu){

		this.name= name;
		this.description = description;
		this.menu = menu;
		this.toString = function() {
			return name + '\n' + description + '\n' + menu.toString();
		}
};

var Customer = function(dietaryPreference){

	this.dietaryPreferance = dietaryPreference;
	this.toString = function() {
		return this.dietaryPreference;
	}

}





