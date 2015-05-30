define([], function(){
	var DashboardView = function(controller, model){
	this.controller = controller;
	this.model = model;
	this.loginButton;
	this.userName;
	this.password;
	this.keepMeLoggedIn;
	this. phoneNumber;
	
	var renderComponent = function(id, container){
		var accountComponent = controller.app.getComponent(id);
		if(!accountComponent){
			controller.app.loadComponent(id, container);
		} else {
			accountComponent.view.render(container);
		}
	};
	
	
	this.registerEvents = function(controller){
		var that = this;
		$("#account").click(function(){
			renderComponent("account", $("#accountsDiv"));
		});
		
		$("#productInfo").click(function(){
			renderComponent("productinfo", $("#productDiv"));
		});
		
		$("#logout").click(function(){
			
		});
		
		$("#transactions").click(function(){
			renderComponent("transactions", $("#paymentsDiv"));
		});
		
		$("#invoices").click(function(){
			renderComponent("invoices", $("#paymentsDiv"));
		});
		
		$("#settlements").click(function(){
			renderComponent("settlements", $("#paymentsDiv"));
		});
		
		$("#pendingOrders").click(function(){
			renderComponent("pendingorders", $("#ordersDiv"));
		});
		
		$("#completedOrders").click(function(){
			renderComponent("completedorders", $("#ordersDiv"));
		});
		
		$("#cancelledOrders").click(function(){
			renderComponent("cancelledorders", $("#ordersDiv"));
		});
		
		$("#metrics").click(function(){
			renderComponent("metrics", $("#metricsDiv"));
		});
		
	};
	
	
	this.render = function(container){
		container.html("Pending Orders");
		this.registerEvents(controller);
	};
};

return DashboardView;

});
