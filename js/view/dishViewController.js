var DishViewController = function(view,main, model ) {
  

    $('#dishView').on('click', "#backBtn", function(){
		$('#selectorView').show();
        $('#dishView').hide();

    });	
	$('#dishView').on('click', '#ConfirmDishBtn', function(){
		
		//alert(main.selectedDishId);
		model.addDishToMenu(main.getSelectedDishId());
	});


}
