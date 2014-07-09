$(document).on('ready', function() {
  var container = $('<div class="container"></div>');
  var mainContent = $('<div class="main-content"></div>');
  var glutenRestrictions = $('<span class="diet-restriction"> Click Here for Gluten Free Options</span>');
  var citrusRestrictions = $('<span class="diet-restriction"> Click Here for Citrus Free Options</span>');
  var veganRestrictions = $('<span class="diet-restriction"> Click Here for Vegan Options</span>');


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
		};
		foodItemList.push(this);
};

// Make food items per task
var burrito = new FoodItem("burrito", 1000, false, false, true);

var indianTaco = new FoodItem("indianTaco", 2000, false, false, false);

var margMix = new FoodItem('Margarita Mix', 200, true, true, false);

var tequilla = new FoodItem('Tequilla', 100, true, true, true);

var guac = new FoodItem('Guac', 500, true, true, true);

var chips = new FoodItem('chips', 300, true, true, true);

var salsa = new FoodItem('salsa', 100, true, true, true);

// Print the 3 food items per task
// console.log(burrito.toString(), salsa.toString(), indianTaco.toString());

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
		};
		this.addElem = function() {
			return $('<div class="drink-item"></div>').text(name);

		};

		drinksList.push(this);

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
		};
		this.addElem = function(){
			return $('<div class="dish"></div>').html(name + ': ' + price + " dollars<br>" + description);
		};

		this.isVegan = function () {
			for(i=0; i < this.ingredients.length; i++) {
				if(!this.ingredients[i].vegan) {
					return false;
				}
			}
			return true;
		};

		this.isGlutenFree = function() {
			for(i=0; i < this.ingredients.length; i++) {
				if(!this.ingredients[i].glutenFree) {
					return false;
				}
			}
			return true;			
		};
		this.isCitrusFree = function() {
			for(i=0; i < this.ingredients.length; i++) {
				if(!this.ingredients[i].citrusFree) {
					return false;
				}
			}
			return true;
		};
		platesList.push(this);
};

// new Order constructor
var Order = function(plates){

		this.plates = plates;
		this.toString = function() {
			var itemList = '';
			for(i=0; i < this.plates.length; i++) {
				itemList += this.plates[i] + '\n';
			}
			return itemList;
		};
		this.addElem =function(){
			var completeOrder =$('<div class="order"></div>'); 
			for (i=0; i < this.plates.length; i++) {
				var item = $(plates[i].addElem());
				completeOrder.append(item);
			};
			return completeOrder;
		};
};

// new Menu constructor
var Menu = function(plates){
		this.plates = plates;
		this.toString = function() {
			var itemList = '';
			for(i=0; i < this.plates.length; i++) {
			itemList += this.plates[i] + '\n';
			}
		return itemList;
		};
		this.addElem=function(){
			var menuComplete = $('<div class="menu"></div>');
			for(i=0; i<plates.length; i++){
				var items = $(plates[i].addElem());
				menuComplete.append(items);
			}
			return menuComplete;
		};
};

var Restaurant = function(name, description, menu){
		this.name= name;
		this.description = description;
		this.menu = menu;
		this.toString = function() {
			return name + '\n' + description + '\n' + menu.toString();
		};
		this.addElem= function(){
			var restaurantComplete= $('<div class="restaurant"></div>');
			restaurantComplete.append('<h1>' + name + '</h1>' );
			restaurantComplete.append('<p>' + description +  '</p>');
			restaurantComplete.append($(this.menu.addElem()));
			return restaurantComplete;
		};
};

var Customer = function(dietaryPreference){
	this.dietaryPreferance = dietaryPreference;
	this.toString = function() {
		return this.dietaryPreference;
	}

}

// Create 2 plates and one drink
var burritoPlate = new Plate('Burrito and salsa', 'Burrito Yummy', 8, [burrito, salsa]);
var guacPlate = new Plate('Guac Plate', 'Guac and chips', 7, [guac, chips]);
var marg = new Drink("Marg", "Sweet!", 5, [margMix, tequilla]);
// Test order

var newOrder = new Order([burritoPlate, guacPlate]);

var menu = new Menu([burritoPlate, guacPlate]);

// Create Menu
var oldSchoolMexicanMenu = new Menu([platesList, drinksList]);

// Create Restaurant
var oldschoolMexican = new Restaurant('Old School Mexican', 'Awesome Mexican Grill', menu);




