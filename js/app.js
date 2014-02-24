$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var firstView = new FirstView($("#firstView"));
	var firstViewController = new FirstViewController(firstView,model);

	var selectorView = new SelectorView($("#selectorView"),model);
	var selectorViewController = new SelectorViewController(firstView,model);

	var exampleView = new ExampleView($("#exampleView"),model);
   	var exampleViewController = new ExampleViewController(exampleView,model);
});