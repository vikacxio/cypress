import Login from "../../POM/Login";
//import info from "../../../fixtures/LoginDetailsDebtor.json";
import meetingDebtor from "../../POM/POM_testcases/Meeting Module as DebtorPOM";

const excelFilePath = "cypress\\LoginDetailsDebtor.xlsx";
const sheetName = "Sheet1";

describe("Meeting Room Debtor", function() {
  const sn = new Login();
  const mrd = new meetingDebtor();
  beforeEach(() => {
    sn.visit();
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        sn.fillEmail(user[0].email);
        sn.fillPassward(user[0].password);
      })
    sn.submit();
    cy.xpath("//*[@id='root']/header/nav/ul/li[4]/a/i").click({force:true});
  });

  //console.log(Date.substring(3, 6))

  it("CVA_A_TC-18-01: Verifying whether the user is able to schedule a meeting with the valid data and verifying the mandatory fields", function() {
    mrd.scheduleMeeting();
  });

  it("CVA_A_TC-18-02: Verify whether the debtor is able to Edit the meeting of debtor scheduled date and Time", function() {
    mrd.editMeeeting();
  
  });

  it("CVA_A_TC-18-03: Verifying whether the debtor is able to update agenda of the meeting with the valid data and verifying the mandatory fields", function() {
    mrd.updateAgenda();


  });

  it("CVA_A_TC-18-04: Verifying whether the debator is able to schedule a meeting  for today's date and debtor is able to get the url and time displayed in join a meeting screen and verifying the mandatory fields", function() {
    mrd.scheduleToday();

    //*[@id="over_flow"]/ul/li/span[4]/span
  });

  it("CVA_A_TC-18-05: Verifying whether the debtor is able to Edit meeting from join meeting page side toggle bar with valid data and verifying the mandatory fields", function() {
    mrd.editFromJoin();

    //agenda
  });

  it("CVA_A_TC-08-06: Verify that debtor is able to select date from right corner of the schedule a meeting page  and update agenda from there and verifying mandatory fields", function() {
    mrd.rightCornerButton();
  });

  it("CVA_A_TC-18-07: Verifying whether the debtor is able to update Agenda of the meeting from join meeting page side toggle bar with valid data and verifying the mandatory fields", function() {
    mrd.agendaFromJoin();
  });

  it("CVA_A_TC-18-08: Verifying whether the debtor is able to Edit invitee from join meeting side toggle bar with valid data and verifying the mandatory fields", function() {
    mrd.enviteeFromJoin();
  });

  it("CVA_A_TC-18-09: Verifying whether the debtor is able to Cancel a meeting from join meeting side toggle bar with valid data and verifying the mandatory fields", function() {
    mrd.cancelFromJoin();
  });

  it("CVA_A_TC-18-10: Verify whether company name should be present in the join a meeting page ", function() {
    mrd.compNameJoin();
  });
});
