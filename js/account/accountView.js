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
		
		var page1 = "<div id='page1'> Page 1  <input type ='text' name='box'/> <input type='button' id ='nextbut' name ='but'></div>";
		var page2 = "<div id='page2'> Page 2 <input type='button' id ='nextbut2' name ='but2'></div>";
		var page3 = "<div id='page3'> Page 3 <input type='button' id ='nextbut3' name ='but3'></div>";
		currentPageId = "page1";
		container.html( page1 + page2 + page3);
		$("#page2").hide();
		$("#page3").hide();
		this.registerEvents(controller);
	};
};

return AccountView;

});
