define([], function(){
	var LoginView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.loginButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	this.registerEvents = function(controller){
		$("#submitButton").click(function(){
			controller.onLogin();
		});
	};
	
	
	this.render = function(container){
		
		var divClose = "</div>";
		
		this.userName = '<input type="text" id = "usernameinput" name="login" value="" placeholder="Email or UserID"/>';
		var loginDiv = '<div id="usernamediv" class="col-md-2">'+ this.userName + '</div>';
		
		this.password = '<input type="password" id="passwordinput" name="password" value="" placeholder="Password"/>';
		var passwordDiv = '<div id="passworddiv" class="col-md-2">'+ this.password +'</div>';
		
		this.loginButton = "<input type='button' name='submitButton' id='submitButton' value='LOGIN'/>";
		var loginButtonDiv = "<div id='loginButtonDiv' class='col-md-2'>"+ this.loginButton +"</div>";
		
		container.append( loginDiv + passwordDiv + loginButtonDiv );
		this.registerEvents(controller);
	};
};

return LoginView;

});
