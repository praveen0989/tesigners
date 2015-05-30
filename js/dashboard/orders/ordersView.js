define([], function(){
	var OrdersView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.loginloginButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	this.registerEvents = function(controller){
		var that = this;
		$("#submitButton").click(function(){
			controller.onLogin($("#usernameinput").val(), $("#passwordinput").val());
		});
	};
	
	
	this.render = function(container){
		
		container.append("Orders");
		this.registerEvents(controller);
	};
};

return OrdersView;

});
