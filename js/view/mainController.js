var MainController = function(model ) {
	
	
	var selectedDishId;

		//And create the needed controllers and views
	var firstView = new FirstView($("#firstView"));
	var firstViewController = new FirstViewController(firstView,this, model);

	var selectorView = new SelectorView($("#selectorView"),this, model);
	var selectorViewController = new SelectorViewController(selectorView,this, model);

	var cartView = new CartView($("#cartView"),this, model);
   	var cartViewController = new CartViewController(cartView,this, model);

	var dishView = new DishView($("#dishView"),this, model);
   	var dishViewController = new DishViewController(dishView,this, model);

	this.getSelectedDishId = function() {return selectedDishId;};

	
	this.updateDishView = function(dishId){
	//Update Dish view
		selectedDishId = dishId;
		dishView.displayDish(selectedDishId);
	}
}
