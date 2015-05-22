var ChangePwdModel = function(){
	
	this.petName = 'Visu';
	this.fullName = '(Viswanathan R)';

	this.contact = '+91 9876543210';
	this.contactIconSrc = 'images/Assets/UserDetails_Mobile.png';

	this.email = 'viswanathan.r@sap.com';
	this.emailIconSrc = 'images/Assets/UserDetails_Email.png';

	this.uniqueID = 'i077785';
	this.uniqueIDIconSrc = 'images/Assets/UserDetails_EmpID.png';

	this.departmentName = 'PI Analytics BI Core Innov UX (IND)';
	this.departmentIconSrc = 'images/Assets/UserDetails_Org.png';

	this.organizationName = 'SAP Labs India Pvt Ltd';
	this.organizationIconSrc = 'images/Assets/UserDetails_Address.png';
	this.organizationAddress = 'Epip Zone,Whitefield, Banglaore - 560066 KA, India';
	this.oldPassword = 'hangout';
	this.newPassword = 'hangout';
	
	this.getOldPassword = function(){
		return this.oldPassword;
	};
	
	this.getNewPassword = function() {
		return this.newPassword;
	};
	
};