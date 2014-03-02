var FullRecipeView = function(container,main, model){
	this.container = container;
    	//$(container).hide();

    	//this.btn =  $('testBtn');

    	dishes = model.getFullMenu();

    	// I denna container bör skapas en container per dish.
    	var fullRecipeView = container.find("#fullRecipeView");

    	//Vi vill ju ha getFullMenu som i Cart...
    	fullRecipeView.innerHTML("TEEEEEEEEEEEEST!");


		//Fast visa det som i displayDish....



	};
