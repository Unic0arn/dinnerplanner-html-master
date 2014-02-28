var fullRecipeView = function(container,main, model){
	this.container = container;
    	$(container).hide();

    	//Deklarera i MainView
    	

    	//Vi vill ju ha getFullMenu som i Cart...

    	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(model.getTotalMenuPrice());

		dishes = model.getFullMenu();
		dtb.html("")
		for(var i=0; i< dishes.length; i++){
			var tr = document.createElement('tr');
			var td1 = document.createElement('td');
		    td1.innerHTML = dishes[i].name;
			td1.id = "td1";
		    var td2 = document.createElement('td');
			td2.id = "td2";
		    td2.innerHTML = model.getDishPrice(dishes[i].id);

  			tr.appendChild(td1);tr.appendChild(td2);
		    dtb.append(tr);
		}

		//Fast visa det som i displayDish....

	this.displayDish = function(dishId){
        	dish = model.getDish(dishId);
		console.log("This is the dish we are getting from id" + dishId + " : " + dish);
		var dishDesc = $('#dishDesc');
		dishDesc.html(""); //Clear earlier description.
		dishDesc.append("<h2>" + dish.name + "</div>");
		dishDesc.append("<img src='images/"+dish.image+"'/>");
		dishDesc.append("<p>" + dish.description + "</p>");

		dishDesc.append("<button class='btn' id='backBtn'>Back</button>");
		this.backBtn = $('#backBtn');

		var tb = $("#ingredientBody");
		tb.html(""); //Clear earlier ingredients.
		ingredients = dish.ingredients;
		
		for(var i=0; i< ingredients.length; i++){
			ingredient = ingredients[i];
			var tr = document.createElement('tr');
	
		    var td1 = document.createElement('td');
		    td1.innerHTML = ingredient.quantity;
		    var td2 = document.createElement('td');
		    td2.innerHTML = ingredient.unit;
		    var td3 = document.createElement('td');
		    td3.innerHTML = ingredient.name;
		    var td4 = document.createElement('td');
		    td4.innerHTML = ingredient.price;

		    tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
		    tb.append(tr);
		}
		

		};

	};

//	$(container).hide();
	
	
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



