$(document).ready(function(){
	"use strict";

	console.log("creating restaurant list");
	
	var restaurantContainer = $("#restaurantList");
	var firstRestaurant = $(restaurantContainer).children().first();

	console.log(restaurant);

	for (var i = 0; i<3; i++){
		$(firstRestaurant).clone().appendTo(restaurantContainer);
	}

	$(firstRestaurant).

});
	