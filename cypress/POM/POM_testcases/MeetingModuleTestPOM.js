import Details from "../page";
var today = new Date();
var todaydatenumber = today.getDate();
var monthnumber = today.getMonth() + 1;
var yearnumber = today.getFullYear();

var todaydate = todaydatenumber;

var Dates = Details.date;
var Times = Details.time;
var editTime = Details.timeForEdit;

var sum1 = parseInt(editTime, 10);
var sum = sum1 + 1;
var m = sum.toString();

var sum1 = parseInt(Times, 10);
var sum = sum1 + 1;
var e = sum.toString();

var monthvar = Dates.substring(3, Dates.length - 5);
var yearvar = Dates.substring(Dates.length - 4, Dates.length);

var months = [
  "January",
  "Februry",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var mon = 0;
var month = months[monthnumber];

for (let i = 0; i < months.length; i++) {
  var x = months[i];
  console.log(x);
  if (months[i] == monthvar) {
    mon = i;
  }
}
var yeardata = yearvar - yearnumber;
var monthtimes = mon - monthnumber + 1;
var buttonpress = monthtimes + yeardata * 12;
console.log(buttonpress);

var DateValue = Dates.substring(0, 2);
var todaysValue = todaydate;

var DateValue = Dates.substring(0, 2);
var Datesuffix;
if (Dates.substring(0, 2) < "10") {
  DateValue = Dates.substring(1, 2);
}
if (DateValue >= 11 && DateValue <= 13) {
  Datesuffix = "th";
} else {
  switch (DateValue % 10) {
    case 1:
      Datesuffix = "st";
      break;

    case 2:
      Datesuffix = "nd";
      break;

    case 3:
      Datesuffix = "rd";
      break;

    default:
      Datesuffix = "th";
  }
}

class meetingCreditor {
  scheduleMeeting() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/creditor/meetings"
    );
    cy.get(".meetings-cards-wrap > :nth-child(1)").click({ force: true });
    cy.get(".justify-content-center > .form-group > .dropdown-toggle").click({
      force: true,
    });

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[1]/div/div/div/a"
    ).each(($el, index, $list) => {
      var ComName = $el.attr("data-value");
      cy.log(ComName);
      if (ComName == Details.compforMeeting) {
        cy.wrap($el).click();
      }
    });
    //date placeholder assertion
    cy.get(".date_group > #datePicker").should(
      "have.attr",
      "placeholder",
      "Date of Meeting"
    );

    cy.get(".date_group > #datePicker").click({ force: true });

    //year

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[1]/table/tbody/tr/td"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click();
      }
    });
    //time placeholder assertion

    cy.get(
      "form > .date_time_row > .time-select > .dropdown-toggle > .form-control"
    ).should("have.attr", "placeholder", "Time");

    cy.get(
      "form > .date_time_row > .time-select > .dropdown-toggle > .form-control"
    ).click({ force: true });

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a[contains(@data-time,"' +
        Times +
        '")]'
    ).should("not.have.attr", "class", "dropdown-item disabled booked");

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a'
    ).each(($el1, index, $list) => {
      var SelectTime = $el1.attr("data-time");
      cy.log(SelectTime);
      if (SelectTime == Times) {
        cy.wrap($el1).click({
          force: true,
        });
      }
    });

    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get("form > .schedule-wrap > .schedule > .date > .text").should(
      "have.text",
      Dates.substring(0, 2) +
        Datesuffix +
        " " +
        Dates.substring(3, Dates.length - 5)
    );
    cy.get("form > .schedule-wrap > .schedule > .time > .text").should(
      "have.text",
      Times.substring(0, 5) +
        " " +
        "-" +
        " " +
        Times.substring(Times.length - 5, Times.length)
    );
    cy.get(".button-wrap > .btn").should("be.visible");

    cy.get("form > .form-group > .form-control")
      .click()
      .type("Intern Project")
      .click();
    cy.get(".meeting-url")
      .click()
      .type(
        "https://us04web.zoom.us/j/77701229143?pwd=c3B6ZzZtMXdDVEN5OXAzVUFtdFByZz09"
      )
      .click();
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".input-wrap > input")
      .click()
      .type("vikacxio@gmail.com{enter}");
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
    // cy.reload();
  }
  editMeeting() {
    cy.get(".meetings-cards-wrap > :nth-child(4)").click({ force: true });
    cy.get(".justify-content-center > .form-group > .dropdown-toggle").click({
      force: true,
    });
    cy.get("#searchKeyword").should(
      "have.attr",
      "placeholder",
      "Search Company/Firm"
    );
    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[1]/div/div/div/a"
    ).each(($el, index, $list) => {
      var ComName = $el.attr("data-value");
      cy.log(ComName);
      if (ComName == Details.compforMeeting) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.get('.actions > .icon').click({ force: true });
    cy.get('.col-md-6 > .form-control').click({ force: true });
    cy.get("#modalDatePicker").click();

    //date

    cy.xpath(
      '//*[@id="agenda"]/div/div/div[2]/div/div[1]/div/div/div[1]/table/tbody/tr/td/div'
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });

    //time placeholder assertion

    cy.get(
      "form > .date_time_row > .time-select > .dropdown-toggle > .form-control"
    ).should("have.attr", "placeholder", "Time");

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/a'
    ).click({ force: true });

    cy.xpath(
      '//*[@id="agenda"]/div/div/div[2]/div/div[2]/div/div/a[contains(@data-time,"' +
        editTime +
        '")]'
    ).should("not.have.attr", "class", "dropdown-item disabled booked");

    cy.xpath('//*[@id="agenda"]/div/div/div[2]/div/div[2]/div/div/a').each(
      ($el1, index, $list) => {
        var SelectTime = $el1.attr("data-time");
        cy.log(SelectTime);
        if (SelectTime == editTime) {
          cy.wrap($el1).click({
            force: true,
          });
        }
      }
    );

    cy.get(
      ".show > .modal-dialog > :nth-child(1) > .modal-footer > .btn"
    ).click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
  }
  updateAgenda() {
    cy.xpath('//*[@id="root"]/div/div/div/div/div/a[3]').click({ force: true });
    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[1]/div/div/div/a"
    ).each(($el, index, $list) => {
      var ComName = $el.attr("data-value");
      cy.log(ComName);
      if (ComName == Details.compforMeeting) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.get(".date_group > #datePicker").click({ force: true });

    //year

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }
    //date

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[1]/table/tbody/tr/td/div"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.get(".button-wrap > .btn").click({ force: true });
    cy.wait(6000);
    //time placeholder assertion

    cy.xpath(
      "//*[@id='root']/div/div/div[2]/div/div[2]/ul/li/span[contains(@class,'time')]"
    ).each(($el3, index, $list) => {
      cy.log($el3.text());
      if ($el3.text() == editTime.substr(0, 5)) {
        //cy.log($el3.xpath)
        cy.log(index);
        var sum1 = parseInt(index, 10);
        var sum = sum1 + 1;
        cy.log(sum)
        var n = sum.toString();
        cy.log(n);
        var clickpath =
          '//*[@id="root"]/div/div/div/div/div/ul/li[' + n + "]/span[4]/span";
        cy.xpath(clickpath).click({ force: true });
      }
    });

    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > span"
    ).should("have.text", "Agenda");

    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > .schedule-wrap > .schedule > .date > .text"
    ).should(
      "have.text",
      Dates.substring(0, 2) +
        Datesuffix +
        " " +
        Dates.substring(3, Dates.length - 5)
    );
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > .schedule-wrap > .schedule > .time > .text"
    ).should(
      "have.text",
      editTime.substring(0, 5) +
        " " +
        "-" +
        " " +
        editTime.substring(editTime.length - 5, editTime.length)
    );
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
    ).should("be.visible");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
    ).click({ force: true });

    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control"
    )
      .click()
      .clear()
      .type("Intern Project Agenda")
      .click();
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control"
    )
      .click()
      .type(
        "https://us04web.zoom.us/j/77701229143?pwd=c3B6ZzZtMXdDVEN5OXAzVUFtdFByZz09"
      )
      .click();
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > .modal-footer > .btn"
    ).click({ force: true });

    cy.get(".meeting-title").should("have.text", "Agenda Updated");

    cy.get(".button-wrap > .btn").click({ force: true });
  }

  scheduleToday() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/creditor/meetings"
    );
    cy.get(".meetings-cards-wrap > :nth-child(1)").click({ force: true });

    cy.get(".justify-content-center > .form-group > .dropdown-toggle").click({
      force: true,
    });

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[1]/div/div/div/a"
    ).each(($el, index, $list) => {
      var ComName = $el.attr("data-value");
      cy.log(ComName);
      if (ComName == Details.compforMeeting) {
        cy.wrap($el).click();
      }
    });

    //date placeholder assertion
    cy.get(".date_group > #datePicker").should(
      "have.attr",
      "placeholder",
      "Date of Meeting"
    );
    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[1]/a'
    ).click({ force: true });

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[3]/table/tbody/tr/td/span"
    ).each(($el, index, $list) => {
      var Year = $el.text();
      cy.log(Year);
      if (Year == yearnumber) {
        cy.wrap($el).click({
          force: true,
        });
      }
    });

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[2]/table/tbody/tr/td/span[contains(@class, 'month')]"
    ).each(($el, index, $list) => {
      var MonthName = $el.text();
      cy.log(MonthName);
      if (MonthName == month.substring(3, 6)) {
        cy.wrap($el).click({
          force: true,
        });
      }
    });

    //date

    cy.xpath(
      "//*[@id='root']/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[1]/table/tbody/tr/td/div[contains(@class,'day today active')]"
    ).click({ force: true });

    //time placeholder assertion

    cy.get(
      "form > .date_time_row > .time-select > .dropdown-toggle > .form-control"
    ).should("have.attr", "placeholder", "Time");

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/a'
    ).click({ force: true });

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a'
    ).each(($el1, index, $list) => {
      var SelectTime = $el1.attr("data-time");
      cy.log(SelectTime);
      if (SelectTime == Times) {
        cy.wrap($el1).click({
          force: true,
        });
      }
    });

    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get("form > .schedule-wrap > .schedule > .date > .text").should(
      "have.text",
      todaysValue + Datesuffix + " " + months[monthnumber - 1]
    );
    cy.get("form > .schedule-wrap > .schedule > .time > .text").should(
      "have.text",
      Times.substring(0, 5) +
        " " +
        "-" +
        " " +
        Times.substring(Times.length - 5, Times.length)
    );
    cy.get(".button-wrap > .btn").should("be.visible");

    cy.get("form > .form-group > .form-control")
      .click()
      .type("Intern Project")
      .click();
    cy.get(".meeting-url")
      .click()
      .type(
        "https://us04web.zoom.us/j/77701229143?pwd=c3B6ZzZtMXdDVEN5OXAzVUFtdFByZz09"
      )
      .click();
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".input-wrap > input")
      .click()
      .type("vikacxio@gmail.com{enter}");
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");
  }

  cornerButton() {
    cy.get(".meetings-cards-wrap > :nth-child(1)").click({ force: true });
    cy.xpath('//*[@id="root"]/div/div/div/div/i').click({ force: true });

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[2]/div[2]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div/div/div/div/div[1]/table/tbody/tr/td/div"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath('//*[@id="over_flow"]/ul/li[' + m + "]/span[4]/span[1]").click({
      force: true,
    });
    cy.xpath('//*[@id="over_flow"]/ul/div[1]/form/div[2]/div[1]/button').click({
      force: true,
    });
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > span"
    ).should("have.text", "Agenda");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
    ).should("be.visible");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
    ).click({ force: true });
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control"
    )
      .clear()
      .type("Intern Project agenda update");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > .modal-footer > .btn"
    ).click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
  }
  editfromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");

    cy.xpath('//*[@id="root"]/div/div/div/div/i').click({ force: true });

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[2]/div[2]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div/div/div/div/div[1]/table/tbody/tr/td/div"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.xpath('//*[@id="over_flow"]/ul/li[' + m + "]/span[4]/span[1]").click({
      force: true,
    });
    cy.xpath('//*[@id="over_flow"]/ul/div[1]/form/div[1]/div[1]/button').should(
      "have.text",
      "Edit Date & Time"
    );
    cy.xpath('//*[@id="over_flow"]/ul/div[1]/form/div[1]/div[1]/button').click({
      force: true,
    });

    cy.get("#modalDatePicker").click({ force: true });

    cy.xpath(
      "//*[@id='agenda']/div/div/div[2]/div/div[1]/div/div/div[3]/table/tbody/tr/td/span"
    ).each(($el, index, $list) => {
      var Year = $el.text();
      cy.log(Year);
      if (Year == Dates.substring(Dates.length - 4, Dates.length)) {
        cy.wrap($el).click({
          force: true,
        });
      }
    });

    cy.xpath(
      "//*[@id='agenda']/div/div/div[2]/div/div[1]/div/div/div[2]/table/tbody/tr/td/span[contains(@class, 'month')]"
    ).each(($el, index, $list) => {
      var MonthName = $el.text();
      cy.log(MonthName);
      if (MonthName == Dates.substring(3, 6)) {
        cy.wrap($el).click({
          force: true,
        });
      }
    });

    //date

    cy.xpath(
      "//*[@id='agenda']/div/div/div[2]/div/div[1]/div/div/div[1]/table/tbody/tr/td"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });

    //time placeholder assertion

    cy.get(".dropdown-toggle > .form-control").click({ force: true });

    cy.xpath('//*[@id="agenda"]/div/div/div[2]/div/div[2]/div/div/a').each(
      ($el1, index, $list) => {
        var SelectTime = $el1.attr("data-time");
        cy.log(SelectTime);
        if (SelectTime == Times) {
          cy.wrap($el1).click({ force: true });
        }
      }
    );

    cy.get(
      ".show > .modal-dialog > :nth-child(1) > .modal-footer > .btn"
    ).click({ force: true });
    cy.get(".meeting-title").should("have.text", "Meeting Scheduled");

    //agenda
  }

  agendafromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");

    cy.xpath('//*[@id="root"]/div/div/div/div/i').click({ force: true });

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[2]/div[2]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div/div/div/div/div[1]/table/tbody/tr/td/div"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });
    cy.xpath('//*[@id="over_flow"]/ul/li[' + e + "]/span[4]/span[1]").click({
      force: true,
    });
    cy.xpath('//*[@id="over_flow"]/ul/div[1]/form/div[2]/div[1]/button').click({
      force: true,
    });
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > span"
    ).should("have.text", "Agenda");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
    ).should("be.visible");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
    ).click({ force: true });
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control"
    )
      .clear()
      .type("Intern Project agenda update");
    cy.get(
      ".show > .modal-dialog > :nth-child(1) > .modal-footer > .btn"
    ).click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
  }
  enviteefromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");

    cy.xpath('//*[@id="root"]/div/div/div/div/i').click({ force: true });

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[2]/div[2]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div/div/div/div/div[1]/table/tbody/tr/td/div"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });
    cy.xpath('//*[@id="over_flow"]/ul/li[' + e + "]/span[4]/span[1]").click({
      force: true,
    });

    //edit envitee
    cy.xpath('//*[@id="over_flow"]/ul/div[1]/form/div[2]/div[2]/button').click({
      force: true,
    });
    cy.get(
      ":nth-child(2) > #invitees > .modal-dialog > .invitees > :nth-child(1) > .modal-title > span"
    ).should("have.text", "InviteeList");
    cy.get(".modal-body.section-to-print > .edit_agenda > .icon").should(
      "be.visible"
    );
    cy.get(".modal-body.section-to-print > .edit_agenda > .icon").click({
      force: true,
    });
    cy.get(".modal-body.section-to-print > .form-group > .form-control").type(
      "test@hotmail.com{enter}"
    );
    cy.get(
      ":nth-child(2) > #invitees > .modal-dialog > .invitees > .modal-footer > .btn"
    ).click({ force: true });
  }
  cancelfromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");

    cy.xpath('//*[@id="root"]/div/div/div/div/i').click({ force: true });

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[2]/div[2]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div/div/div/div/div[1]/table/tbody/tr/td/div"
    ).each(($el, index, $list) => {
      var DateName = $el.text();
      cy.log(DateName);
      if (DateName == DateValue) {
        cy.wrap($el).click({ force: true });
      }
    });
    cy.xpath('//*[@id="over_flow"]/ul/li[' + e + "]/span[4]/span[1]").click({
      force: true,
    });

    //cancel meeting
    cy.xpath('//*[@id="over_flow"]/ul/div[1]/form/div[1]/div[2]/button').click({
      force: true,
    });
    cy.get(
      ".show > .modal-dialog > .modal-content > .modal-header > .modal-title > span"
    ).should("have.text", "Cancel Meeting");
    cy.get(
      ".show > .modal-dialog > .modal-content > .modal-body > .text-center"
    ).should("have.text", "Are you sure you want to cancel this meeting?");
    cy.get(
      ".show > .modal-dialog > .modal-content > .modal-footer > .btn"
    ).should("be.be.visible");
    cy.get(
      ".show > .modal-dialog > .modal-content > .modal-footer > .btn"
    ).click({ force: true });
  }
}
export default meetingCreditor;
