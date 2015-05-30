define(["login/login", "signup/signup", "footer/footer", "dashboard/dashboard", "account/account"], function(Login, SignUp, Footer, Dashboard, Account){

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
		},
		"footer" : {
			module : function(){
				return new Footer();
			}
		},
		"dashboard" : {
			module : function(){
				return new Dashboard();
			}
		},
		"account" : {
			module : function(){
				return new Account();
			}
		}
	});
});