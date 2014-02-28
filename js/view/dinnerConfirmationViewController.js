var DinnerConfirmationViewController = function(view,main, model ) {
	view.backBtn.click(function(){
		main.hideView('dinnerConfirmationView');
		main.showView('selectorView');
		main.showView('cartView');
	});
}
