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
		div = div + "</select></div>";
		return div;
	};


	this.render = function(container){

		if(!this.isRendered){
			var divClose = "</div>";

			var categorySelectDiv = "<div class='form-horizontal'><div id='categorySelectDiv' class='form-group'><div class='col-md-2'><label name='categorySelectLabel'>Please select your category</label></div><div class='col-md-2'><select name='categorySelect' class='form-control'>";
			categorySelectDiv += populateOptions(this.model.categories) + "</div></div>";

			var subcategoryDiv = "<div class='form-horizontal'><div id='subCategorySelectDiv' class='form-group'>";
			var subcategoryLabel = "<div class='col-md-2'><label name='categorySelectLabel'>Please select your sub-category</label></div>";

			var tShirtCategories = "<div class='col-md-2'> <select name='shirtType' class='form-control'>";
			tShirtCategories+= populateOptions(this.model.tShirtCategories);

			var tShirtFabricsCategories = "<div class='col-md-2'> <select name='fabricType' class='form-control'>";
			tShirtFabricsCategories+= populateOptions(this.model.tshirtFabrics);

			var tshirtSleevesCategories = "<div class='col-md-2'> <select name='tshirtSleevesType' class='form-control'>";
			tshirtSleevesCategories+= populateOptions(this.model.tshirtSleeves);

			var tshirtGsmCategories = "<div class='col-md-2'> <select name='tshirtGsmType' class='form-control'>";
			tshirtGsmCategories+= populateOptions(this.model.tshirtGsm);

			var addButton = "<div class='col-md-1'><button name='addButton' id='addButton' type='button' class='form-control btn btn-primary'>Add</button></div></div>	";





			container.append( categorySelectDiv + divClose + subcategoryDiv + subcategoryLabel + tShirtCategories + tShirtFabricsCategories + tshirtSleevesCategories + tshirtGsmCategories + addButton + divClose);
			this.registerEvents(controller);
		}

		$("#productDiv").removeClass("dashboardItemHidden");
		$("#productDiv").addClass("dashboardItemVisible");
	};
};

return ProductInfoView;

});
