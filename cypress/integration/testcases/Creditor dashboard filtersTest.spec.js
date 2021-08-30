import Login from "../../POM/Login";

//import info from "../../../fixtures/LoginDetails.json";
import creditorFilters from "../../POM/POM_testcases/Creditor_filterPOM";
const excelFilePath = "cypress\\logindetails.xlsx";
const sheetName = "login";

describe("Creditor Dasboard filters", function() {
  const fil = new creditorFilters();
  const sn = new Login();
  beforeEach(() => {
    sn.visit();
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        sn.fillEmail(user[0].email);
        sn.fillPassward(user[0].password);
      })
    sn.submit();
  });

  it("CVA_A_TC-23-01: Verify whether the Creditor is able to filter companies by selecting industry from Industry dropdown and companies as shown as per industry selected.", function() {
    fil.indfilter();
  });

  it("CVA_A_TC-23-02: Verify whether the Creditor is able to filter stress type by selecting stress(High,Medium and Low) from Stress dropdown and list are shown as per selection type.", function() {
    fil.stressFilter();
  });

  it("CVA_A_TC-23-03: Verify whether the Creditor is able to filter data(as per data categories) by selecting from data dropdown and list are shown as per selected category.", function() {
    fil.DataFilter();
  });

  it("CVA_A_TC-23-04: Verify whether the creditor is able to filter Run Model(na,Inactive and Active) from run model dropdown and list are shown as per Run model selected.", function() {
    fil.runModalFilter();
  });

  it("CVA_A_TC-23-05: Verify whether the Creditor is able to filter status from status dropdown and list are shown as per Status selected.", function() {
    fil.statusFilter();
  });

  it("CVA_A_TC-23-06: Verify  that the debator can be able to click on the toggle bar(3 dots) in right side of selected company.", function() {
    fil.sideDOtButton();
  });

  it.skip("CVA_A_TC-23-07: Verify whether the creditor can be able to click on  download icon in the  selected company  is able to download the report.", function() {
    fil.newsIcon();
  });

  it("CVA_A_TC-23-08: Verify  whether the creditor is able to click on the news icon in the selected company and  on click of it should be redirected to the news page which shows news of the selected company.", function() {
    fil.newsIcon();
  });

  it("CVA_A_TC-23-09: Verify  whether the creditor is able to click on the Notification icon in the selected company and  on click of it should be redirected to the Notification page which shows notifications of the selected company", function() {
    fil.notificationIcon();
  });

  it("CVA_A_TC-23-10: Verify  whether the creditor is able to click on the Task icon in the selected company and  on click of it should be redirected to the Task for solvendo slider. ", function() {
    fil.TaskIcon();
  });

  it("CVA_A_TC-23-11: Verify  whether the creditor is able to click on the Meeting icon in the selected company and  on click of it should be redirected to the Meeting page ", function() {
    fil.meetingIcon();
  });

  it("CVA_A_TC-23-12: Verify whether the creditor is able to move the company in to  archive companies list by clicking on archieve icon ", function() {
    fil.archiveButton();
  });

  it("CVA_A_TC-23-13: Verify whether the creditor is able to  make the company in to  priority by clicking on priority icon(star icon) ", function() {
    fil.priorityButton();
  });

  it("CVA_A_TC-23-14: Verify whether the creditor is able to move to the particular folder  by selecting the folder from the folderlist / by creating a new folder", function() {
    //*[@id="companiesList"]/div/div/div[1]/div[2]/div[1]/div[1]/div[1]/ul/li/a[contains(@data-title,"Add to Priority")]
    fil.folderIcon();
  });

  it.skip("CVA_A_TC-23-15: Verify the creditor is able to search by company name in the dashboard list and verifying the search icon is present or not", function() {
    fil.searchIcon();
  });
  it("CVA_A_TC-23-16: Verify whether the creditor is able to sort the company list based on criteria selected from the sort filter", function() {
    fil.sort();
  });
  it.skip("CVA_A_TC-23-17: Verifying the creditor dashboard print icon is present or not", function() {
    fil.printIcon();
  });
});
