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
		var component = controller.app.getComponent(id);
		if(!component){
			controller.app.loadComponent(id, container);
		} else {
			component.view.render(container);
		}
	};
	
	
	this.registerEvents = function(controller){
		var that = this;
		$("#account").click(function(){
			renderComponent("account", $("#accountsDiv"));
		});
		
		$("#productInfo").click(function(){
			renderComponent("productInfo", $("#productDiv"));
		});
		
		$("#logout").click(function(){
			
		});
		
		$("#transactions").click(function(){
			renderComponent("payment", $("#paymentsDiv"));
		});
		
		$("#invoices").click(function(){
			renderComponent("payment", $("#paymentsDiv"));
		});
		
		$("#settlements").click(function(){
			renderComponent("payment", $("#paymentsDiv"));
		});
		
		$("#pendingOrders").click(function(){
			renderComponent("orders", $("#ordersDiv"));
		});
		
		$("#completedOrders").click(function(){
			renderComponent("orders", $("#ordersDiv"));
		});
		
		$("#cancelledOrders").click(function(){
			renderComponent("orders", $("#ordersDiv"));
		});
		
		$("#metrics").click(function(){
			renderComponent("metrics", $("#metricsDiv"));
		});
		
	};
	
	
	this.render = function(container){
		this.registerEvents(controller);
	};
};

return DashboardView;

});
