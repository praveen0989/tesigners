define(["login/login"], function(Login){

	return({
		"login" : {
			module : function(){
				return new Login();
			}
		}
	});
});