var FullRecipeViewController = function(view,main, model ) {
  
	view.btn.click(function(){
		main.hideView('fullRecipeView');
		main.showView('selectorView');
	});
}
