import Details from "../page";
var faker = require("faker");
var randomName = faker.name.findName();
class onboarding {
  onboardCompany() {
    cy.get(":nth-child(1) > .card-box").should("be.visible");
    cy.get(":nth-child(1) > .card-box").click();
    cy.get("#btnConfirmCNI").should("be.disabled");
    cy.get("#companyName").should(
      "have.attr",
      "placeholder",
      "Type Your Company/Firm Name."
    );
    cy.contains("Company/Firm Name").should("exist");
    cy.get("#btnConfirmCNI").should("be.visible");

    cy.get("#companyName")
      .click()
      .type(Details.name);
    cy.get("#btnConfirmCNI").should("be.enabled");
    cy.get("#btnConfirmCNI").click();
    cy.get("#filterIndustry").click();
    cy.get(
      ".form-group > .dropdown-menu > .dd-menu-scroll > :nth-child(1) > :nth-child(1)"
    ).click();
  }
  editInd() {
    cy.get(":nth-child(1) > .card-box").click();

    cy.get("#companyName").should(
      "have.attr",
      "placeholder",
      "Type Your Company/Firm Name."
    );
    cy.contains("Company/Firm Name").should("exist");
    cy.get("#btnConfirmCNI").should("be.visible");

    cy.get("#companyName")
      .click()
      .type(Details.name);

    cy.get("#btnConfirmCNI").should("be.visible");
    cy.get("#btnConfirmCNI").click();
    cy.get("#filterIndustry").click();
    cy.get(
      ".form-group > .dropdown-menu > .dd-menu-scroll > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get("#btnEditIndustry").click();
    cy.get(".breadcrumb > .active").click();
    cy.get("#companyName")
      .click()
      .type("anicc");
    cy.get("#btnConfirmCNI").click();
    cy.get("#filterIndustry").click();
    cy.get(":nth-child(4) > .dropdown-item").click();
    cy.get("#btnConfirmIndustry").click();
  }
  fileUpload() {
    cy.get(":nth-child(1) > .card-box").click();
    cy.get("#companyName").should(
      "have.attr",
      "placeholder",
      "Type Your Company/Firm Name."
    );
    cy.contains("Company/Firm Name").should("exist");
    cy.get("#btnConfirmCNI").should("be.visible");

    cy.get("#companyName")
      .click()
      .type(Details.name);

    cy.get("#btnConfirmCNI").should("be.enabled");
    cy.get("#btnConfirmCNI").click();
    cy.get("#filterIndustry").click();
    cy.get(
      ".form-group > .dropdown-menu > .dd-menu-scroll > :nth-child(1) > :nth-child(1)"
    ).click();

    cy.get("#btnEditIndustry").click();
    cy.get(".breadcrumb > .active").click();
    cy.get("#companyName")
      .click()
      .clear()
      .type(randomName);
    cy.get("#btnConfirmCNI").click();
    cy.get("#filterIndustry").click();
    cy.get(":nth-child(4) > .dropdown-item").click();
    cy.get("#btnConfirmIndustry").click();
    cy.get("#dropdown-balanceSheetDate").click();
    cy.get(".dd_menu_body > :nth-child(1)").click();
    cy.get("#dropdown-filterBalanceSheet").click();
    cy.get(
      ".second-step-upload-data > .dropdown > .dropdown-menu > .dd_menu_body > :nth-child(1)"
    ).click();

    cy.xpath(
      '//*[@id="uploadFileWrap"]/div[1]/div[2]/div[1]/div[3]/input'
    ).attachFile("acme.csv");
    cy.get(":nth-child(1) > .icon_col > :nth-child(2) > .icon").should(
      "be.visible"
    );
    cy.get("#dropdown-cashflowDate").click();
    cy.get(".dd_menu_body > :nth-child(2)").click();
    cy.get("#dropdown-cashFlowFilter").click();

    cy.get(
      ".second-step-upload-data > .dropdown > .dropdown-menu > .dd_menu_body > :nth-child(1)"
    ).click();
    cy.xpath(
      '//*[@id="uploadFileWrap"]/div[2]/div[2]/div[1]/div[3]/input'
    ).attachFile("acme.csv");
    cy.get(
      ":nth-child(3) > .col-md-8 > .text_row_wrap > .right_text_col > .icon_col > :nth-child(2) > .icon"
    ).should("be.visible");
    cy.get(".primary").click();
    cy.get(".one").click();
    cy.contains("Upload Data");
    cy.get(".primary").click();
  }

  companyPresent() {
    cy.xpath("//*[@id='companiesList']/div/div/div/div/div[2]").each(
      ($el, index, $list) => {
        if ($el.text() == Details.NewName) {
          cy.wrap($el).should("exist");
        }
      }
    );
  }
  incompleteComp() {
    cy.get(":nth-child(2) > .card-box").should("be.visible");
    cy.get(":nth-child(2) > .card-box").should("have.text", " Incomplete data");
    cy.get(":nth-child(2) > .card-box").click();

    cy.get("#simple-tab-0").should("be.visible");
    cy.get("#simple-tab-1").should("be.visible");
  }
  searchIncomplete() {
    cy.get(":nth-child(2) > .card-box").click();
    cy.get(".search_company > .form-control")
      .click()
      .type("ani");

    cy.get("#company-name").each(($el, index, $list) => {
      if ($el.text() == "ani") {
        cy.wrap($el).should("have.text", "ani");
      } else cy.log("Company not Found");
    });
  }
  editIcon() {
    cy.get(":nth-child(2) > .card-box").click();

    cy.get("tbody > :nth-child(1) > :nth-child(4)").should("be.visible");
    cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
    cy.get("h2").should("have.text", " Upload Data");

    cy.get("#dropdown-balanceSheetDate").click();
    cy.get(".dd_menu_body > :nth-child(1)").click();
    cy.get("#dropdown-filterBalanceSheet").click();
    cy.get(
      ".second-step-upload-data > .dropdown > .dropdown-menu > .dd_menu_body > :nth-child(1)"
    ).click();
    cy.xpath(
      '//*[@id="uploadFileWrap"]/div[1]/div[2]/div[1]/div[3]/input'
    ).attachFile("acme.csv");
    cy.get(".primary").click();
    cy.get(".button_wrap > :nth-child(2)").click();
  }
  filterIncomp() {
    cy.get(":nth-child(2) > .card-box").click();
    cy.get(".industry_th").should("be.visible");
    cy.get(".industry_th").click();
    cy.xpath('//*[@id="industries"]/a').each(($el, index, $list) => {
      if ($el.attr("name") == Details.indName) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath('//*[@id="industries"]/a').each(($el, index, $list) => {
      if ($el.text() == Details.indName) {
        cy.wrap($el).should("exist");
      }
    });
  }
  missingData() {
    cy.get(":nth-child(2) > .card-box").click();
    cy.get("#simple-tab-1 > .MuiTab-wrapper").click();
    cy.get("#company-name").should("exist");
  }
  filterMissing() {
    cy.get(":nth-child(2) > .card-box").click();
    cy.get("#simple-tab-1 > .MuiTab-wrapper").click();
    cy.get(".industry_th").click();
    cy.xpath('//*[@id="industries"]/a').each(($el, index, $list) => {
      if ($el.attr("name") == "Corporate retail outlets") {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath('//*[@id="industries"]/a').each(($el, index, $list) => {
      if ($el.text() == "Corporate retail outlets") {
        cy.wrap($el).should("exist");
      }
    });
  }
  searchMissing() {
    cy.get(":nth-child(2) > .card-box").click();
    cy.get("#simple-tab-1 > .MuiTab-wrapper").click();
    cy.get(".search_company > .form-control")
      .click()
      .type("JOHNSON WATCH COMPANY PRIVATE LIMITED");
    cy.get("#company-name").should(
      "have.text",
      "JOHNSON WATCH COMPANY PRIVATE LIMITED"
    );
  }
}
export default onboarding;
