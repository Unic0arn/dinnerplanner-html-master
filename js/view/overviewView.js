var OverviewView = function(container,main, model){
	this.container = container;
    	//$(container).hide();
    this.btn =  $('#fullRecipeBtn');
    	
    this.displayDishes = function(dishes){
		console.log(dishes.length);
		$("#menuList").html(""); //Empty dishList.
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
            
            $('#menuList').append(div);

			console.log(dish);
		}
	}    	
}
