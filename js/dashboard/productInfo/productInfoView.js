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
			
			
			var tShirtType = $('#shirtType').val();
			var fabricType = $('#fabricType').val();
			var sleeveType = $('#tshirtSleevesType').val();
			var gsmType = $('#tshirtGsmType').val();
			
			var tShirtId = $("#shirtType")[0]["selectedOptions"][0].id;
			var fabricId = $('#fabricType')[0]["selectedOptions"][0].id;
			var sleeveId = $('#tshirtSleevesType')[0]["selectedOptions"][0].id;
			var gsmId = $('#tshirtGsmType')[0]["selectedOptions"][0].id;
			var categoryId = $("#categorySelect")[0]["selectedOptions"][0].id;
			
			that.model.supportedIds.push(tShirtId + fabricId + sleeveId + gsmId + categoryId);
			var obj = {
						"T Shirt type" : tShirtType,
						"Fabric Type" : fabricType,
						"Sleeve" : sleeveType,
						"GSM" : gsmType
					  };
						
						
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
			
			var categorySelectDiv = "<div id='categorySelectDiv'><span><select id='categorySelect' name='categorySelect'>";
			categorySelectDiv += populateOptions(this.model.categories) + "</div>";
			
			var subcategoryDiv = "<div id='categorySelectDiv'>";
			
			var tShirtCategories = "<span> <select name='shirtType' id='shirtType'>";
			tShirtCategories+= populateOptions(this.model.tShirtCategories);
			
			var tShirtFabricsCategories = "<span> <select name='fabricType' id='fabricType'>";
			tShirtFabricsCategories+= populateOptions(this.model.tshirtFabrics);
			
			var tshirtSleevesCategories = "<span> <select name='tshirtSleevesType' id='tshirtSleevesType'>";
			tshirtSleevesCategories+= populateOptions(this.model.tshirtSleeves);
			
			var tshirtGsmCategories = "<span> <select name='tshirtGsmType' id='tshirtGsmType'>";
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
                loadonce: false,
                sortname: 'T-Shirt Type',
                sortorder: "asc", 
                height: "auto", //210,
                width:600,
                viewrecords: true
            });
			
			this.registerEvents(controller);
			this.isRendered = true;
		}
		
		$("#productDiv").removeClass("dashboardItemHidden");
		$("#productDiv").addClass("dashboardItemVisible");
	};
};

return ProductInfoView;

});
