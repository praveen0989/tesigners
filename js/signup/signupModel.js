

define([], function(){

	var SignUpModel = function(){
		
		this.userName = 'hangout';
		this.password = 'hangout';
		
		this.getUserName = function(){
			return this.userName;
		};
		
		this.getPassword = function() {
			return this.password;
		};
		
	};
	return SignUpModel;
});
