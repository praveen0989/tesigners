
define([], function(){
	var SignUpController = function(app){
	
		this.app = app;
		
		this.onLogin = function(){
			//Validate User Inputs
			this.app.loadComponent("changepassword");
		};
	};
	return SignUpController;
});
