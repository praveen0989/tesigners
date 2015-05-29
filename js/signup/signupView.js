define([], function(){
	var SignUpView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.signupButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	this.registerEvents = function(controller){
		$("#submitButton").click(function(){
			controller.onsignup();
		});
	};
	
	
	this.render = function(container){
		
		var rowDiv = "<div class ='row'>";
		
		var signupContainer = "<div id='signupContainer' class='col-md-3 col-xs-5 col-sm-4'>";
		
		var signupTitleDiv = "<div id = 'signuptitle'>SIGNUP</div>";
		var divClose = "</div>";
		
		this.userName = '<input type="text" id = "usernameinput" name="signup" value="" placeholder="Email or UserID"/>';
		var signupDiv = '<div id="usernamediv">'+ this.userName + '</div>';
		
		this. phoneNumber = '<input type="text" id = "phoneNumberinput" name="phoneNumber" value="" placeholder="Phone Number"/>';
		var  phoneNumberDiv = "<div id=' phoneNumberDiv'>"+ this.phoneNumber +"</div>";
		
		this.password = '<input type="password" id="passwordinput" name="password" value="" placeholder="Password"/>';
		var passwordDiv = '<div id="passworddiv">'+ this.password +'</div>';
		
		/*this.confirmPassword = '<input type="confirmPassword" id="confirmPasswordinput" name="confirmPassword" value="" placeholder="confirmPassword"/>';
		var confirmPasswordDiv = '<div id="confirmPassworddiv">'+ this.confirmPassword +'</div>';*/
		
		this.signupButton = "<input type='button' name='submitButton' id='submitButton' value='REGISTER'/>";
		var signupButtonDiv = "<div id='signupButtonDiv'>"+ this.signupButton +"</div>";
		
		container.append(  rowDiv + signupContainer + signupTitleDiv + signupDiv + phoneNumberDiv + passwordDiv /*+ confirmPasswordDiv */+ signupButtonDiv + divClose + divClose);
		this.registerEvents(controller);
	};
};

return SignUpView;

});
