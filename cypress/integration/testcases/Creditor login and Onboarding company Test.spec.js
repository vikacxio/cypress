//import Details from "../../../POM/page";
import Login from "../../POM/Login";
//import info from "../../../fixtures/LoginDetails.json";
import onboarding from "../../POM/POM_testcases/Creditor Onboarding_CompanyPOM";
const excelFilePath =
"cypress\\logindetails.xlsx";
const sheetName = "login";


describe("Onboard Company Creditor", function() {
  const sn = new Login();
  const on = new onboarding();
  beforeEach(() => {
    sn.visit();

	cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
		(user) => {
			sn.fillEmail(user[0].email);
			sn.fillPassward(user[0].password);
		})
    
    sn.submit();
    cy.get("#onboard > .icon").click();
  });

  it("CVA_A_TC-12-01: Verify whether the creditor is able to onboad a company and verifying the mandatory fields  ", function() {
    on.onboardCompany();
  });

  it("CVA_A_TC-12-02: Verify whether creditor is able to Edit industry while onboarding the company and verifying the mandatory fields", function() {
    on.editInd();
  });
  //
  it("CVA_A_TC-12-03: Verify whether is able to upload files while onboarding the company and verifying the mandatory fields", function() {
    on.fileUpload();
  });

  it("CVA_A_TC-12-04: Verify whether the onboarded company is present in the company list.", function() {
    on.companyPresent();
  });

  it("CVA_A_TC-12-05:CVA_A_TC-12-05: Verify the onboarded companies which are incomplete is able to show in the  incomplete list and verifying the mandatory fields", function() {
    on.incompleteComp();
    //cy.get(':nth-child(1) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
    //cy.get('h2').should('have.text',' Upload Data')
    //cy.get('.primary').click()
    //cy.get('.button_wrap > :nth-child(2)').click()
  });
  it("CVA_A_TC-12-06: Verify whether the creditor is able to search by  company name in the search field in  incomplete list.", function() {
    on.searchIncomplete();
    //*[@id="simple-tabpanel-0"]/div/p/table/tbody/tr/td[2]/div
  });
  it("CVA_A_TC-12-07: Verify whether the creditor is able to click on pencil icon (edit icon) is able to redirect t0 the upload data screen and can complete for onboarding company", function() {
    on.editIcon();
  });
  it("CVA_A_TC-12-08: Verify whether the creditor is able to filter the industry companies by selecting industry from the list incomplete list.", function() {
    on.filterIncomp();
  });
  it("CVA_A_TC-12-09: Verify whether the creditor is able to display missing data companies in the missing data screen", function() {
    on.missingData();
  });
  it("CVA_A_TC-12-10: Verify whether the creditor is able to filter the industry companies by selecting industry from the missing data screen.", function() {
    on.filterMissing();
  });
  it("CVA_A_TC-12-11: Verify whether the creditor is able to search by  company name in the search field in  missing data screen", function() {
    on.searchMissing();
  });
});
