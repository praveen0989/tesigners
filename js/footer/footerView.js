define([], function(){
	var FooterView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.footerButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	this.registerEvents = function(controller){
		$("#submitButton").click(function(){
			controller.onfooter();
		});
	};
	
	
	this.render = function(container){
		
		container.append("Footer");
		this.registerEvents(controller);
	};
};

return FooterView;

});
