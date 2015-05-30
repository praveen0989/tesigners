define([], function(){
	var FooterView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.footerButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	this.registerEvents = function(controller){
		$("#submitButton").click(function(){
			controller.onfooter();
		});
	};
	
	
	this.render = function(container){
		
		var rowContainer = "<div class='container'>";
		var row = "<div class='row'>";
		var contactUsDiv = "<div id='contactus' class='col-md-3'><span class='glyphicon glyphicon-phone-alt'></span>Contact Us</div>";
		var socialDiv = "<div id='socialDiv' class='col-md-3'><span class='glyphicon glyphicon-user'></span>Social</div>";
		var mobileAppDiv = "<div id='mobileAppDiv' class='col-md-3'><span class='glyphicon glyphicon-phone'></span>Mobile App</div>";
		var siteMapDiv = "<div id='siteMapDiv' class='col-md-3'><span class='glyphicon glyphicon-map-marker'></span>Site Map</div>";
		var divClose = "</div>";
		container.append(rowContainer + row + contactUsDiv + socialDiv + mobileAppDiv + siteMapDiv + divClose + divClose);
		this.registerEvents(controller);
	};
};

return FooterView;

});
