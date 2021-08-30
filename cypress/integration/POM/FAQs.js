///<reference types="cypress-xpath" />
class FAQs {

    userAggrement() {
        cy.wait(2000)

        cy.get('#footer-legal').click({ force: true })

    }
    backButton() {
        cy.xpath('//a[@class="back-button"]').click({ force: true })
    }
    backDebtor() {
        cy.wait(2000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
    }
    backCreditor() {
        cy.wait(2000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
    }
    verifyTitleUrl() {
        cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/faq')
        cy.xpath('//a[@class="navbar-brand"]').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'FAQs')


    }
    all() {
        cy.xpath('//a[text()="All"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
    }
    onbording() {
        cy.xpath('//a[text()="Onboarding"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
    }
    dashboard() {
        cy.xpath('//a[text()="Dashboard"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
    }
    report() {
        cy.xpath('//a[text()="Report"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
    }
    stress() {
        cy.xpath('//a[text()="Stress"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
    }
    documents() {
        cy.xpath('//a[text()="Documents"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
    }
    payments() {
        cy.xpath('//a[text()="Payments"]').click({ force: true })
        cy.xpath('//a[@class="nav-link active"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-title"]').should('exist')
        cy.xpath('//div[@class="tabs-panel-content"]').should('exist')
        cy.xpath('//a[@class="tabs-panel-link"]').should('exist')
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

    }

    searchBar() {
        cy.xpath('//i[@class="icon search"]').click({ force: true })
        cy.xpath('//input[@class="search-control"]').type('terms')
            .type('{enter}')
        cy.contains('terms').should('be.focused')
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
       
    }
    services() {

        cy.get('#services').click({ multiple: true })
        //cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/services')  
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
    }
    faqsFooter() {
        cy.get('#footer-faq').scrollIntoView().click({ force: true })
    }

    sendMail() {
        cy.xpath('//a[@href="mailto:info@solvendo.io"]').should('exist')
    }
    backDebtor() {

        cy.wait(1000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
    }

    contactUs() {
        cy.get('#footer-contact').click({ force: true })
        cy.get('.footer-logo').should('exist')
        cy.contains('Contact Us').should('exist')

    }
    searchBox(value) {
        cy.xpath('//input[@class="search-field"]').click({ force: true }).type(value)
            .type('{enter}')
        cy.wait(2000)
        cy.contains(value).should('exist')
        return this;
    }
    pageLinkNext() {
        // cy.xpath('//*[@id="root"]/div/div[2]/div[3]/nav/ul/li[6]/button/svg').click({ force: true })
       // cy.get(':nth-child(6) > .MuiButtonBase-root > .MuiSvgIcon-root').click({ force: true })
       cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiSvgIcon-root').click({ force: true })
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiButtonBase-root').should('have.attr', 'aria-label', 'page 2')
    }
    pageLinkPrevious() {
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiSvgIcon-root').click({ force: true })
        cy.xpath('//*[@id="root"]/div[2]/div[2]/div[3]/nav/ul/li[2]/button').should('have.attr', 'aria-label', 'page 1')
    }

}
export default FAQs;