define([], function(){
	var AccountView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.loginButton;
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
		
		
		
		container.append( "Create Account" );
		this.registerEvents(controller);
	};
};

return AccountView;

});
