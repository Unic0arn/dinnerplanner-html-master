//ExampleView Object constructor
var CartView = function (container,main, model) {
	this.container = container;
	var dtb = $('#selectedDishesBody');
	var dishes;	
	container.hide();
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmBtn = container.find("#confirmMenuBtn");
	
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView 
	
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
	model.addObserver(this);
	
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
	}
}
 
