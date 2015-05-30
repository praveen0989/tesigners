define(["login/login", "signup/signup", "footer/footer", "dashboard/dashboard", "account/account",
		"metrics/metrics", "orders/orders", "productInfo/productInfo", "payment/payment"
		
	], function(Login, SignUp, Footer, Dashboard, Account, Metrics, Orders, ProductInfo, Payment){

	return({
		"login" : {
			module : function(){
				return new Login();
			}
		},
		"signup":{
			module : function(){
				return new SignUp();
			}
		},
		"footer" : {
			module : function(){
				return new Footer();
			}
		},
		"dashboard" : {
			module : function(){
				return new Dashboard();
			}
		},
		"account" : {
			module : function(){
				return new Account();
			}
		},
		"metrics" : {
			module : function(){
				return new Metrics();
			}
		},
		"orders" : {
			module : function(){
				return new Orders();
			}
		},
		"productInfo" : {
			module : function(){
				return new ProductInfo();
			}
		},
		"payment" : {
			module : function(){
				return new Payment();
			}
		}
	});
});