var MainController = function(model ) {
	
	
	var selectedDishId;
	var views = [];
		//And create the needed controllers and views
	var firstView = new FirstView($("#firstView"));
	var firstViewController = new FirstViewController(firstView,this, model);
	views['firstView'] = firstView;
	
	
	var selectorView = new SelectorView($("#selectorView"),this, model);
	var selectorViewController = new SelectorViewController(selectorView,this, model);
	views['selectorView'] = selectorView;
	
	var cartView = new CartView($("#cartView"),this, model);
   	var cartViewController = new CartViewController(cartView,this, model);
	views['cartView'] = cartView;
	
	var dishView = new DishView($("#dishView"),this, model);
   	var dishViewController = new DishViewController(dishView,this, model);
	views['dishView'] = dishView;
	
    var dinnerConfirmationView = new DinnerConfirmationView($('#dinnerConfirmationView'), this, model);
    var dinnerConfirmationViewController = new DinnerConfirmationViewController(dinnerConfirmationView, this, model);
	views['dinnerConfirmationView'] = dinnerConfirmationView;
	
	var overviewView = new OverviewView($('#overviewView'), this, model);
    var overviewViewController = new OverviewViewController(overviewView, this, model);
	views['overviewView'] = overviewView;

	var fullRecipeView = new FullRecipeView($('#fullRecipeView'), this, model);
    var fullRecipeViewController = new FullRecipeViewController(fullRecipeView, this, model);
	views['fullRecipeView'] = fullRecipeView;	
	
	
	this.getSelectedDishId = function() {return selectedDishId;};

	this.switchView = function(newView){
		for(var key in views){
			views[key].container.hide();
		}
		views[newView].container.show();
	}
	
	
	
	this.showView = function(view){
		console.log(view);
		views[view].container.show();
	}
	this.hideView = function(view){
		console.log(view);
		views[view].container.hide();
	}
	
	this.updateDishView = function(dishId){
	//Update Dish view
		selectedDishId = dishId;
		dishView.displayDish(selectedDishId);
	}
}
