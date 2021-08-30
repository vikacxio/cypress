class homepage {
  pageLogo() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/"
    );
    cy.xpath('//*[@id="top"]/a').should("have.attr", "class", "navbar-brand");
    cy.xpath('//*[@id="c_home"]/div/div[1]').should(
      "have.attr",
      "class",
      "sections globe"
    );
    cy.xpath('//*[@id="c_home"]/div/div[2]/div/div[2]/div').should(
      "have.attr",
      "class",
      "graphic"
    );

    cy.get(".title-main").should("have.text", "Stressed Assets");
    cy.get(".col-6 > .btn").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Hello");
    cy.get("strong").should("have.text", "schedule a demo from Solvendo.");
  }

  servicePage() {
    cy.xpath('//*[@id="top"]/ul[1]/li[1]/a').click({ force: true });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/services"
    );
    cy.get(".about-board-inner > .btn").should("have.text", "Contact Us");
    cy.get(".about-board-title").should("have.text", "We help you");
    cy.get(".about-board-title-main").should("have.text", "Make Decisions");
    cy.xpath('//*[@id="services"]/div[1]/div[2]').should(
      "have.attr",
      "class",
      "image"
    );

    cy.get(".services-page > .title").should("have.text", "Debt Restructuring");
    cy.get(".about-board-inner > .btn").should("have.text", "Contact Us");
    cy.get(".about-board-inner > .btn").should("be.visible");
    cy.get("#demo").should("be.visible");
  }

  demo() {
    cy.xpath('//*[@id="top"]/ul[1]/li[2]/a').click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Hello");
    cy.get("strong").should("have.text", "schedule a demo from Solvendo.");
    cy.get("#confirmName").should("not.be.enabled");
  }

  aboutUs() {
    cy.xpath('//*[@id="top"]/ul[1]/li[3]/a').click({ force: true });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/about"
    );
    cy.get(".about-box-title").should("have.text", "About Us");
    cy.get("#demo").should("be.visible");
    cy.get(".about-board-title").should("have.text", "Science of");
    cy.get(".about-board-title-main").should("have.text", "Decision Making");
    cy.get(".about-board-inner > .btn").should("be.visible");
  }

  contactUs() {
    cy.xpath('//*[@id="top"]/ul[1]/li[4]/a').click({ force: true });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/#contact"
    );
    cy.get("#contact  .title").should("have.text", "Contact Us");
    cy.xpath(
      "//*[@id='contact']/div/div/div/div/div[contains(@class,'contact-country')]"
    ).should("have.text", " Solvendo, India");
  }

  faqs() {
    cy.xpath('//*[@id="top"]/ul[1]/li[5]/a').click({ force: true });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/faq"
    );
    cy.get(".section-title").should("have.text", "FAQs");
    cy.get(".pfw-right > .btn").should("have.text", "Send Email");
  }

searchButton(){
  cy.get('#search-main > .icon').click({force:true}).type("bank");
}


  aus() {
    cy.get("#regionDropdown").click();
    cy.xpath('//*[@id="top"]/ul/li/div/a').each(($el2, index, $list) => {
      if ($el2.text() == "Australia ") {
        cy.wrap($el2).click({ force: true });
      }
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/aus"
    );
    cy.get("h2 > strong").should("have.text", "Australia!");

    cy.get(".middle_col > #demo").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Hello");
    cy.get(".demo-text > strong").should(
      "have.text",
      "notify you of Launch from Solvendo."
    );
    cy.get("#name").should("exist");
    cy.get("#email").should("exist");
    cy.get("#mobile").should("exist");
    cy.get("#confirmName").should("be.visible");
  }

  hongkong() {
    cy.get("#regionDropdown").click();
    cy.xpath('//*[@id="top"]/ul/li/div/a').each(($el2, index, $list) => {
      if ($el2.text() == "Hong Kong ") {
        cy.wrap($el2).click({ force: true });
      }
    });

    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/hk"
    );
    cy.get("h2 > strong").should("have.text", "Hong Kong!");
    cy.get(".middle_col > #demo").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Neih hou");
    cy.get(".demo-text > strong").should(
      "have.text",
      "notify you of Launch from Solvendo."
    );
    cy.get("#name").should("exist");
    cy.get("#email").should("exist");
    cy.get("#mobile").should("exist");
    cy.get("#confirmName").should("be.visible");
  }
  singapore() {
    cy.get("#regionDropdown").click();
    cy.xpath('//*[@id="top"]/ul/li/div/a').each(($el2, index, $list) => {
      if ($el2.text() == "Singapore ") {
        cy.wrap($el2).click({ force: true });
      }
    });

    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/sg"
    );
    cy.get("h2 > strong").should("have.text", "Singapore!");
    cy.get(".middle_col > #demo").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Ni Hao");
    cy.get(".demo-text > strong").should(
      "have.text",
      "notify you of Launch from Solvendo."
    );
    cy.get("#name").should("exist");
    cy.get("#email").should("exist");
    cy.get("#mobile").should("exist");
    cy.get("#confirmName").should("be.visible");
  }
  Uae() {
    cy.get("#regionDropdown").click();
    cy.xpath('//*[@id="top"]/ul/li/div/a').each(($el2, index, $list) => {
      if ($el2.text() == "UAE ") {
        cy.wrap($el2).click({ force: true });
      }
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/uae"
    );
    cy.get("h2 > strong").should("have.text", "Dubai!");
    cy.get(".middle_col > #demo").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Salam Alaikum");
    cy.get(".demo-text > strong").should(
      "have.text",
      "notify you of Launch from Solvendo."
    );
    cy.get("#name").should("exist");
    cy.get("#email").should("exist");
    cy.get("#mobile").should("exist");
    cy.get("#confirmName").should("be.visible");
  }
  uk() {
    cy.get("#regionDropdown").click();
    cy.xpath('//*[@id="top"]/ul/li/div/a').each(($el2, index, $list) => {
      if ($el2.text() == "UK ") {
        cy.wrap($el2).click({ force: true });
      }
    });

    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/uk"
    );
    cy.get("h2 > strong").should("have.text", "United Kingdom!");
    cy.get(".middle_col > #demo").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Hello");
    cy.get(".demo-text > strong").should(
      "have.text",
      "notify you of Launch from Solvendo."
    );
    cy.get("#name").should("exist");
    cy.get("#email").should("exist");
    cy.get("#mobile").should("exist");
    cy.get("#confirmName").should("be.visible");
  }

  usa() {
    cy.get("#regionDropdown").click();
    cy.xpath('//*[@id="top"]/ul/li/div/a').each(($el2, index, $list) => {
      if ($el2.text() == "USA ") {
        cy.wrap($el2).click({ force: true });
      }
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/usa"
    );
    cy.get("h2 > strong").should("have.text", "USA!");
    cy.get(".middle_col > #demo").click({ force: true });
    cy.get(".side-box-extra").should("have.text", "Hello");
    cy.get(".demo-text > strong").should(
      "have.text",
      "notify you of Launch from Solvendo."
    );
    cy.get("#name").should("exist");
    cy.get("#email").should("exist");
    cy.get("#mobile").should("exist");
    cy.get("#confirmName").should("be.visible");
  }
  areU() {
    cy.get('[data-target-service="one"]').click({ force: true });

    cy.xpath('//*[@id="c_home"]/div/div[3]/div/div[2]/div[1]/span[1]').should(
      "have.attr",
      "class",
      "icons active"
    );
    cy.get('[data-active-service="one"] > .box-title').should(
      "have.text",
      "Debtor"
    );
    cy.get('[data-active-service="one"] > .box-content > p').should(
      "have.text",
      "Solvendo’s proprietary AI enabled platform helps the debtor/its representative understand the stress to enable best renegotiation of their stress in a manner that is fair, reasonable and acceptable to all stakeholders."
    );
    cy.get('[data-active-service="one"] > .box-footer > .btn').should(
      "be.visible"
    );

    cy.get('[data-target-service="two"]').click({ force: true });

    cy.xpath('//*[@id="c_home"]/div/div[3]/div/div[2]/div[1]/span[2]').should(
      "have.attr",
      "class",
      "icons active"
    );
    cy.get('[data-active-service="two"] > .box-title').should(
      "have.text",
      "Banker or Lender"
    );
    cy.get('[data-active-service="two"] > .box-content > p').should(
      "have.text",
      "Solvendo’s Artificial Intelligence enabled proprietary platform helps bankers and lenders get one touch up-to-date information and analysis of the stress faced by its loan accounts."
    );
    cy.get('[data-active-service="two"] > .box-footer > .btn').should(
      "be.visible"
    );

    cy.get('[data-target-service="three"]').click({ force: true });

    cy.xpath('//*[@id="c_home"]/div/div[3]/div/div[2]/div[1]/span[3]').should(
      "have.attr",
      "class",
      "icons active"
    );
    cy.get('[data-active-service="three"] > .box-title').should(
      "have.text",
      "Creditors"
    );
    cy.get('[data-active-service="three"] > .box-content > p').should(
      "have.text",
      "Solvendo provides unprecedented insight to creditors of stressed companies. Creditors can experience unheard of transparency and participation with respect to outstanding debt, due from the stressed entity or company."
    );
    cy.get('[data-active-service="three"] > .box-footer > .btn').should(
      "be.visible"
    );

    cy.get('[data-target-service="four"]').click({ force: true });

    cy.xpath('//*[@id="c_home"]/div/div[3]/div/div[2]/div[1]/span[4]').should(
      "have.attr",
      "class",
      "icons active"
    );
    cy.get('[data-active-service="four"] > .box-title').should(
      "have.text",
      "Insolvency Professional"
    );
    cy.get(
      '[data-active-service="four"] > .box-content > :nth-child(1)'
    ).should(
      "have.text",
      "Solvendo makes the process of insolvency and bankruptcy more productive & efficient. Through its proprietary AI engine and its global reach and scale, Solvendo is able to be the Insolvency Professional’s best possible assistant."
    );
    cy.get(".box-content > :nth-child(2)").should(
      "have.text",
      "Insolvency Professionals that have used Solvendo have been able to manage, understand, predict and therefore advice on the insolvency and bankruptcy process better."
    );
    cy.get('[data-active-service="four"] > .box-footer > .btn').should(
      "be.visible"
    );

    cy.get('[data-target-service="five"]').click({ force: true });

    cy.xpath('//*[@id="c_home"]/div/div[3]/div/div[2]/div[1]/span[5]').should(
      "have.attr",
      "class",
      "icons active"
    );
    cy.get('[data-active-service="five"] > .box-title').should(
      "have.text",
      "Regulator"
    );
    cy.get('[data-active-service="five"] > .box-content > p').should(
      "have.text",
      "Solvendo is a global platform that uses artificial intelligence to bring unprecedented insights and justice to the various stakeholders involved in stressed assets, bankruptcy/insolvency scenarios."
    );
    cy.get('[data-active-service="five"] > .box-footer > .btn').should(
      "be.visible"
    );
  }
  SecretSource() {
    cy.get(".secret > .title").should("have.text", "Our Secret Sauce");
    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[1]/div[1]').should(
      "have.text",
      "Data Analytics"
    );
    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[1]/i').should(
      "have.attr",
      "class",
      "icon data-analytics"
    );

    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[2]/div[1]').should(
      "have.text",
      "Artificial Intelligence"
    );
    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[2]/i').should(
      "have.attr",
      "class",
      "icon artificial-intelligence"
    );

    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[3]/div[1]').should(
      "have.text",
      "Market Place"
    );
    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[3]/i').should(
      "have.attr",
      "class",
      "icon market-place"
    );

    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[4]/div[1]').should(
      "have.text",
      "Stakeholder Justice"
    );
    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[4]/i').should(
      "have.attr",
      "class",
      "icon creditor-justice"
    );

    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[5]/div[1]').should(
      "have.text",
      "Process Automation"
    );
    cy.xpath('//*[@id="c_home"]/div/div[4]/div[2]/div[5]/i').should(
      "have.attr",
      "class",
      "icon process-automation"
    );
  }
  platformSection() {
    cy.get(".platform > .row > :nth-child(1) > .title").should(
      "have.text",
      "Our Platform"
    );
    cy.xpath(
      '//*[@id="c_home"]/div/div[5]/div/div[2]/div[1]/div/div[1]'
    ).should("have.text", "Data Privacy and Policy");

    cy.xpath(
      '//*[@id="c_home"]/div/div[5]/div/div[2]/div[2]/div/div[1]'
    ).should("have.text", "Bias in Data Science");
    cy.xpath(
      '//*[@id="c_home"]/div/div[5]/div/div[2]/div[3]/div/div[1]'
    ).should("have.text", "Data Science");
    cy.xpath(
      '//*[@id="c_home"]/div/div[5]/div/div[2]/div[4]/div/div[1]'
    ).should("have.text", "Human Centric Approach");
    cy.get("b").click({ force: true });

    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/legal"
    );
  }
  bookaDemo() {
    cy.get("#demo").should("be.visible");
    cy.get("#demo").click({ force: true });

    cy.get(".side-box-extra").should("have.text", "Hello");
    cy.get("strong").should("have.text", "schedule a demo from Solvendo.");
  }

  myAccountAus() {
    cy.get('[style="display: flex;"] > .my-account').click({ force: true });
    cy.get(".welcome").should("have.text", "Welcome to");
    cy.get(".app-name").should("have.attr", "class", "app-name sign-in-logo");
    cy.get(".location").should("be.visible");
    cy.get(".location")
      .click({ force: true })
      .clear()
      .type("Australia");
    cy.get(".inner > .dropdown > .dropdown-menu > .dropdown-item").click({
      force: true,
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/aus"
    );
  }
  myAccountHong() {
    cy.get('[style="display: flex;"] > .my-account').click({ force: true });
    cy.get(".welcome").should("have.text", "Welcome to");
    cy.get(".app-name").should("have.attr", "class", "app-name sign-in-logo");
    cy.get(".location").should("be.visible");
    cy.get(".location")
      .click({ force: true })
      .clear()
      .type("Hong Kong");
    cy.get(".inner > .dropdown > .dropdown-menu > .dropdown-item").click({
      force: true,
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/hk"
    );
  }
  myAccountSingapore() {
    cy.get('[style="display: flex;"] > .my-account').click({ force: true });
    cy.get(".welcome").should("have.text", "Welcome to");
    cy.get(".app-name").should("have.attr", "class", "app-name sign-in-logo");
    cy.get(".location").should("be.visible");
    cy.get(".location")
      .click({ force: true })
      .clear()
      .type("Singapore");
    cy.get(".inner > .dropdown > .dropdown-menu > .dropdown-item").click({
      force: true,
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/sg"
    );
  }
  myAccountUAE() {
    cy.get('[style="display: flex;"] > .my-account').click({ force: true });
    cy.get(".welcome").should("have.text", "Welcome to");
    cy.get(".app-name").should("have.attr", "class", "app-name sign-in-logo");
    cy.get(".location").should("be.visible");
    cy.get(".location")
      .click({ force: true })
      .clear()
      .type("UAE");
    cy.get(".inner > .dropdown > .dropdown-menu > .dropdown-item").click({
      force: true,
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/uae"
    );
  }
  myAccountUK() {
    cy.get('[style="display: flex;"] > .my-account').click({ force: true });
    cy.get(".welcome").should("have.text", "Welcome to");
    cy.get(".app-name").should("have.attr", "class", "app-name sign-in-logo");
    cy.get(".location").should("be.visible");
    cy.get(".location")
      .click({ force: true })
      .clear()
      .type("UK");
    cy.get(".inner > .dropdown > .dropdown-menu > .dropdown-item").click({
      force: true,
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/uk"
    );
  }
  myAccountUSA() {
    cy.get('[style="display: flex;"] > .my-account').click({ force: true });
    cy.get(".welcome").should("have.text", "Welcome to");
    cy.get(".app-name").should("have.attr", "class", "app-name sign-in-logo");
    cy.get(".location").should("be.visible");
    cy.get(".location")
      .click({ force: true })
      .clear()
      .type("USA");
    cy.get(".inner > .dropdown > .dropdown-menu > .dropdown-item").click({
      force: true,
    });
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/usa"
    );
  }
}

export default homepage;
