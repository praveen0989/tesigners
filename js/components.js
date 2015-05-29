define(["login/login", "signup/signup"], function(Login, SignUp){

	return({
		"login" : {
			module : function(){
				return new Login();
			}
		},
		"signup":{
			module : function(){
				return new SignUp();
			}
		}
	});
});