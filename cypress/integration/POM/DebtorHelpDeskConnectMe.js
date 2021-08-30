///<reference types="cypress-xpath" />
import info1 from '../../fixtures/debtorhelpdeskconnetdata.json'

var today = new Date();
var monthnumber = today.getMonth() + 1;
var yearnumber = today.getFullYear();


class YearData {
    get yearname() {
        return "23 October 2021"
    }
}
var yr = new YearData();
var Dates = yr.yearname;
//selecting dates 1 or 2 digit
var datevalue = Dates.substring(0, 2)
if (Dates.substring(0, 2) < "10") {
    datevalue = Dates.substring(1, 2);
}

var monthvar = Dates.substring(3, Dates.length - 5);
var yearvar = Dates.substring(Dates.length - 4, Dates.length)
console.log(monthvar);
console.log(yearvar);
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
for (let i = 0; i < months.length; i++) {
    var x = months[i];
    console.log(x);
    if (months[i] == monthvar) {
        mon = i;
    }
}

var yeardata = yearvar - yearnumber;
var monthtimes = mon - monthnumber + 1;
var buttonpress = monthtimes + (yeardata * 12)
console.log(buttonpress)

class DebtorHelpDeskConnectMe {
    clickOnConnectMe() {
        cy.xpath('//a[text()="Connect Me "]').scrollIntoView().click({ force: true })

    }
    scheduleDate() {
        cy.contains(' Sure,')
        cy.contains('Please select your preferred date and time to')
        cy.contains('schedule a call from SolveX.')
        cy.xpath("//i[@class='icon arrow-down']").click({ force: true })

        //select Month& Year
        for (let i = 0; i < buttonpress + 1; i++) {
            cy.xpath("//html/body/div[4]/div[3]/div/div/div[1]/div[1]/button[2]/span[1]").click({ force: true })
        }

        cy.xpath('//div[@class="MuiPickersSlideTransition-transitionContainer MuiPickersCalendar-transitionContainer"]/div/div/div')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                if (dateName == datevalue) {

                    // cy.wrap($el).click()
                    $el.click()
                }

            })
    }
    selectTime() {
        cy.get('#time').click()
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')
                cy.log(seltime)
                if (seltime == info1.time) {
                    expect(seltime).to.equal(info1.time)
                    cy.wrap($el).click({ force: true })

                    cy.xpath('//button[text()="Confirm"]').click({ force: true })
                    cy.wait(3000)
                    // cy.get('.button_wrap > .btn').click({force:true})

                }
            })

    }
    selectTimeNotAvailable() {
        cy.get('#time').click()
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')
                cy.log(seltime)
                if (seltime == info1.time) {
                    expect(seltime).to.not.equal(info1.wrongtime)
                    cy.log('Please select time after 11:00 and before 18:00')

                    // cy.get('.button_wrap > .btn').click({force:true})

                }
            })

    }
    currentDateandTime() {
        var today = new Date();
        var currentdate = today.getDate()
        cy.log(currentdate)

        var time = today.getHours() + " to " + (today.getHours() + 1);

        var timemsg = (today.getHours() + 4);
        cy.log(time)
        cy.get('.MuiIconButton-label > .icon').click()
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                if (dateName == currentdate) {

                    //  cy.wrap($el).click()
                    $el.click({ force: true })
                }
            })
        //selecting time
        cy.get('#time').click({ force: true })
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')
                // cy.log(seltime)
                if (seltime != time) {
                    cy.log('You can Schedule a call after 4 hrs but before 18:00pm otherwise select another Day')
                    return false;

                }
                else {

                    cy.wrap($el).click({ force: true })
                    cy.xpath('//button[text()="Confirm"]').click()
                }
            })
    }

    clickOnNoted() {
        cy.contains('You have scheduled a call from')
        cy.contains('SolveX on ')
        cy.xpath('//button[text()="Noted"]').click()
        cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor#!')
    }
    resheduleCall() {
        cy.xpath('//p[text()="Reschedule it"]').click()
    }
    notedDateAndTime() {

        var datesuffix;


        if (datevalue >= 11 && datevalue <= 13) {
            datesuffix = "th";
        } else {
            switch (datevalue % 10) {
                case 1:
                    datesuffix = "st";
                    break;

                case 2:
                    datesuffix = "nd";
                    break;

                case 3:
                    datesuffix = "rd";
                    break;

                default:
                    datesuffix = "th";
            }
        }

        // var demodate = info1.date;
        //  var demodate=Dates.substring(0,2);
        var demomonth = Dates.substring(3, 19)
        var demotime = info1.time;



        cy.xpath("//div[@role='dialog']//strong[1]")
            .each(($el, index, $list) => {

                var dt = $el.text()
                cy.log(dt)
                // expect(' SolveX on  ' + demodate + 'th ' + info1.month + ' ' + info1.Year).to.equal(dt)
                expect(' SolveX on  ' + datevalue + datesuffix + ' ' + demomonth).to.equal(dt)
                cy.log(dt)
            })

        var tm = cy.xpath("//div[@role='dialog']//strong[2]")
            .each(($el, index, $list) => {
                var tm = $el.text()
                expect(demotime).to.equal(tm)
                cy.log(tm)
            })
    }
}
export default DebtorHelpDeskConnectMe