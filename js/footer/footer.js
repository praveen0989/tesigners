
define(["footer/footerController", "footer/footerModel", "footer/footerView"],function(footerController, footerModel, footerView){
	
	var Footer = function(){
		this.app;
		this.create = function(app){
		this.app = app;
		this.controller = new footerController(this);
		this.model = new footerModel();
		this.view = new footerView(this.controller, this.model);
		this.view.render($("#footerDiv"));
	};
	
	this.loadComponent = function(id){
		this.app.loadComponent(id);
	};

	};
	
	return Footer;
	
});
