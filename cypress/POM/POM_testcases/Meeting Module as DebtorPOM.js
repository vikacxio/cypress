import Details from "../page";
var empty = require("is-empty");

var today = new Date();
var todaydatenumber = today.getDate();
var monthnumber = today.getMonth() + 1;
var yearnumber = today.getFullYear();

var todaydate = todaydatenumber;

var Dates = Details.date;
var Time = Details.time;
var editTime = Details.timeForEdit;

var sum1 = parseInt(editTime, 10);
var sum = sum1 + 1;
var m = sum.toString();

var sum1 = parseInt(Time, 10);
var sum = sum1 + 1;
var n = sum.toString();

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
console.log(month);

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
var Datesuffix;
var DatesuffixToday;

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


if (todaysValue >= 11 && todaysValue <= 13) {
  DatesuffixToday = "th";
} else {
  switch (todaysValue % 10) {
    case 1:
      DatesuffixToday = "st";
      break;

    case 2:
      DatesuffixToday = "nd";
      break;

    case 3:
      DatesuffixToday = "rd";
      break;

    default:
      DatesuffixToday = "th";
  }
}


class meetingDebtor {
  scheduleMeeting() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor/meetings"
    );
    cy.get(".meetings-cards-wrap > :nth-child(1)").click({ force: true });

    //date placeholder assertion
    cy.get(".date_group > #datePicker").should(
      "have.attr",
      "placeholder",
      "Date of Meeting"
    );
    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[1]/a'
    ).click();

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[1]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click();
    }

    //date

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

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/a'
    ).click();

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a[contains(@data-time,"' +
        Time +
        '")]'
    ).should("not.have.attr", "class", "dropdown-item disabled booked");

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a'
    ).each(($el1, index, $list) => {
      var SelectTime = $el1.attr("data-time");
      cy.log(SelectTime);
      if (SelectTime == Time) {
        cy.wrap($el1).click({
          force: true,
        });
      }
    });

    cy.get(".button-wrap > .btn").click();
    cy.get("form > .schedule-wrap > .schedule > .date > .text").should(
      "have.text",
      Dates.substring(0, 2) +
        Datesuffix +
        " " +
        Dates.substring(3, Dates.length - 5)
    );
    cy.get("form > .schedule-wrap > .schedule > .time > .text").should(
      "have.text",
      Time.substring(0, 5) +
        " " +
        "-" +
        " " +
        Time.substring(Time.length - 5, Time.length)
    );
    cy.get(".button-wrap > .btn").should("be.visible");

    cy.get("form > .form-group > .form-control")
      .click()
      .type("Intern Project fhdfhd")
      .click();
    cy.get(".meeting-url")
      .click()
      .type(
        "https://us04web.zoom.us/j/77701229143?pwd=c3B6ZzZtMXdDVEN5OXAzVUFtdFByZz09"
      )
      .click();
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".input-wrap > input")
      .click({ force: true })
      .type("vikahghfcxio@gmail.com{enter}");
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get(".button-wrap > .btn").click({ force: true });
  }
  editMeeeting() {
    cy.get(".meetings-cards-wrap > :nth-child(4)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Edit Meeting");

    var selection = [];
    var value;
    //var dateselection

    cy.xpath(
      '//*[@id="root"]/div/div/div[2]/div/div/span[contains(@class,"date")]'
    ).each(($el1, index, $list) => {
      selection.push($el1.text());

      for (let i = 0; i < selection.length; i++) {
        var dateselection = selection[i] + " " + selection[i + 1];

        if (dateselection == Dates.substr(0, Dates.length - 5)) {
          value = Math.ceil((i + 1) / 2);
          console.log(value, "val");
        }
        i = ++i;
      }

      if (!empty(value)) {
        var sum3 = value * 2;
        var x = sum3.toString();

        var toggle =
          "//*[@id='root']/div/div/div[2]/div/div[" +
          x +
          "]/ul/li/span[contains(@class,'time')]";
        cy.xpath(toggle).each(($el3, index, $list) => {
          cy.log($el3.text());
          if ($el3.text() == Time.substr(0, 5)) {
            cy.log(index);
            var sum1 = parseInt(index, 10);
            var sum = sum1 + 1;
            var n = sum.toString();
            var clickpath =
              '//*[@id="root"]/div/div/div[2]/div/div[' +
              x +
              "]/ul/li[" +
              n +
              "]/span[4]/span";
            cy.xpath(clickpath).click({ force: true });

            var editbutton =
              "//*[@id='root']/div/div/div[2]/div/div[" +
              x +
              "]/ul/div[" +
              n +
              "]/form/div[1]/div[1]/button";
            cy.xpath(editbutton).click({ force: true });
          }
        });
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
    cy.xpath('//*[@id="root"]/div/div/div[1]/div/div/a[3]/span/i').click({
      force: true,
    });
    cy.get(".meeting-body > .text-center").should(
      "have.text",
      "Select a scheduled meeting to update agenda for from the list alongside or select a date and time of the meeting from below."
    );

    var selection = [];
    var value;

    cy.xpath(
      '//*[@id="root"]/div/div/div[2]/div/div/span[contains(@class,"date")]'
    ).each(($el1, index, $list) => {
      selection.push($el1.text());

      for (let i = 0; i < selection.length; i++) {
        var dateselection = selection[i] + " " + selection[i + 1];

        if (dateselection == Dates.substr(0, Dates.length - 5)) {
          value = Math.ceil((i + 1) / 2);
          console.log(value, "val");
        }
        i = ++i;
      }

      if (!empty(value)) {
        var sum3 = value * 2;
        var x = sum3.toString();

        var toggle =
          "//*[@id='root']/div/div/div[2]/div/div[" +
          x +
          "]/ul/li/span[contains(@class,'time')]";
        cy.xpath(toggle).each(($el3, index, $list) => {
          cy.log($el3.text());
          if ($el3.text() == Time.substr(0, 5)) {
            cy.log(index);
            var sum1 = parseInt(index, 10);
            var sum = sum1 + 1;
            var n = sum.toString();
            var clickpath =
              '//*[@id="root"]/div/div/div[2]/div/div[' +
              x +
              "]/ul/li[" +
              n +
              "]/span[4]/span";
            cy.xpath(clickpath).click({ force: true });

            cy.get(
              ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > .schedule-wrap > .schedule > .time > .text"
            ).should(
              "have.text",
              Time.substring(0, 5) +
                " " +
                "-" +
                " " +
                Time.substring(Time.length - 5, Time.length)
            );
            cy.get(
              ".show > .modal-dialog > :nth-child(1) > :nth-child(1) > .modal-title > span"
            ).should("have.text", "Agenda");
            cy.get(
              ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
            ).should("be.visible");
            cy.get(
              ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > .edit_agenda > .icon"
            ).click();
            cy.get(
              ".show > .modal-dialog > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control"
            )
              .clear()
              .type("Intern Project agenda update");
            cy.get(
              ".show > .modal-dialog > :nth-child(1) > .modal-footer > .btn"
            ).click();
            cy.get(".button-wrap > .btn").click({ force: true });
          }
        });
      }
    });
  }

  scheduleToday() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor/meetings"
    );
    cy.get(".meetings-cards-wrap > :nth-child(1)").click({ force: true });

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
        cy.wrap($el).click({ force: true });
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
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a[contains(@data-time,"' +
        Time +
        '")]'
    ).should("not.have.attr", "class", "dropdown-item disabled booked");

    cy.xpath(
      '//*[@id="root"]/div/div/div[1]/div/div[2]/form/div[2]/div[2]/div/div/a'
    ).each(($el1, index, $list) => {
      var SelectTime = $el1.attr("data-time");
      cy.log(SelectTime);
      if (SelectTime == Time) {
        cy.wrap($el1).click({
          force: true,
        });
      }
    });

    cy.get(".button-wrap > .btn").click({ force: true });
    cy.get("form > .schedule-wrap > .schedule > .date > .text").should(
      "have.text",
      todaysValue + DatesuffixToday + " " + months[monthnumber - 1]
    );
    cy.get("form > .schedule-wrap > .schedule > .time > .text").should(
      "have.text",
      Time.substring(0, 5) +
        " " +
        "-" +
        " " +
        Time.substring(Time.length - 5, Time.length)
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
  }
  editFromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");

    cy.xpath('//*[@id="root"]/div/div/div[2]/div[1]/i').click({ force: true });

    for (let i = 0; i < buttonpress; i++) {
      cy.xpath(
        '//*[@id="root"]/div/div/div[2]/div[2]/div/div/div[1]/table/thead/tr[1]/th[3]/a/i'
      ).click({ force: true });
    }

    cy.xpath(
      "//*[@id='root']/div/div/div[2]/div[2]/div/div/div[1]/table/tbody/tr/td/div"
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
    cy.get(".meeting-title").should("have.text", "Meeting Scheduled");
  }
  rightCornerButton() {
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
  agendaFromJoin() {
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
  enviteeFromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");
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
    cy.get(".modal-body.section-to-print > .edit_agenda > .icon").click();
    cy.get(".modal-body.section-to-print > .form-group > .form-control").type(
      "test@hotmail.com{enter}"
    );
    cy.get(
      ":nth-child(2) > #invitees > .modal-dialog > .invitees > .modal-footer > .btn"
    ).click();
  }
  cancelFromJoin() {
    cy.get(".meetings-cards-wrap > :nth-child(2)").click({ force: true });
    cy.get(".meeting-title").should("have.text", "Join a Meeting");
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
  compNameJoin() {
    cy.url().should(
      "eq",
      "http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor/meetings"
    );
    cy.get(".meetings-cards-wrap > :nth-child(1)").click({ force: true });

    //date placeholder assertion
    cy.get(".date_group > #datePicker").should(
      "have.attr",
      "placeholder",
      "Date of Meeting"
    );

    cy.get(".firms-name").should("have.text", "DALMIA BHARAT SUGAR AND INDUSTRIES LIMITED");
  }
}
export default meetingDebtor;
