
define([], function(){
	var LoginController = function(app){
	
		this.app = app;
		
		this.onLogin = function(){
			//Validate User Inputs
			this.app.loadComponent("changepassword");
		};
	};
	return LoginController;
});
