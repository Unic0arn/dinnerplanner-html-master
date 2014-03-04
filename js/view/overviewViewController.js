var OverviewViewController = function(view,main, model ) {
	
	
	this.update = function(){
		var dishes = model.getFullMenu();
			view.displayDishes(dishes);
	
	}
	this.update();
	view.btn.click(function(){
		main.hideView('overviewView');
		main.showView('fullRecipeView');
	});
	
	
}
