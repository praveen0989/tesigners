define([], function(){
	var AccountView = function(controller, model){
	this.controller = controller;
	this.model = model;
	var currentPageId;
	
	this.registerEvents = function(controller){
		var that = this;

		$("#nextButton").click(function(){
			that.moveNext();
		});
		
		$("#nextbut2").click(function(){
			that.movePrevious();
		});
	};
	
	this.getStatesOptionsString = function(){
		var statesOptions = "<select class='form-control'>";
		
		for(var i = 0; i < this.model.states.length; i++){
		
			if(i === 16){
				statesOptions += "<option selected='selected'>" + this.model.states[i] + "</option>";
			}else {
				statesOptions += "<option>" + this.model.states[i] + "</option>";
			}
		}
		
		statesOptions = statesOptions + "</select>";
		return statesOptions;
	};
	
	this.createAccountsPage = function(page1Container){
		
		var mainDiv = "<div id='page1'>";
		var divClose = "</div>";
		var accountModel = this.model.accountDetails;
		
		var container = '<div class="container">';
		var header = '<h2>Account Information</h2>';
		var form = '<form  class="form-horizontal" role="form">';
		var formClose = '</form>';
		var businessName = '<div class="form-group"> <label class="control-label col-md-2" for="businessgrp">Business Group</label>  <div class="col-md-6"> <input class="form-control" id="businessgrp" value= '+accountModel.bName +'> </div></div>';
		var displayName = '<div class="form-group"> <label class="control-label col-md-2" for="displayName">Display Name</label>  <div class="col-md-6"> <input class="form-control" id="displayName" value= '+accountModel.dName +'> </div></div>';
		var vNum = '<div class="form-group"> <label class="control-label col-md-2" for="vNum">VAT or TIN Number</label>  <div class="col-md-6"> <input class="form-control" id="vNum" value= '+accountModel.vNum +'> </div></div>';
		var cDesc = '<div class="form-group"> <label class="control-label col-md-2" for="cDesc">Company Description</label>  <div class="col-md-6"> <input class="form-control" id="cDesc" value= '+accountModel.cDesc +'> </div></div>';
		var addr = '<div class="form-group"> <label class="control-label col-md-2" for="addr">Address</label>  <div class="col-md-6"> <input class="form-control" type="textarea"  id="addr" value= '+accountModel.addr +'> </div></div>';
		var pCode = '<div class="form-group"> <label class="control-label col-md-2" for="pCode">Pin Code</label>  <div class="col-md-6"> <input class="form-control" id="pCode" value= '+accountModel.pCode +'> </div></div>';
		var city = '<div class="form-group"> <label class="control-label col-md-2" for="city">City</label>  <div class="col-md-6"> <input class="form-control" id="city" value= '+accountModel.city +'> </div></div>';
		
		var state = '<div class="form-group"> <label class="control-label col-md-2" for="state">State</label>  <div class="col-md-6"> ';
		state += this.getStatesOptionsString();
		state = state + "</div></div>";
		
		
		var nextButton = '<div class="form-group"> <div class="col-md-3 col-md-push-7"> <button type="button" id ="nextButton" class="btn btn-primary wizardButton"> Next</button> </div></div>';
		page1Container.append(mainDiv + container + header + form + businessName + displayName + vNum + cDesc + addr + pCode + city + state + nextButton + formClose + divClose + divClose );
		
	};
	
	this.createBankingInfoPage = function(page2Container){
		page2Container.append("<div id='page2'> Page 2 <input type='button' id ='nextbut2' name ='but2'></div>");
	};
	
	this.createProductInfoPage = function(page3Container){
		page3Container.append("<div id='page3'> Page 3 <input type='button' id ='nextbut3' name ='but3'></div>");
	};
	
	this.moveNext = function(){
		
		if(currentPageId === "page1"){
			$("#page1").hide();
			$("#page3").hide();
			$("#page2").show();
			currentPageId = "page2";
			return;
		}
		
		if(currentPageId === "page2"){
			$("#page1").hide();
			$("#page2").hide();
			$("#page3").show();
			currentPageId = "page3";
			return;
		}
		
	};
	
	this.movePrevious = function(){
		
		if(currentPageId === "page2"){
			$("#page2").hide();
			$("#page3").hide();
			$("#page1").show();
			currentPageId = "page1";
			return;
		}
		
		if(currentPageId === "page3"){
			$("#page3").hide();
			$("#page2").show();
			$("#page1").hide();
			currentPageId = "page2";
			return;
		}
		
		
	};
	
	this.render = function(container){
		
		var page1 = $("<div></div>");
		this.createAccountsPage(page1);
		
		var page2 = $("<div/>");
		this.createBankingInfoPage(page2);
		
		var page3 = $("<div />");
		this.createProductInfoPage(page3);
		
		currentPageId = "page1";
		container.html(page1.html());
		container.append(page2.html());
		container.append(page3.html());
		$("#page2").hide();
		$("#page3").hide();
		this.registerEvents(controller);
	};
};

return AccountView;

});
