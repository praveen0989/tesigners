require.config({

		paths: {
			'jquery': '../tp/jquery',
			'angular': '../tp/angular.min',
			'loginModule': 'login/loginModule',
			'app':'app'
		},

		shim: { 
			'app' :{
				deps:['angular', 'loginModule']
			},
			'loginModule' : {
				deps : ['angular']
			}
		}
});

require(["app"], function(){

	angular.bootstrap(document, ['app']);
});