var SelectorView = function(container, model){
	this.container = container;
//	$(container).hide();
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var dishList = container.find("#dishList");
	var searchString = "";
	var filter = "starter";
	var dishes;
	this.typeSelect = container.find("#typeSelect");
	this.searchButton = container.find("#searchButton");
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView +

	this.search =  function(newString){
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
		$("#dishList").html("");
		for(var i=0; i< dishes.length; i++){
			var dish = dishes[i];


			var div = $(document.createElement('div'));
			div.addClass("dish");

			var img = $(document.createElement('img'));
			img.attr('src', "images/" + dish.image);
			img.addClass("dishImage");
			img.appendTo(div);

			div.append("<h3>" + dish.name + "</h3>");
			div.append("<p>" + dish.description + "</p>");

			div.appendTo("#dishList");




			console.log(dish);
		}

	}

	this.searchAndView = function(){
		this.search();
		this.displayDishes();
		console.log(searchString);
	}

/*
	//div we just store in temporary variable because we won't need it later
	var div = $("<div>");
	//we set the constant text
	div.html("Total menu price ");
	//and we add the text-primary class to make it blue
	div.addClass("text-primary");
	//total price we store in object variable (using this) so we can access it later
	this.totalPrice = $("<span>");
	//we set the id of the total price span
	this.totalPrice.attr("id","totalPrice");
	//we add total price span to the div
	div.append(this.totalPrice);
	//finally we add the div to the view container
	container.append(div);
	
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



