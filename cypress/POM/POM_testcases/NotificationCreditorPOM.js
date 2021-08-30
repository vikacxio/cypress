import Details from "../../POM/page";
class notification {
  notificationUrl() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/all-notifications"
    );
    cy.get(".section-title").should("have.text", "Notifications");

    cy.get(".search-filed").should(
      "have.attr",
      "placeholder",
      "Search Company/CIN"
    );
    cy.get(".search-filed")
      .click()
      .type("BALRAMPUR CHINI MILLS LTD");
  }

  notificationSearch() {
    cy.xpath('//*[@id="root"]/div/div/div/div/div/div/p/b').each(
      ($el, index, $list) => {
        var SearchedCompany = $el.text();
        cy.log(SearchedCompany);
        if (SearchedCompany == "BALRAMPUR CHINI MILLS LTD") {
          cy.wrap($el).should("have.text", "BALRAMPUR CHINI MILLS LTD");
        }
      }
    );
  }
  indFilter() {
    cy.xpath(
      '//*[@id="root"]/div/div[1]/div/div/ul[2]/li[2]/a/i[contains(@class,"icon toolbar-filter")]'
    ).click();
    cy.xpath('//*[@id="industries"]/div/a/i').each(($el2, index, $list) => {
      var IndustryName = $el2.attr("class");
      if (IndustryName == Details.indIcon) {
        cy.wrap($el2).click({ force: true });
      }
    });
    cy.wait(6000);

    cy.xpath('//*[@id="root"]/div/div/div/div[1]/div[1]/i').each(
      ($el2, index, $list) => {
        if ($el2.attr("class") == Details.indIcon) {
          cy.wrap($el2).should("have.attr", "class", Details.indIcon);
        }
      }
    );
  }
  remindMe() {
    cy.xpath(
      '//*[@id="root"]/div/div/div/div/ul/li/a/i[contains(@class,"icon toolbar-remind")]'
    ).click();
    cy.wait(6000);

    cy.xpath('//*[@id="root"]/div/div/div/div[4]/div/i[1]').each(
      ($el2, index, $list) => {
        if ($el2.attr("class") == "icon toolbar-remind active") {
          cy.wrap($el2).should(
            "have.attr",
            "class",
            "icon toolbar-remind active"
          );
        }
      }
    );
    cy.xpath(
      '//*[@id="root"]/div/div/div/div/ul/li/a/i[contains(@class,"icon toolbar-remind")]'
    ).click();
  }

  priorityIcon() {
    cy.xpath(
      '//*[@id="root"]/div/div/div/div/ul/li/a/i[contains(@class,"icon toolbar-priority")]'
    ).click();
    cy.wait(6000);

    cy.xpath('//*[@id="root"]/div/div/div/div[4]/div/i[2]').each(
      ($el2, index, $list) => {
        if ($el2.attr("class") == "icon toolbar-priority active") {
          cy.wrap($el2).should(
            "have.attr",
            "class",
            "icon toolbar-priority active"
          );
        }
      }
    );
  }

  compSort() {
    cy.xpath(
      '//*[@id="root"]/div/div/div/div/ul/li/a/i[contains(@class,"icon toolbar-sort")]'
    ).should("be.visible");
    cy.xpath(
      '//*[@id="root"]/div/div[1]/div/div/ul[2]/li[5]/div/div/a[1]'
    ).click({ force: true });
    cy.xpath(
      '//*[@id="root"]/div/div[1]/div/div/ul[2]/li[5]/div/div/a[1]'
    ).each(($el2, index, $list) => {
      if ($el2.attr("class") == "dropdown-item active") {
        cy.wrap($el2).should("have.attr", "class", "dropdown-item active");
      }
    });
    cy.wait(6000);
  }
  allNotification() {
    cy.xpath('//*[@id="root"]/div/div[1]/div/div/ul[3]/li/a').each(
      ($el2, index, $list) => {
        if ($el2.text() == "All") {
          cy.wrap($el2).click({ force: true });
        }
      }
    );
  }

  latestNotification() {
    cy.xpath('//*[@id="root"]/div/div[1]/div/div/ul[3]/li/a').each(
      ($el2, index, $list) => {
        if ($el2.text() == "Latest") {
          cy.wrap($el2).click({ force: true });
        }
      }
    );
  }

  thisweekNotification() {
    cy.xpath('//*[@id="root"]/div/div[1]/div/div/ul[3]/li/a').each(
      ($el2, index, $list) => {
        if ($el2.text() == "This Week") {
          cy.wrap($el2).click({ force: true });
        }
      }
    );
  }

  thismonthNotification() {
    cy.xpath('//*[@id="root"]/div/div[1]/div/div/ul[3]/li/a').each(
      ($el2, index, $list) => {
        if ($el2.text() == "This Month") {
          cy.wrap($el2).click({ force: true });
        }
      }
    );
  }
}

export default notification;
