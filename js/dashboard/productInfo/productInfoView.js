define([], function(){
	var ProductInfoView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.loginloginButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	this.isRendered = false;
	
	this.registerEvents = function(controller){
		var that = this;
		$("#submitButton").click(function(){
			controller.onLogin($("#usernameinput").val(), $("#passwordinput").val());
		});
	};
	
	var populateOptions = function(array){
		var i = 0;
		var div = "";
		for( i = 0; i < array.length; i++){
			var category = array[i];
			div = div + "<option id=" +category.id +">"+ category.name +"</option>";
		}
		div = div + "</select></span>";
		return div;
	};
	
	
	this.render = function(container){
		
		if(!this.isRendered){
			var divClose = "</div>";
			
			var categorySelectDiv = "<div id='categorySelectDiv'><span><select name='categorySelect'>";
			categorySelectDiv += populateOptions(this.model.categories) + "</div>";
			
			var subcategoryDiv = "<div id='categorySelectDiv'>";
			
			var tShirtCategories = "<span> <select name='shirtType'>";
			tShirtCategories+= populateOptions(this.model.tShirtCategories);
			
			var tShirtFabricsCategories = "<span> <select name='fabricType'>";
			tShirtFabricsCategories+= populateOptions(this.model.tshirtFabrics);
			
			var tshirtSleevesCategories = "<span> <select name='tshirtSleevesType'>";
			tshirtSleevesCategories+= populateOptions(this.model.tshirtSleeves);
			
			var tshirtGsmCategories = "<span> <select name='tshirtGsmType'>";
			tshirtGsmCategories+= populateOptions(this.model.tshirtGsm);
			
			var addButton = "<span><button name='addButton' id='addButton' type='button'>Add</button></span>";
			
			
			
			
			
			container.append( categorySelectDiv + divClose + subcategoryDiv + tShirtCategories + tShirtFabricsCategories + tshirtSleevesCategories + tshirtGsmCategories + addButton + divClose);
			this.registerEvents(controller);
		}
		
		$("#productDiv").removeClass("dashboardItemHidden");
		$("#productDiv").addClass("dashboardItemVisible");
	};
};

return ProductInfoView;

});
