define([], function(){
	var AccountView = function(controller, model){
	this.controller = controller;
	this.model = model;
	var currentPageId;

	this.registerEvents = function(controller){
		var that = this;

		$("#nextbut").click(function(){
			that.moveNext();
		});

		$("#nextbut2").click(function(){
			that.movePrevious();
		});
	};

	this.createAccountsPage = function(page1Container){
		page1Container.append("<div id='page1'> Page 1<input type='button' id ='nextbut' name ='but2'/></div>");
	};

	this.createBankingInfoPage = function(page2Container){
		var labelNames = ["Account Holder Name","Bank Account Number","Retype Bank Account Number",
											"Bank Name","Branch","City","State","IFSC Code"];

		var formDiv = '<div class="container"> <h2>Banking Information</h2><form class="form-horizontal" role="form">';
		var formGroupAccountName = '<div class="form-group"><label class="control-label col-md-2" for="AccountHolderName">Account Holder Name </label>'+
																'<div class="col-md-6"><input type="text" class="form-control" id="accountHolderName" placeholder="Enter Account Holder Name"></div></div>';

		var formGroupAccountNumber = '<div class="form-group"><label class="control-label col-md-2" for="accountNumber">Bank Account Number </label>'+
																	'<div class="col-md-6"><input type="password" class="form-control" id="accountNumber" placeholder="Enter Bank Account Number"></div></div>';

		var formGroupRetypeAccountNumber = '<div class="form-group"><label class="control-label col-md-2" for="retypeAccountNumber">Retype Bank Account Number </label>'+
																	'<div class="col-md-6"><input type="text" class="form-control" id="retypeAccountNumber" placeholder="Retype Bank Account Number"></div></div>';

		var formGroupBankName = '<div class="form-group"><label class="control-label col-md-2" for="bankName">Bank Name </label>'+
															    '<div class="col-md-6"><input type="text" class="form-control" id="bankName" placeholder="Enter Bank Name"></div></div>';

		var formGroupBranchName = '<div class="form-group"><label class="control-label col-md-2" for="branchName">Branch Name </label>'+
															    '<div class="col-md-6"><input type="text" class="form-control" id="bankName" placeholder="Enter Branch Name"></div></div>';

		var formGroupIfsc = '<div class="form-group"><label class="control-label col-md-2" for="ifscCode">IFSC Code </label>'+
															    '<div class="col-md-6"><input type="text" class="form-control" id="ifscCode" placeholder="Enter IFSC Code"></div></div>';

    var formGroupBankCity = '<div class="form-group"><label class="control-label col-md-2" for="bankCity">City </label>'+
															    '<div class="col-md-6"><input type="text" class="form-control" id="bankCity" placeholder="Enter city"></div></div>';

		var formGroupBankState = '<div class="form-group"><label class="control-label col-md-2" for="bankState">State </label>'+
															    '<div class="col-md-6"><input type="text" class="form-control" id="bankState" placeholder="Enter State"></div></div>';

	  var formGroupBankState = '<div class="form-group"><div class="col-md-2 col-md-push-4"><button type="submit" class="btn btn-primary btn-block">Back</button></div>'+
																	'<div class="col-md-2 col-md-push-4"><button type="submit" class="btn btn-primary btn-block">Done</button></div></div>';

		var formDivClose = '</form></div>';

	  var form = formDiv + formGroupAccountName + formGroupAccountNumber + formGroupRetypeAccountNumber +formGroupBankName
							+	formGroupBranchName + formGroupIfsc + formGroupBankCity + formGroupBankState + formDivClose;
		//page2Container.append("<div id='page2'> Page 2 <input type='button' id ='nextbut2' name ='but2'></div>");
		page2Container.append(form);

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
