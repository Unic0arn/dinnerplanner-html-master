var DishView = function(container, model){
	this.container = container;
    $(container).hide();
    

	this.displayDish = function(dishId){
        	dish = model.getDish(dishId);

	var dishDesc = $('#dishDesc');


	dishDesc.append("<h2>" + dish.name + "</div>");
	dishDesc.append("<img src='images/"+dish.image+"'/>");
	dishDesc.append("<p>" + dish.description + "</p>");

		var tb = $("#ingredientBody");
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
	}

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
}



