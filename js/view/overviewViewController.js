var OverviewViewController = function(view,main, model ) {
  
	view.btn.click(function(){
		main.hideView('overviewView');
		main.showView('fullRecipeView');
	});
}
