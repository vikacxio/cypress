///<reference types="cypress-xpath" />

class HelpPage {
    helpButton() {
        cy.get('#footer-help').scrollIntoView().click({ force: true })
    }
    verifyHelp() {
        cy.xpath('//a[@href="/dashboard/help"]').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.contains('HELP').should('exist')
    }
    verifyTitleUrl() {
        cy.wait(1000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/help')
        cy.xpath('//span[@class="navbar-brand-logo"]').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'HELP')
    }
    backButton() {
        cy.xpath('//a[@class="back-button"]').click({ force: true })
    }
    backDebtor() {
        //cy.xpath('href="/dashboard/debtor"').click({force:true})
        cy.wait(2000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
    }
    backCreditor() {
        cy.wait(2000)
        cy.xpath('//span[text()="My Dashboard"]').should('exist')
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
    dashboardHelp() {
        cy.xpath('//a[@href="/dashboard/help"]').scrollIntoView().click({ force: true })
    }
    pageLinkNext() {
        cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiSvgIcon-root').click({ force: true })
       cy.wait(1000)
       cy.get(':nth-child(3) > .MuiButtonBase-root').should('have.attr', 'aria-label', 'page 2')
    }
    pageLinkPrevious() {
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiSvgIcon-root').click({ force: true })
       cy.xpath('//*[@id="root"]/div[2]/div[2]/div[3]/nav/ul/li[2]/button').should('have.attr', 'aria-label', 'page 1')
    }
    searchBox(value) {
        cy.xpath('//input[@class="search-field"]').click({ force: true }).type(value)
            .type('{enter}')
        cy.wait(1000)
        cy.contains(value).should('exist')
        return this;
    }
    sendMail() {
        cy.xpath('//a[@href="mailto:info@solvendo.io"]').should('exist')
        //.click({ force: true })
    }
    myAccount() {
        cy.get('#my-account').click({ force: true })
        cy.wait(1000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/signin')
    }
    aboutUs() {
        cy.wait(1000)
        cy.get('#footer-about').click({ force: true })
        cy.wait(1000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/about')
        cy.get('.footer-logo').should('exist')
      
    }
    services() {

        cy.get('#footer-services').click({ multiple: true })
        //cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/services')
        cy.get('.footer-logo').should('exist')
        //cy.xpath('//a[@class="nav-link active"]').should('have.text', 'Services')
    }
    bookADemo() {
        cy.wait(2000)
        cy.get('#footer-demo').scrollIntoView().click({ force: true })
        cy.contains('Hello').should('exist')
        cy.contains('Please share your name and email ID to help').should('exist')
        cy.contains('schedule a demo from Solvendo.').should('exist')
        cy.get('.close_modal > .icon').click({ force: true })
    }

    faqs() {
        cy.get('#footer-faq').scrollIntoView().click({force:true})
//cy.xpath('//a[@href="/faq"]').click({ multiple: true }).click({force:true})
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/faq')
        cy.get('.footer-logo').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'FAQs')
    }

    userAggrement() {
        cy.xpath('//a[@href="/legal"]').scrollIntoView().click({ force: true })
        // cy.wait(2000)
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/legal')
        cy.get('.footer-logo').should('exist')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'LEGAL')
    }
    media() {
        cy.xpath('//a[text()="Media"]').scrollIntoView().click({ force: true })
        cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.get('.footer-logo').should('exist')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Legal')
    }
    partneships() {
        cy.xpath('//a[text()="Partnerships"]').click({ force: true })
        cy.get('.footer-logo').should('exist')
        cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'About')
    }
    contactUs() {
        cy.get('.multiple-nav > :nth-child(2) > :nth-child(3) > .nav-link').click({ force: true })
        cy.get('.footer-logo').should('exist')
        cy.contains('Contact Us').should('exist')
       // cy.url().should('eq', 'http://localhost:8000/users/1/edit')
       // cy.xpath('//a[@class="nav-link active"]').should('have.text', 'FAQ')
    }
    help() {
        cy.wait(1000)
        cy.get('#footer-help').click({ force: true })
        cy.get('.footer-logo').should('exist')
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/help')
        cy.xpath('//div[@class="section-title"]').should('have.text', 'HELP')
    }
    facebook() {
        cy.get('[href="https://www.facebook.com/solvendoio-103501461891675"] > .icon').click({ force: true })

        cy.wait(1000)
        // cy.focused().should('have.attr', 'type', 'email')
        cy.contains('solvendo.io').should('exist')
        cy.get('a[href="https://www.facebook.com/solvendoio-103501461891675"]').should('have.attr', 'target', '_blank')

        // cy.url().should('eq', 'https://www.facebook.com/solvendoio-103501461891675')
        // cy.xpath('//img[@alt="Facebook"]').should('exist')
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

}
export default HelpPage