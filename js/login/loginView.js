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
		
		var loginContainer = "<div id='loginContainer'>";
		this.userName = '<input type="text" id = "usernameinput" name="login" value="" placeholder="Email ID"/>';
		var loginDiv = '<div id="usernamediv" class="inputDiv">'+ this.userName + '</div>';
		
		this.password = '<input type="password" id="passwordinput" name="password" value="" placeholder="Password"/>';
		var passwordDiv = '<div id="passworddiv" class="inputDiv">'+ this.password +'</div>';
		
		this.loginButton = "<input type='button' name='submitButton' id='submitButton' class='buttonClass' value='LOGIN'/>";
		var loginButtonDiv = "<div id='loginButtonDiv' class=' buttonDiv'>"+ this.loginButton +"</div>";
		
		container.append( loginContainer + loginDiv + passwordDiv + loginButtonDiv + divClose );
		this.registerEvents(controller);
	};
};

return LoginView;

});
