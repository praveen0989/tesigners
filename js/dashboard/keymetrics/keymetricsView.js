var ChangePwdView = function(controller, model){
	this.controller = controller;
	this.model = model;
	
	this.registerEvents = function(controller, container){
		
		var that = this;
		$("#proceedButton").click(function(){
			controller.app.loadComponent("preferences",container );
			
			var nameDiv = "<div id='profileName'>Viswanathan Ramakrishnan</div>";
			var emailDiv = "<div id='email'><img src = '"+that.model.emailIconSrc+"' class='profileInfoIcon'/><span>"+that.model.email+"</span></div>";
			var uniqueIdDiv = "<div id='uniqueID'><img src = '"+that.model.uniqueIDIconSrc+"' class='profileInfoIcon'/><span>"+that.model.uniqueID+"</span></div>";
			var organizationNameDiv = "<div id='orgName'><img src = '"+that.model.organizationIconSrc+"' class='profileInfoIcon'/><span>"+that.model.organizationName+"</span></div>";
			var organizationAddressDiv = "<div id='orgAddress'>"+that.model.organizationAddress+"</div>";
			var departmentNameDiv = "<div id='depName'><img src = '"+that.model.departmentIconSrc+"' class='profileInfoIcon'/><span>"+that.model.departmentName+"</span></div>";
			var contactDiv = "<div id='contact'><img src = '"+that.model.contactIconSrc+"' class='profileInfoIcon'/><span>"+that.model.contact+"</span></div>";
			var profilePetNameSpan = "<span id='petName'>"+that.model.petName+"</span>";
			var profileFullNameSpan = "<span id='fullName'>"+that.model.fullName+"</span>";
			var profileNameDiv = "<div id='profileName'>"+profilePetNameSpan+profileFullNameSpan+"</div>";
			var profileDetailsDiv = "<div id='profileDetails'><table id='personalInfoTable'><tr><td>"+emailDiv+"</td><td>"+uniqueIdDiv+"</td><td>"+organizationNameDiv+"</td></tr><tr><td>"+contactDiv+"</td><td>"+departmentNameDiv+"</td><td style='vertical-align: top;'>"+organizationAddressDiv+"</td></tr></table></div>"
			$(".contentSpan").html(nameDiv + profileDetailsDiv);
		});
	};
	
	
	this.render = function(container){
		
		var updateProfileHeaderDiv = "<div id='updateProfileHeader'>UPDATE PROFILE AND PREFERENCES</div>";
		container.html(updateProfileHeaderDiv);
		controller.app.loadComponent("profilecard", container);
		
		var chpwdTitleDiv = "<div id = 'chpwdtitle'>Before you proceed, please update your password.</div>";
		var chpwdContainer = "<div id='chpwdContainer'>";
		var divClose = "</div>";
		
		this.userName = '<input type="password" id = "usernameinput" name="chpwd" value="" placeholder="Enter new password"/>';
		var chpwdDiv = '<div id="usernamediv">'+ this.userName + '</div>';
		
		this.password = '<input type="password" id="passwordinput" name="password" value="" placeholder="Re-enter new password"/>';
		var passwordDiv = '<div id="passworddiv">'+ this.password +'</div>';
		
		var chpwdinfoDiv = "<div id='chpwdinfoDiv'>New password must be alpha-numeric and contain a special character.</div>";
		
		this.chpwdButton = "<input type='button' name='proceedButton' id='proceedButton' value='PROCEED'/>";
		var chpwdButtonDiv = "<div id='chpwdButtonDiv'>"+ this.chpwdButton +"</div>";
		
		container.append(chpwdTitleDiv);
		container.append(chpwdContainer + chpwdDiv + passwordDiv + chpwdinfoDiv + chpwdButtonDiv + divClose);
		this.registerEvents(this.controller, container);
		
	};
};