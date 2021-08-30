class Login {
	get Email() {
		return cy.get("#userEmail");
	}
	get Password() {
		return cy.get("#userPassword");
	}

	get button() {
		return cy.get("#btnSignIn");
	}
	get date() {
		return "20 August 2021";
	}

	
	get time() {
		return "21:00 to 22:00";
	}
	get timeForEdit() {
		return "22:00 to 23:00";
	}

	get compforMeeting() {
		return "AARTI DRUGS LIMITED";
	}
	get compName() {
		return "vikaaaaa";
	}
	get indName() {
		return "Manufacturing-Automobile";
	}
	get indIcon() {
		return "icon sugar";
	}

	get sType() {
		return "LOW";
	}
	get stress_type() {
		return "LOW";
	}

	get dType() {
		return "COMPLETEDATA";
	}

	get checked() {
		return "checked";
	}

	get mType() {
		return "ACTIVE";
	}
	get statusType() {
		return "VIEWREPORT";
	}
	get statusreport() {
		return "View Report";
	}
	get aControl() {
		return "SOLVENDO_25879";
	}
	get fName() {
		return "vik";
	}

	get name() {
		return "vik";
	}
	get NewName() {
		return "asacni";
	}
	get name1() {
		return "coromandelengineeringcompany";
	}
	get toggleBarName() {
		return "SOLVENDO_27651apse"; //toggle bar name
	}
}
var Details = new Login();
export default Details;
