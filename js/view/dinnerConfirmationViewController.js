var DinnerConfirmationViewController = function(view,main, model ) {
	view.backBtn.click(function(){
		main.hideView('dinnerConfirmationView');
		main.showView('selectorView');
		main.showView('cartView');

		//Changes header back. Maybe not the optimal solution?
		$('#dishConfirmationHeaderText').html("<h2>My Dinner for " + model.getNumberOfGuests() + " people </h2>");
	});
}
