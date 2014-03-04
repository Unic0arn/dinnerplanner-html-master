var FullRecipeView = function(container,main, model){
	this.container = container;
    	$(container).hide();

    	this.btn =  $('fullRecipeBtn');







this.displayDishes = function(dishes){
		console.log(dishes.length);
		$("#recipeList").html(""); //Empty recipeList.
		for(var i=0; i < dishes.length; i++){
			var dish = dishes[i];


			var div_row 	= $(document.createElement('div'));
			var div 		= $(document.createElement('div'));
			var div_img 	= $(document.createElement('div'));
			var div_right 	= $(document.createElement('div'));
			div_row.addClass("row");
			div.addClass("col-md-8");
			div_img.addClass("dishImageRecipe");
			div_right.addClass("col-md-4");


            div.attr('id',dish.id);
            div_right.attr('id',"preparation");
            
			var img = $(document.createElement('img'));
			img.attr('src', "images/" + dish.image);
			img.addClass("dishImage");

            div_img.append(img);
            div.append(div_img);

			div.append("<h3>" + dish.name + "</h3>");
			div.append("<p>" + dish.description + "</p>");

			div_row.append(div);



			div_right.html("<h2>Preparations</h2>");
			div_right.append("<p>" + dish.description + "</p>");
			div_row.append(div_right);

            $('#recipeList').append(div_row);

			console.log(dish);
		}
	}    	



	};
