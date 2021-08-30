import Details from "../page";
class creditorFilters {
  indfilter() {
    cy.get(".table-grid-row > :nth-child(2) > .filter").click();

    cy.xpath('//*[@id="industries"]/a').each(($el2, index, $list) => {
      var IndustryName = $el2.attr("name");
      cy.log(IndustryName);
      if (IndustryName == Details.indName) {
        cy.wrap($el2).click({ force: true });
      }
    });

    cy.xpath(
      "//*[@id='companiesList']/div/div/div/div[contains(@class, 'table-grid-row')]"
    ).each(($el2, index, $list) => {
      if ($el2.attr("data-industry") == Details.indName) {
        cy.wrap($el2).should("have.attr", "data-industry", Details.indName);
      }
    });

    cy.xpath('//*[@id="industries"]/a').each(($el2, index, $list) => {
      var IndustryName = $el2.attr("name");
      cy.log(IndustryName);
      if (IndustryName == Details.indName) {
        cy.wrap($el2).click({ force: true });
      }
    });
  }
  stressFilter() {
    cy.get(":nth-child(3) > .dropdown-toggle").click({ force: true });

    cy.xpath('//*[@id="stress"]/a').each(($el, index, $list) => {
      var StressType = $el.attr("data-filter-by-stress");
      if (StressType == Details.sType) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath(
      "//*[@id='companiesList']/div/div/div/div/div/div/div[contains(@class, 'progress-bar bg-danger')]/span"
    ).each(($el2, index, $list) => {
      if ($el2.attr("data-stress-type") == Details.stress_type) {
        cy.wrap($el2).should(
          "have.attr",
          "data-stress-type",
          Details.stress_type
        );
      }
    });

    cy.get(":nth-child(3) > .dropdown-toggle").click({ force: true });
    cy.xpath('//*[@id="stress"]/a').each(($el, index, $list) => {
      var StressType = $el.attr("data-filter-by-stress");
      if (StressType == Details.sType) {
        cy.wrap($el).click({ force: true });
      }
    });
  }
  DataFilter() {
    cy.get(":nth-child(4) > .dropdown-toggle").click({ force: true });

    cy.xpath('//*[@id="data"]/a').each(($el, index, $list) => {
      var DataType = $el.attr("data-filter-by-data");
      if (DataType == Details.dType) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath("//*[@id='companiesList']/div/div/div/div/div[4]").each(
      ($el2, index, $list) => {
        if ($el2.attr("data-data") == Details.COMPLETEDATA) {
          cy.wrap($el2).should("have.attr", "data-data", Details.COMPLETEDATA);
        }
      }
    );

    cy.xpath('//*[@id="data"]/a').each(($el, index, $list) => {
      var DataType = $el.attr("data-filter-by-data");
      if (DataType == Details.dType) {
        cy.wrap($el).click({ force: true });
      }
    });
    //cy.eyesClose()
  }
  runModalFilter() {
    cy.get(":nth-child(5) > .dropdown-toggle").click({ force: true });

    cy.xpath('//*[@id="model"]/a').each(($el3, index, $list) => {
      var ModelType = $el3.attr("data-filter-by-model");
      if (ModelType == Details.mType) {
        cy.wrap($el3).click({ force: true });
      }
    });

    cy.xpath("//*[@id='companiesList']/div/div/div/div/div/div/input").each(
      ($el2, index, $list) => {
        cy.wrap($el2).should("have.attr", Details.checked);
      }
    );

    cy.get(":nth-child(5) > .dropdown-toggle").click({ force: true });
    cy.xpath('//*[@id="model"]/a').each(($el3, index, $list) => {
      var ModelType = $el3.attr("data-filter-by-model");
      if (ModelType == Details.mType) {
        cy.wrap($el3).click({ force: true });
      }
    });
  }
  statusFilter() {
    cy.get(":nth-child(6) > .dropdown-toggle").click({ force: true });

    cy.xpath('//*[@id="status"]/a').each(($el4, index, $list) => {
      var StatusType = $el4.attr("data-filter-by-status");
      if (StatusType == Details.statType) {
        cy.wrap($el4).click({ force: true });
      }
    });

    cy.xpath("//*[@id='companiesList']/div/div/div/div/div[6]/span/a").each(
      ($el2, index, $list) => {
        if ($el2.text() == Details.statusreport) {
          cy.wrap($el2).should("have.text", Details.statusreport);
        }
      }
    );

    cy.xpath('//*[@id="status"]/a').each(($el3, index, $list) => {
      var StatusType = $el3.attr("data-filter-by-status");
      if (StatusType == Details.statType) {
        cy.wrap($el3).click({ force: true });
      }
    });
  }

  sideDOtButton() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';
    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();
        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click({ force: true });
        cy.xpath(pathfortoggle).should("be.visible");
      }
    });
  }
  newsIcon() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';

    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();
        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click({ force: true });

        var pathforbuttons =
          "//*[@id='companiesList']/div/div/div[" +
          n +
          "]/div[2]/div[1]/div[1]/div[3]/ul/li/a[contains(@data-title,'News')]";
        cy.xpath(pathforbuttons).click({ force: true });

        cy.url().should(
          "eq",
          "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/news-all#!"
        );
        cy.get(".section-title").should("have.text", "News");
        cy.get(".search-filed").should("have.attr", "value", Details.compName);
        cy.get(".navbar-brand").click();
      }
    });
  }

  notificationIcon() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';

    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        //cy.log($el3.xpath)
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();
        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click();

        //news button verify
        var pathforbuttons =
          '//*[@id="companiesList"]/div/div/div[' +
          n +
          ']/div[2]/div[1]/div[1]/div[3]/ul/li/a[contains(@data-title,"Notifications")]';
        cy.xpath(pathforbuttons).click({ force: true });

        cy.url().should(
          "eq",
          "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/all-notifications#!"
        );
        cy.xpath('//*[@id="root"]/header/nav/a/span[2]').should(
          "have.text",
          "Notifications"
        );
        cy.get(".search-filed").should("have.attr", "value", Details.compName);
        cy.get(".navbar-brand-logo").click({ force: true });
      }
    });
  }
  TaskIcon() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';

    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();

        var pathforbuttons =
          '//*[@id="companiesList"]/div/div/div[' +
          n +
          ']/div[2]/div[1]/div[1]/div[3]/ul/li/a[contains(@data-title,"Tasks")]';
        cy.xpath(pathforbuttons).click({ force: true });

        cy.url().should(
          "eq",
          "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/creditor#!"
        );

        cy.get(".section-title").should("have.text", "Tasks");
      }
    });
  }
  meetingIcon() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';
    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();
        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click({ force: true });

        var pathforbuttons =
          '//*[@id="companiesList"]/div/div/div[' +
          n +
          ']/div[2]/div[1]/div[1]/div[3]/ul/li/a[contains(@data-title,"Meeting Room")]';
        cy.xpath(pathforbuttons).click({ force: true });

        cy.url().should(
          "eq",
          "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/creditor/meetings#!"
        );
        cy.get(".section-title").should("have.text", "Meetings");
      }
    });

    cy.get(".navbar-brand").click();
  }
  archiveButton() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';
    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();
        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click({ force: true });

        var pathforbuttons =
          '//*[@id="companiesList"]/div/div/div[' +
          n +
          ']/div[2]/div[1]/div[1]/div[3]/ul/li/a[contains(@data-title,"Archive")]';
        cy.xpath(pathforbuttons).click();
        cy.get('[data-title="Archived"] > .icon').click();

        cy.xpath("//*[@id='companiesList']/div/div/div/div/div/i").each(
          ($el2, index, $list) => {
            if ($el2.attr("data-data") == "Unarchive") {
              cy.wrap($el2).should("have.attr", "data-title", "Unarchive");
            }
          }
        );
        cy.get('[data-title="Archived"] > .icon').click();
      }
    });
  }

  priorityButton() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';
    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();
        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click({ force: true });

        var pathforbuttons =
          '//*[@id="companiesList"]/div/div/div[' +
          n +
          ']/div[2]/div[1]/div[1]/div[1]/ul/li/a[contains(@data-title,"Add to Priority")]';
        cy.xpath(pathforbuttons).click();

        cy.get('[data-title="Priority Companies"] > .icon').click();

        cy.xpath("//*[@id='companiesList']/div/div/div/div[1]").each(
          ($el2, index, $list) => {
            cy.wrap($el2).should("have.attr", "data-fav", "true");
          }
        );

        cy.get('[data-title="Priority Companies"] > .icon').click();
      }
    });
  }
  folderIcon() {
    var path = '//*[@id="companiesList"]/div/div/div/div/';
    var pathforcompany = path + "div[2]";

    cy.xpath(pathforcompany).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == Details.compName) {
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        var n = sum.toString();

        var pathfortoggle =
          '//*[@id="companiesList"]/div/div/' +
          "div[" +
          n +
          "]" +
          "/div[1]/div[7]/a";

        cy.xpath(pathfortoggle).click({ force: true });

        var pathforbuttons =
          '//*[@id="companiesList"]/div/div/div[' +
          n +
          ']/div[2]/div[1]/div[1]/div[1]/ul/li/a[contains(@data-title,"Folders")]';
        cy.xpath(pathforbuttons).click();
        cy.xpath(
          '//*[@id="SOLVENDO_27342"]/div/div/div/ul/li/div/div/a[3]'
        ).click();
        cy.get('.left > [data-title="Folders"] > .icon').click();
        cy.xpath(
          '//*[@id="c_dashboard"]/div/div[2]/div[2]/div[1]/div/div/a[3]'
        ).click();

        cy.xpath('//*[@id="companiesList"]/div/div/div').should(
          "have.attr",
          "class",
          "table-grid-row-group active "
        );
      }
    });
  }
  searchIcon() {
    cy.get(".toggle-search > .icon").should("be.visible");
    cy.get(".toggle-search > .icon")
      .click()
      .type(Details.compName);
  }
  sort() {
    cy.get(".dropdown-toggle > .icon").should("be.visible");
    cy.xpath('//*[@id="sort"]/a').each(($el, index, $list) => {
      if ($el.text() == "Ascending") {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath('//*[@id="sort"]/a').each(($el, index, $list) => {
      if ($el.attr("data-filter-by-sort") == "NAMEASC") {
        cy.wrap($el).should("have.attr", "class", "dropdown-item active");
      }
    });
  }
  printIcon() {
    cy.get('[data-title="Print"] > .icon').click();
    cy.xpath('//*[@id="c_dashboard"]/div/div/div/div[2]/button[3]/i').should(
      "have.attr",
      "class",
      "icon printer"
    );
  }
}
export default creditorFilters;
