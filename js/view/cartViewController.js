//ExampleViewController Object constructor
var CartViewController = function(view, main, model ) {
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmBtn.click(function(){
		main.switchView('dinnerConfirmationView');
		main.showView('overviewView');
		main.updateConfirmation();
		
	}); 

}
