var SelectorViewController = function(view, main, model ) {

	view.typeSelect.change(function(){
		view.filter(document.getElementById("typeSelect").value);
	});

	view.searchButton.click(function(){
		view.search(document.getElementById("dishSearchString").value);
	});

           $('#dishList').on('click', ".dish", function( event ){
		$('#selectorView').hide();
		$('#dishView').show();
		console.log(this.id    );

		main.updateDishView(this.id);
	 
    	});
/*
    $('#dish') //Jquery $ = jQuery
    document.getElementById('dish'); //vanilla javascript
*/
}
