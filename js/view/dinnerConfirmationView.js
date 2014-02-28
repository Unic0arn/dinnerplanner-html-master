var DinnerConfirmationView = function(container,main, model){
	this.container = container;
    $(container).show();
    
    this.backBtn = $('#backToSelectorBtn');
    $('#overviewHeaderText').html("<h2>My Dinner for " + model.getNumberOfGuests() + " people </h2>");
	

}



