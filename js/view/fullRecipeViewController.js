var FullRecipeViewController = function(view,main, model ) {
  
		this.update = function(){
		var dishes = model.getFullMenu();
			view.displayDishes(dishes);
		}

	view.btn.click(function(){
		main.hideView('fullRecipeView');
		main.showView('selectorView');
	});


}
