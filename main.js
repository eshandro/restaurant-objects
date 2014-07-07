$(document).on('ready', function() {
  


});

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
};

var burrito = new FoodItem("burrito", 1000, false, false, true);

var tofu = new FoodItem("tofu", 400, true, true, true);

var indianTaco = new FoodItem("indianTaco", 2000, false, false, false);

console.log(burrito.toString(), tofu.toString(), indianTaco.toString());

var Drink =function(name, description, price, ingredients){

		this['name'] =name;
		this.description= description;
		this.price=price;
		this.ingredients=ingredients;

		this.toString=function(){

			var itemList = "";
			for(key in this){
				if(typeof this[key] !== "function" && typeof this[key] !== "object"){

					itemList += key + " = " + this[key] + "\n";

				}
			}
			return itemList;
		}

};

var Plate =function(name, description, price, ingredients){

		this.name = name;
		this.description = description;
		this.price = price;
		this.ingredients = ingredients;
};

var Order = function(plates){

		this.plates = plates;
};

var Menu = function(plates){

		this.plates = plates;
};

var Restaurant = function(name, description, menu){

		this.name= name;
		this.description = description;
		this.menu = menu;
};

var Customer = function(dietaryPreference){

	this.dietaryPreferance = dietaryPreference;

}

