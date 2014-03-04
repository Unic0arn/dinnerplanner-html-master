var OverviewViewController = function(view,main, model ) {
	
	
	this.update = function(){
		var dishes = model.getFullMenu();
			view.displayDishes(dishes);
	}

	this.update();
	view.btn.click(function(){
		main.hideView('overviewView');
		main.showView('fullRecipeView');
		$('#dishConfirmationHeaderText').html("<h2>Dinner recipe for " + model.getNumberOfGuests() + " people </h2>");
		//Probably should not be here but...
		main.updateRecipe();
	});
	
	
}
