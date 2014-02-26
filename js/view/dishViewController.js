var DishViewController = function(view, model ) {
        
    $('#dishList').on('click', ".dish", function( event ){
        $('#selectorView').hide();
        $('#dishView').show();
        console.log(this.id    );
        view.dishId = this.id;
        view.displayDish(this.id);
    });
    
}
