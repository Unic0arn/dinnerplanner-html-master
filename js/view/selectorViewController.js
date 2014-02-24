var SelectorViewController = function(view, model ) {


	view.search();
	view.displayDishes();
	view.typeSelect.change(function(){
		view.filter(document.getElementById("typeSelect").value);
	});

	view.searchButton.click(function(){
		view.search(document.getElementById("dishSearchString").value);
	});

}
