
import Login from "../../POM/Login";
//import info from "../../../fixtures/LoginDetails.json";

import meetingCreditor from "../../POM/POM_testcases/MeetingModuleTestPOM"

const excelFilePath = "cypress\\logindetails.xlsx";
const sheetName = "login";


describe("Meeting Room Creditor", function () {
  const sn = new Login();
  const mmc = new meetingCreditor()
  beforeEach(() => {
    sn.visit();
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        sn.fillEmail(user[0].email);
        sn.fillPassward(user[0].password);
      })
    sn.submit();
    cy.xpath('//*[@id="root"]/header/nav/ul/li[5]/a/i').click({force:true});
  });
  

  //console.log(Date.substring(3, 6))

 

  it("CVA_A_TC-08-01: Verifying whether the user is able to Schedule a meeting with the valid data and verifying the mandatory fields", function () {
    mmc.scheduleMeeting()
  });

  //edit meeting
  it("CVA_A_TC-08-02: Verifying whether the user is able to Edit a meeting with the valid data and verifying the mandatory fields", function () {
    //cy.reload();
mmc.editMeeting()
  });

  it("CVA_A_TC-08-03: Verifying whether the user is able to update Agenda of the meeting with the valid data and verifying the mandatory fields", function () {
    
mmc.updateAgenda()
  });
  it("CVA_A_TC-08-04: Verifying whether the creditor is able to schedule a meeting  for today's date and creditor is able to get the url and time displayed in joina meeting screen and verifying the mandatory fields", function() {
	mmc.scheduleToday()
		

//*[@id="over_flow"]/ul/li/span[4]/span
	});


it("CVA_A_TC-08-05: Verify that creditor is able to select date from the right corner of the page and update agenda from there and verifying mandatory fields", function(){
 
mmc.cornerButton()



})
	



	it("CVA_A_TC-08-06: Verifying whether the creditor is able to edit meeting from join meeting side toggle bar with valid data and verifying the mandatory fields", function() {
	mmc.editfromJoin()
		
	
	});



	it("CVA_A_TC-08-07: Verifying whether the creditor is able to update agenda of the meeting from join meeting side toggle bar with valid data and verifying the mandatory fields", function() {
		mmc.agendafromJoin()
	})

	it("CVA_A_TC-08-08: Verifying whether the creditor is able to edit envitee from join meeting side toggle bar with valid data and verifying the mandatory fields", function() {
mmc.enviteefromJoin()
	})

	it("CVA_A_TC-08-09: Verifying whether the creditor is able to Cancel a meeting from join meeting side toggle bar with valid data and verifying the mandatory fields", function() {
	mmc.cancelfromJoin()
	})





});
