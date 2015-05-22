define([], function(){
	var LoginView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.loginButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this.troubleSigningIn;
	
	this.registerEvents = function(controller){
		$("#submitButton").click(function(){
			controller.onLogin();
		});
	};
	
	
	this.render = function(container){
		
		var loginTitleDiv = "<div id = 'logintitle'>LOGIN</div>";
		var loginContainer = "<div id='loginContainer'>";
		var divClose = "</div>";
		
		this.userName = '<input type="text" id = "usernameinput" name="login" value="" placeholder="Email or UserID"/>';
		var loginDiv = '<div id="usernamediv">'+ this.userName + '</div>';
		
		this.password = '<input type="password" id="passwordinput" name="password" value="" placeholder="Password"/>';
		var passwordDiv = '<div id="passworddiv">'+ this.password +'</div>';
		
		this.keepMeLoggedIn = "<input type='checkbox' id ='keepMeLoggedIn' name='loggedin' value='yes'> Keep me logged in.</input>";
		var keepMeLoggedInDiv = "<div id='keepMeLoggedInDiv'>"+ this.keepMeLoggedIn  +"</div>";
		
		this.loginButton = "<input type='button' name='submitButton' id='submitButton' value='LOGIN'/>";
		var loginButtonDiv = "<div id='loginButtonDiv'>"+ this.loginButton +"</div>";
		
		this.troubleSigningIn = "<a href='#' id='troubleSigningIn'>Having trouble signing in?</a>";
		var troubleSigningInDiv = "<div id='troubleSigningInDiv'>"+ this.troubleSigningIn +"</div>";
		
		container.append(loginTitleDiv);
		container.append(loginContainer + loginDiv + passwordDiv + keepMeLoggedInDiv + loginButtonDiv + troubleSigningInDiv + divClose);
		this.registerEvents(controller);
	};
};

return LoginView;

});
