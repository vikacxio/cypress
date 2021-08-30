///<reference types="cypress-xpath" />
import info from '../../fixtures/bookADemoData.json'
import faker from 'faker'
var fakeemail2 = faker.internet.email();
var fakemobile = faker.random.number({ min: 8000000000, max: 9999999999 })

var today = new Date();
var monthnumber = today.getMonth() + 1;//+1
var yearnumber = today.getFullYear();


class YearData {
    get yearname() {
        return "20 October 2021"
    }
    get yearname2() {
        return "26 August 2021"
    }
}

var yr = new YearData();
var Dates = yr.yearname;
var Dates2 = yr.yearname2
var datevalue = Dates.substring(0, 2)
var datevalue2 = Dates2.substring(0, 2)
if (Dates.substring(0, 2) < "10") {
    datevalue = Dates.substring(1, 2);
}
if (Dates2.substring(0, 2) < "10") {
    datevalue2 = Dates2.substring(1, 2);
}
var monthvar = Dates.substring(3, Dates.length - 5);
var yearvar = Dates.substring(Dates.length - 4, Dates.length)

var monthvar2 = Dates2.substring(3, Dates2.length - 5);
var yearvar2 = Dates2.substring(Dates2.length - 4, Dates2.length)
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
/*for (let i = 0; i < months.length; i++) {
    var x = months[i];
    console.log(x);
    if (months[i] == monthvar2) {
        mon = i;
    }
}*/
var yeardata = yearvar - yearnumber;
var monthtimes = mon - monthnumber ;//+ 1
var buttonpress = monthtimes + (yeardata * 12)

var yeardata2 = yearvar2 - yearnumber;

console.log(buttonpress)

class CreditorFooter {
    aboutUs() {
        cy.wait(2000)
        cy.get('#footer-about').click({ force: true })
        cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/about')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        //  cy.eyesCheckWindow('About Us');
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'About Us')

    }
    services() {

        cy.xpath('//a[@href="/dashboard/services"]').scrollIntoView().click({ force: true })
        //cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/services')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        // cy.eyesCheckWindow('services');
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Services')
    }
    bookADemo() {
        cy.wait(4000)
        cy.xpath('//a[text()="Book a Demo"]').scrollIntoView().click({ force: true })
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')

    }

    faqs() {
        cy.xpath('//a[@href="/dashboard/faq"]').scrollIntoView().click({ force: true })
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/faq')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        // cy.eyesCheckWindow('faqs');
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'FAQs')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'FAQs')
    }

    userAggrement() {
        cy.xpath('//a[@href="/dashboard/legal"]').scrollIntoView().click({ force: true })
        // cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/legal')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        // cy.eyesCheckWindow('User Aggrement');
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Legal')
    }
    career() {
        cy.get('#footer-careers').scrollIntoView().click({force: true})
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/careers')
        cy.contains('Let’s ').should('exist')
        cy.contains(' Solve ').should('exist')
        cy.contains(' together at ').should('exist')
        cy.contains(' Solvendo ').should('exist')

    }
    media() {
        cy.xpath('//a[text()="Media"]').scrollIntoView().click({ force: true })
        cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Legal')
    }
    partneships() {
        cy.xpath('//a[text()="Partnerships"]').click({ force: true })
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'About')
    }
    contactUs() {
        cy.xpath('//a[text()="Contact Us"]').click({ force: true })
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'About')
    }
    help() {
        cy.wait(4000)
        cy.xpath('//a[text()="Help"]').click({ force: true })
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        // cy.eyesCheckWindow('help');
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/help')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'HELP')
    }
    facebook() {
        cy.get('[href="https://www.facebook.com/solvendoio-103501461891675"] > .icon').click({ force: true })
        cy.wait(1000)
        cy.contains('solvendo.io').should('exist')
        cy.get('a[href="https://www.facebook.com/solvendoio-103501461891675"]').should('have.attr', 'target', '_blank')

    }
    instagram() {
        cy.get('.instagram_icon').click({ force: true })
        cy.contains('solvendo.io').should('exist')
        cy.get('a[href="https://www.instagram.com/solvendo.io/"]').should('have.attr', 'target', '_blank')
        // cy.url().should('eq', 'https://www.instagram.com/solvendo.io/')

    }
    linkedIn() {
        cy.get('[href="https://www.linkedin.com/company/solvendo-io/"] > .icon').click({ force: true })
        cy.contains('solvendo.io').should('exist')
        cy.get('a[href="https://www.linkedin.com/company/solvendo-io/"]').should('have.attr', 'target', '_blank')
        // cy.url().should('eq', 'https://www.linkedin.com/company/solvendo-io')
    }
    twitter() {
        cy.get('[href="https://twitter.com/solvendo_io"] > .icon').click({ force: true })
        cy.contains('solvendo.io').should('exist')
        cy.get('a[href="https://twitter.com/solvendo_io"]').should('have.attr', 'target', '_blank')
        // cy.url().should('eq', 'https://twitter.com/solvendo_io')
    }
    footerLogo() {
        cy.get('.footer-logo').should('exist')
        cy.contains('solvendo.io').should('exist')
        cy.contains('Access2Justice Technologies & Solutions Pvt.Ltd').should('exist')
        cy.contains('A2jtechnologies Pvt.Ltd').should('exist')
    }

    clickOnBack() {
        cy.xpath('//span[@class="back_button"]').click({ force: true })
    }
    verifyConfirmButtonEnterNameEmailMobileCase3() {
        cy.contains('Hello').should('exist')
        // cy.get('button[class="btn btn-secondary btn-lg"]').scrollIntoView().click({ force: true })
        cy.contains('Please select your preferred date and time to').should('exist')
        //  cy.eyesCheckWindow('book a demo popup');
        cy.get('#confirmName').click({ force: true })
    }

    selectDate() {
        cy.get('.MuiIconButton-label > .icon').click({ force: true })//+1
        for (let i = 0; i < buttonpress+1 ; i++) {
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
                //cy.wait(2000)
                   $el.click()
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
                    //cy.wait(1000)
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
    demoMsg() {
        cy.get('#demoRequest').click({ force: true })
        cy.get('#demoRequest').type('should be completed soon')
    }
    confirmButton() {
        cy.get('#companyPANStatus').click({ force: true })
    }
    confirmName() {
        cy.get('#confirmName').click({ force: true })
    }
    resheduleDemo() {
        // cy.eyesCheckWindow('Noted button screen');
        cy.get('.side-box-buttons > span').click()
        cy.contains('Hello').should('exist')
        cy.contains('Please select your preferred date and time to').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
    }
    closeButton() {
        cy.xpath('//i[@class="icon close-lg"]').click({ force: true })
    }

}
export default CreditorFooter