define([], function(){
	var DashboardView = function(controller, model){
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
		
		var loginContainer = $("#loginContainer");
		container.html("Order Dashboard");
		
		var settings = "<span class='glyphicon glyphicon-wrench icon'></span>";
		var logout = "<span class='glyphicon glyphicon-log-out icon'></span>";
		loginContainer.html(settings + logout);
		
		this.registerEvents(controller);
	};
};

return DashboardView;

});
