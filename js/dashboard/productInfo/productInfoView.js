define(["jqGrid"], function(JQGrid){
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
		$("#addButton").click(function(){
			
			var obj = {"T Shirt type" : "abc",
						"Fabric Type" : "def",
						"Sleeve" : "ghi",
						"GSM" : "nmm"};
						
						
			that.model.supportedEntities.push(obj);
			 $("#productsTable").jqGrid('setGridParam', { datatype: 'local', data: that.model.supportedEntities }).trigger('reloadGrid');
			
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
			container.append( categorySelectDiv + divClose + subcategoryDiv + tShirtCategories + tShirtFabricsCategories + tshirtSleevesCategories + tshirtGsmCategories + addButton + divClose);


			var tableDiv = "<div id='tableDiv'><table id='productsTable'></table></div>";
			container.append(tableDiv);


			$("#productsTable").jqGrid({
                datatype: "local",
                data: this.model.supportedEntities,
                colNames:['T Shirt type','Fabric type', 'Sleeve','GSM'],
                colModel:[
                    {name:'T Shirt type',index:'T-Shirt Type',width:100},
                    {name:'Fabric Type',index:'Fabric Type', width:100},
                    {name:'Sleeve',index:'Sleeve', width:100},
                    {name:'GSM',index:'GSM', width:100}
                ],
                rowNum:10,
                rowList:[3,6],
                loadonce: false,
                sortname: 'T-Shirt Type',
                sortorder: "asc", 
                height: "auto", //210,
                width:600,
                viewrecords: true
            });

			container.append( categorySelectDiv + divClose + subcategoryDiv + subcategoryLabel + tShirtCategories + tShirtFabricsCategories + tshirtSleevesCategories + tshirtGsmCategories + addButton + divClose);
			this.registerEvents(controller);
		}

		$("#productDiv").removeClass("dashboardItemHidden");
		$("#productDiv").addClass("dashboardItemVisible");
	};
};

return ProductInfoView;

});
