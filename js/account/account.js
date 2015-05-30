
define(["account/accountController", "account/accountModel", "account/accountView"],function(AccountController, AccountModel, AccountView){
	
	var Account = function(){
		this.app;
		this.create = function(app){
			this.app = app;
			this.controller = new AccountController(this);
			this.model = new AccountModel();
			this.view = new AccountView(this.controller, this.model);
			this.view.render(this.app.bodyContainer);
		};
	
		this.loadComponent = function(id){
			this.app.loadComponent(id);
		};

	};
	
	return Account;
	
});
