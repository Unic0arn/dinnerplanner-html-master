var DishView = function(container,main, model){
	this.container = container;
    	$(container).hide();
    	

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
		
		// Row for button and sum
		var tr_conf  = document.createElement('tr');
		tr_conf.id = "conf_row";		
		var td_cdbtn = document.createElement('td');
		td_cdbtn.colSpan = 3;
		var td_sum   = document.createElement('td');
		td_sum.innerHTML = model.getDishPrice(dishId);
		tr_conf.appendChild(td_cdbtn);
		tr_conf.appendChild(td_sum);
		
		tb.append(tr_conf); //append last row to table
		
		var cdbtn = document.createElement('button');

		//Confirm dish button
		cdbtn.className ="btn";
		cdbtn.id = "ConfirmDishBtn";
		cdbtn.innerHTML = "Confirm Dish";
		
			// Another way of creating the button (like #backBtn above):
				//tb.append("<button class='btn' id='ConfirmDishBtn'>Confirm Dish2</button>");
				//this.ConfirmDishBtn = $('#ConfirmDishBtn');
		
		td_cdbtn.appendChild(cdbtn);
		//tb.append(cdbtn);

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



