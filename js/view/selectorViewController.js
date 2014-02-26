var SelectorViewController = function(view, model ) {

	view.typeSelect.change(function(){
		view.filter(document.getElementById("typeSelect").value);
	});

	view.searchButton.click(function(){
		view.search(document.getElementById("dishSearchString").value);
	});

        
/*
    $('#dish') //Jquery $ = jQuery
    document.getElementById('dish'); //vanilla javascript
*/
}
