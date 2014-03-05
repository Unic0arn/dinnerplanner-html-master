var SelectorView = function(container, main,model){
	this.container = container;
	$(container).hide();
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var dishList = container.find("#dishList");
	

	var searchString = "";
	var filter = "starter";
	var dishes;
	this.typeSelect = container.find("#typeSelect");
	this.searchButton = container.find("#searchButton");


    	this.search = function(newString){
		searchString = newString;
		console.log(searchString);
		dishes = model.getAllDishes(filter, searchString);
		this.displayDishes();
	}

	this.filter = function(newFilter){
		filter = newFilter;
		console.log(filter);
		dishes = model.getAllDishes(filter, searchString);
		this.displayDishes();
	}


	this.displayDishes = function(){
		console.log(dishes.length);
		$("#dishList").html(""); //Empty dishList.
		for(var i=0; i < dishes.length; i++){
			var dish = dishes[i];


			var div = $(document.createElement('div'));
			div.addClass("dish");
            div.attr('id',dish.id);
            
			var img = $(document.createElement('img'));
			img.attr('src', "images/" + dish.image);
			img.addClass("dishImage");
            
			div.append(img);           
			div.append("<h3>" + dish.name + "</h3>");
			div.append("<p>" + dish.description + "</p>");
            
            $('#dishList').append(div);

			console.log(dish);
		}

	}

/*
	//Set the inital values of the components
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice());
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	/*model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(model.getTotalMenuPrice());
	}*/
}


