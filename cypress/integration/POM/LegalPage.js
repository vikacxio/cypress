///<reference types="cypress-xpath" />
class LegalPage {

    userAggrement() {
        cy.wait(1000)
      //  cy.xpath('//a[@href="/legal"]').click({ multiple: true })
      cy.xpath('//a[text()="User Agreement &"]').click({force:true})

    }
    backButton() {
        cy.xpath('//a[@class="back-button"]').click({ force: true })
    }

    verifyTitleUrl() {
        cy.wait(1000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/legal')
        cy.xpath('//a[@class="navbar-brand"]').should('be.visible')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'LEGAL')
        //cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Legal')

    }
    downloadicon() {
        cy.xpath('//i[@class="icon legal-download"]').should('exist')
    }
    printIcon() {
        cy.xpath('//i[@class="icon legal-print"]').should('exist')
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('cancel').click();
        })
        //cy.window().its('open').should('be.called')
        //.type('{esc}')
    }
    userAggrementBoth() {
        cy.xpath('//a[@href="/dashboard/legal"]').click({ force: true })
    }
    verifyTexts() {
        cy.contains('User Agreement, Terms & Conditions ').should('exist')
        cy.contains('and').should('exist').should('exist')
        cy.contains(' Data Privacy Policy')
            .should('exist')
        cy.xpath('//h2[@class="sub-title"]').should('exist')
        cy.xpath('//h2[text()="I. Introduction"]').should('exist')

    }
    searchBar() {
        cy.get('#search-main > .icon').click({ force: true })
        cy.get('#mainSearch').type('termination')
            .type('{enter}')
        cy.contains('termination').should('be.visible')
    }
    privacyPolicy() {
        cy.xpath('//a[text()="Privacy Policy"]').click({ force: true })
    }
    myAccount() {
        cy.wait(1000)
        cy.get('#my-account').click({ force: true })
        cy.wait(1000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/signin')
    }
    aboutUs() {
        cy.wait(1000)
        cy.get('#about').click({ force: true })
        cy.wait(1000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/about')
        cy.get('.footer-logo').should('exist')
    }
    services() {

        cy.get('#services').click({ force: true })
        //cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/services')
        cy.get('.footer-logo').should('exist')
    }
    bookADemo() {
        cy.wait(2000)
        cy.get('#demo').scrollIntoView().click({ force: true })
        cy.contains('Hello').should('exist')
        cy.contains('Please share your name and email ID to help').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('.close_modal > .icon').click({ force: true })
    }

    faqs() {
        cy.get('#faq').scrollIntoView().click({ force: true })
        //cy.xpath('//a[@href="/faq"]').click({ multiple: true }).click({force:true})
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/faq')
        cy.get('.footer-logo').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'FAQs')
    }
    verifyLinks() {
        cy.xpath('//*[@id="tabsContent"]/div/p[2]/a').should('exist')
        cy.wait(2000)
        //cy.url().should('eq', 'https://solvendo.io/in')
        cy.xpath('//a[text()="www.solvendo.io/india"]').should('exist')
        cy.xpath('href="mailto:info@solvendo.io"').should('exist')
        cy.contains('info@solvendo.io').should('exist')
    }
    privacyPolicyLink() {
        cy.wait(1000)
        //cy.get(':nth-child(7) > a').scrollIntoView().click({ force: true })
        cy.xpath('//a[text()="clicking here"]').click({ force: true })
        cy.wait(1000)
        cy.xpath('//a[text()="Privacy Policy"]').should('exist')
        cy.contains('info@solvendo.io').should('exist')
        cy.xpath('//h2[@class="sub-title"]').should('exist')
    }
    userAggrementButton() {
        cy.contains('I agree to the terms and conditions.').should('exist')
        cy.xpath('//input[@class="form-check-input"]').should('be.checked')
    }
    debtorLegal() {
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/legal')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'LEGAL')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Legal')
    }
    creditorLegal() {
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/legal')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'LEGAL')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Legal')
    }
    backDebtor() {
        //cy.xpath('href="/dashboard/debtor"').click({force:true})
        cy.wait(1000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
    }
    backCreditor() {
        cy.wait(1000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
    }
    contactUs() {
        cy.get('.multiple-nav > :nth-child(2) > :nth-child(3) > .nav-link').click({ force: true })
        cy.get('.footer-logo').should('exist')
        cy.contains('Contact Us').should('exist')

    }

}
export default LegalPage;