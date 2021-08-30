///<reference types="cypress-xpath" />
import info from '../../fixtures/bookADemoData.json'
import faker from 'faker'
//var faker = require('faker');
var fakename = faker.name.findName();
var fakeemail = faker.internet.email();
var fakeemail2 = faker.internet.email();
var fakemobile = faker.random.number({ min: 8000000000, max: 9999999999 })

var today = new Date();
var monthnumber = today.getMonth() + 1;
var yearnumber = today.getFullYear();


class YearData {
    get yearname() {
        return "29 October 2021"
    }
}
var yr = new YearData();
var Dates = yr.yearname;

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
var monthtimes = mon - monthnumber + 1;//+1
var buttonpress = monthtimes + (yeardata * 12)
console.log(buttonpress)

class BookADemoPage {
    get dateData() {
        return "11 September 2021";
    }
    visit() {
        cy.visit('/')
    }
    clickOnBookDemo() {
       cy.xpath("//button[@id='demo']").scrollIntoView().click({ force: true })
    }
    verifyTextcase0() {
        cy.get('button[class="btn btn-secondary btn-lg"]').scrollIntoView().click({ force: true })
        cy.contains('Hello').should('exist')
        cy.contains('Please share your name and email ID to help').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('#name').should('have.a.attr', 'placeholder', 'Your Name')
        const nm = cy.get('#name').type(fakename)
        cy.xpath('//div[@class="side-box-extra side-box-title"]')
            .each(($el, index, $list) => {
                var actualname = nm;
                var expname = $el.text()
                if (actualname == expname) {
                    expect(expname).to.equal(actualname)
                }
            })

        cy.get('#email').should('have.a.attr', 'placeholder', 'Your Email ID')
        cy.get('#mobile').should('have.a.attr', 'placeholder', 'Your Mobile Number')
    }
    verifyButtoncase01() {
        cy.visit('/')
        cy.get('button[class="btn btn-secondary btn-lg"]').scrollIntoView().click({ force: true })
        cy.get('#email').should('have.a.attr', 'placeholder', 'Your Email ID')
        cy.get('#confirmName').should('be.disabled')
    }
    verifyButtoncase1() {
        cy.visit('/')
        cy.get('button[class="btn btn-secondary btn-lg"]').scrollIntoView().click({ force: true })
        cy.get('#email').should('have.a.attr', 'placeholder', 'Your Email ID')
        cy.get('#email').type(fakeemail)
        cy.get('#confirmName').should('be.disabled')
    }
    verifyButtonCase2() {
        cy.visit('/')
        cy.get('button[class="btn btn-secondary btn-lg"]').scrollIntoView().click({ force: true })
        cy.get('#name').should('have.a.attr', 'placeholder', 'Your Name')
        cy.get('#name').type(fakename)
        cy.get('#confirmName').should('be.disabled')
    }
    verifyConfirmButtonEnterNameEmailMobileCase3() {
        cy.visit('/')
        cy.get('button[class="btn btn-secondary btn-lg"]').scrollIntoView().click({ force: true })
        cy.contains('Please share your name and email ID to help').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('#name').should('have.a.attr', 'placeholder', 'Your Name')
        cy.get('#name').type(fakename)
        cy.get('#email').should('have.a.attr', 'placeholder', 'Your Email ID')
        cy.get('#email').type(fakeemail)
        cy.get('#mobile').should('have.a.attr', 'placeholder', 'Your Mobile Number')
        cy.get('#mobile').type(fakemobile)
        cy.get('#confirmName').click({ force: true })
    }

    EnterDateTimeDemoMsgToCheckConfirmButtonCase4() {//first call case 3
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('.MuiIconButton-label > .icon').click({ force: true })




        //  console.log(Date.substring(3, Date.length()));
        //select Month& Year
        for (let i = 0; i < buttonpress+1; i++) {
            cy.xpath("//html/body/div[4]/div[3]/div/div/div[1]/div[1]/button[2]/span[1]").click({ force: true })
        }
        //Dates.substring(0,2)

        //Select Date
        cy.wait(1000)
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div/button/span/p')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                //info.singledigitdate
                //cy.log(datevalue)
                if (dateName == datevalue) {
                    cy.wrap($el).click()
                    //  $el.click({force:true})
                }
            })
        //selecting time
        cy.get('#time').click({ force: true })
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')

                if (seltime == info.seltimecorrectcase4) {

                    cy.wrap($el).click({ force: true })
                }

            })

        cy.get('#demoRequest').click({ force: true }).type('should be completed soon')
        cy.get('#companyPANStatus').click({ force: true })
        cy.contains('You have scheduled a demo from Solvendo').should('exist')

    }

    EnterDateTimeDemoMsgToCheckConfirmButtonCase4Disabled() {//first call case 3
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('.MuiIconButton-label > .icon').click({ force: true })




        //  console.log(Date.substring(3, Date.length()));
        //.substring(3,Date.length())
        //select Month& Year
        for (let i = 0; i < buttonpress; i++) {
            cy.xpath("//html/body/div[4]/div[3]/div/div/div[1]/div[1]/button[2]/span[1]").click({ force: true })
        }
        //Dates.substring(0,2)

        //Select Date
       cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div/button/span/p')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                //info.singledigitdate
                if (dateName == datevalue) {
                    //cy.wrap($el).click()
                   $el.click({force:true})
                }
            })
        //selecting time
        cy.get('#time').click({ force: true })
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')

                if (seltime == info.seltimecorrectcase4) {

                    cy.wrap($el).click({ force: true })
                }

            })

        cy.get('#demoRequest').click({ force: true })
        cy.get('#companyPANStatus').should('be.disabled')
        cy.xpath('//i[@class="icon close-lg"]').click({ force: true })
       
    }
    reshuduleDateandTimeCase5() {
        cy.get('.side-box-buttons > span').click()
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        //selecting date
        cy.get('.MuiIconButton-label > .icon').click()

        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                if (dateName == info.seldate) {
                    cy.wrap($el).click({ force: true })
                }
            })
        //selecting time
        cy.get('#time').click({ force: true })
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el1, index, $list) => {
                var seltime = $el1.attr('data-time')

                if (seltime == info.seltimedatarescase5) {

                    cy.wrap($el1).click({ force: true })
                }

            })

        cy.get('#demoRequest').should('have.a.attr', 'placeholder', 'What are your expectations from the demo?')
        cy.get('#companyPANStatus').should('be.disabled')
        cy.get('#demoRequest').type("demo msg")
        cy.get('#companyPANStatus').click()
        cy.contains('You have scheduled a demo from Solvendo').should('exist')
        cy.get('.close_modal > .icon').click()
    }
    currentDateAndTimeCase6() {//first call case3 method
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        var today = new Date();
        var currentdate = today.getDate()
        cy.log(currentdate)

        var time = today.getHours() + " to " + (today.getHours() + 1);

        var timemsg = (today.getHours() + 4);
        cy.log(time)
      /*  cy.get('.MuiIconButton-label > .icon').click()
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                if (dateName == currentdate) {

                    cy.wrap($el).click()
                }
            })*/


        //selecting time
        cy.get('#time').click({ force: true })
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')
                // cy.log(seltime)
                if (seltime != time) {
                    cy.log('Cannot book Demo before ' + timemsg)
                    return false;

                }
                else {

                    cy.wrap($el).click({ force: true })
                    cy.get('#demoRequest').type('should be completed soon')
                    cy.get('#companyPANStatus').click({ force: true })
                    cy.contains('You have scheduled a demo from Solvendo').should('exist')
                }
            })
    }
    notedScreenDateAndTimeassertionCase7() {//first call method 3
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('.MuiIconButton-label > .icon').click()
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                if (dateName == info.seldate) {
                    cy.log(dateName)
                    cy.wrap($el).click()
                }
            })

        //selecting time
        cy.get('#time').click()
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')

                if (seltime == info.seltimedata) {

                    cy.wrap($el).click({ force: true })
                }

            })



        cy.get('#demoRequest').type('should be completed soon')
        var demodate = info.seldate;
        var demotime = info.seltimedata;



        cy.get('#companyPANStatus').click({ force: true })
        cy.xpath('//div[@class="demo-text desc-text creditor"]//strong[1]')
            .each(($el, index, $list) => {
                var dt = $el.text()
                expect('on ' + demodate + 'th ' + info.month + ' ' + info.Year).to.equal(dt)
                //cy.log(dt)
            })

        var tm = cy.xpath('//div[@class="demo-text desc-text creditor"]//strong[2]')
            .each(($el, index, $list) => {
                var tm = $el.text()
                expect(demotime).to.equal(tm)
               // cy.log(tm)
            })


        //cy.log(dt).get.text()
        cy.contains('You have scheduled a demo from Solvendo').should('exist')

    }
    dontBookADemoFrom18to11Case8() {// first call case3 
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('.MuiIconButton-label > .icon').click()

        for (let i = 0; i < buttonpress; i++) {
            cy.xpath("//html/body/div[4]/div[3]/div/div/div[1]/div[1]/button[2]/span[1]").click({ force: true })
        }
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div')
            .each(($el, index, $list) => {
                var dateName = $el.text()
             //info.seldate
                if (dateName == datevalue) {
                   
                //  cy.wrap($el).click()
                $el.click()
                   
                }
            })
        //selecting time
        cy.get('#time').click({force:true})
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')
                //var endtime=$e2.attr('data-end-time')

               // cy.log(seltime)
                if (seltime != info.seltimedatacase8) {

                    cy.log('Please select time between 11:00 and 18:00')
                    return false;
                }
                else {
                    cy.wrap($el).click({ force: true })

                    cy.get('#demoRequest').type('should be completed soon')
                    cy.get('#companyPANStatus').click({ force: true })
                    cy.contains('You have scheduled a demo from Solvendo').should('exist')
                }
            })

    }
    clickOnNotedButton() {
        cy.wait(1000)
        cy.get('#companyPANStatus').click({ force: true })
    }
    closeButton() {
        cy.xpath('//i[@class="icon close-lg"]').click({ force: true })
    }

    selectDate() {
        cy.get('.MuiIconButton-label > .icon').click({ force: true })
        for (let i = 0; i < buttonpress; i++) {
            cy.xpath("//html/body/div[4]/div[3]/div/div/div[1]/div[1]/button[2]/span[1]").click({ force: true })
        }
        //Dates.substring(0,2)

        //Select Date
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div/button/span/p')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                //info.singledigitdate
                if (dateName == datevalue) {
                    //cy.wrap($el).click()
                    $el.click()
                }
            })
    }
    selectTime() {
        //selecting time
        cy.get('#time').click({ force: true })
        cy.xpath('//div[@class="dd_body"]/a')
            .each(($el, index, $list) => {
                var seltime = $el.attr('data-time')

                if (seltime == info.seltimecorrectcase4) {

                    cy.wrap($el).click({ force: true })
                }

            })
    }
    selectDate2() {
        cy.get('.MuiIconButton-label > .icon').click({ force: true })
        for (let i = 0; i < buttonpress; i++) {
            cy.xpath("//html/body/div[4]/div[3]/div/div/div[1]/div[1]/button[2]/span[1]").click({ force: true })
        }
        //Dates.substring(0,2)

        //Select Date
        cy.xpath('//div[@class="MuiPickersBasePicker-pickerView"]/div/div/div/div/button/span/p')
            .each(($el, index, $list) => {
                var dateName = $el.text()
                //info.singledigitdate
                if (dateName == datevalue2) {
                    //cy.wrap($el).click()
                    $el.click()
                }
            })
    }
    clickOnBack() {
        cy.xpath('//span[@class="back_button"]').click({ force: true })
    }
    creditor1stscreen() {
        cy.contains('Please share your name and email ID to help').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('#name').should('have.a.attr', 'placeholder', 'Your Name')
        cy.get('#name').type(fakename)
        cy.get('#email').should('have.a.attr', 'placeholder', 'Your Email ID')
        cy.get('#email').type(fakeemail)
        cy.get('#mobile').should('have.a.attr', 'placeholder', 'Your Mobile Number')
        cy.get('#mobile').type(fakemobile)
        cy.get('#confirmName').click({ force: true })
    }
    demoMsg() {
        cy.get('#demoRequest').click({ force: true }).type('should be completed soon')
    }
    confirmButton() {
        cy.get('#companyPANStatus').click({ force: true })
    }
    confirmName() {
        cy.get('#confirmName').click({ force: true })
    }
    resheduleDemo() {

        cy.get('.side-box-buttons > span').click()
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
    }
    bookADemo() {
        cy.wait(2000)
        cy.xpath('//a[text()="Book a Demo"]').scrollIntoView().click({ force: true })
        cy.contains('Hello').should('exist')
        cy.contains('Please share your name and email ID to help').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')

    }
    bookADemoCred() {
        cy.wait(2000)
        cy.xpath('//a[text()="Book a Demo"]').scrollIntoView().click({ force: true })
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')

    }
}
export default BookADemoPage