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
			
			this.registerEvents(controller);
		}
		
		$("#productDiv").removeClass("dashboardItemHidden");
		$("#productDiv").addClass("dashboardItemVisible");
	};
};

return ProductInfoView;

});
