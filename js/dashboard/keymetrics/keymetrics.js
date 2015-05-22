var ChangePwd = function(){
	this.app;
	
	this.create = function(app){
		this.app = app;
		this.controller = new ChangePwdController(this);
		this.model = new ChangePwdModel();
		this.view = new ChangePwdView(this.controller, this.model);
		this.view.render(this.app.bodyContainer);
	};
	
	this.loadComponent = function(id, container){
		this.app.loadComponent(id, container);
	};

};