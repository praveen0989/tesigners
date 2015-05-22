var Preferences = function(){
	this.app;
	
	this.create = function(app){
		this.app = app;
		this.controller = new PreferencesController(this);
		this.model = new PreferencesModel();
		this.view = new PreferencesView(this.controller, this.model);
		this.view.render(this.app.bodyContainer);
	};
	
	this.loadComponent = function(id, container){
		this.app.loadComponent(id, container);
	};

};