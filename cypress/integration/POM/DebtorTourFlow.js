class DebtorTourFlow {

    tour() {
        cy.xpath('//i[@class="icon tour-flag"]').click({ force: true })
    }
    verifyTexts() {
        cy.contains('Hi, ').should('exist')
        cy.contains('Let us take you through the Solvendo platform and introduce you to some cool features.').should('exist')
        cy.contains('You may view this tour again by clicking on this icon.').should('exist')
        cy.xpath('class="icon-lg tour-flag-lg"').should('exist')
        cy.contains('Tour').should('exist')
        cy.xpath('//i[@class="icon close-lg"]').should('exist')
    }
    closeButton() {
        cy.xpath('//i[@class="icon close-lg"]').click({ force: true })
    }
    takeTourButton() {
        cy.xpath('//button[text()="Take a Tour"]').click({ force: true })
    }
    expolre() {
        cy.contains('EXPLORE SOLVENDO').should('exist')
        cy.contains('Click this card to know more about Solvendo and the services we provide.').should('exist')

    }
    nextButton() {
        cy.wait(1000)
        cy.xpath('//p[text()="Next"]').click({ force: true })
    }
    closeExplore() {
        cy.wait(1000)
        cy.get('.reactour__close > svg > path').click({ force: true })
    }
    nextStep() {
        // cy.wait(3000)
        cy.contains('NEXT STEPS').should('be.visible')
        cy.contains('Check this card to know what you need to do next, to get to your Solvendo Stress Report. You will always see a new step after completing your current task.').should('exist')
    }
    conttackUs() {
        cy.xpath('Contact Us.').click({ force: true })
        /* cy.contains(' Sure,').should('exist')
         cy.contains('Please select your preferred date and time to').should('exist')
         cy.contains('schedule a call from SolveX.').should('exist')
         cy.xpath('//i[@class="icon close-lg"]').click({force:true})*/
    }
    verifyViewReport() {
        cy.xpath('//a[text()="View Report"]').click({ force: true })
        cy.contains(' Report').should('exist')
        cy.contains('Table of Contents').should('exist')
    }
    viewReport() {
        cy.contains('View report').should('exist')
        cy.contains('Click here to view your company/firm’s stress report').should('exist')
    }
    industryNews() {
        cy.contains('INDUSTRY NEWS').should('exist')
        cy.contains('Check this card daily for your Industry’s relevant news and always be ahead of your competition.').should('exist')
    }
    caseStudies() {
        cy.contains('CASE STUDIES').should('exist')
        cy.contains('We have put together a blog that details how ‘restructuring’ helps stressed companies/firms to recast their debt and ‘reboot’ their business.').should('exist')
        cy.contains('Restructuring Companies').should('exist')
    }
    connectToMyBank() {
        cy.contains('CONNECT TO MY BANK').should('exist')
        cy.contains('Click on this to share details about your bank and we will attempt to connect you with your bank to share your report at no extra cost.').should('exist')
    }
    verifyConnectToBank() {
        cy.wait(1000)
        cy.contains('Connect to my Bank').should('exist')
        cy.contains('Allows you to connect with your bank to ').should('exist')
        cy.contains('attempt to restructure your company/firm based on the report.').should('exist')
        cy.xpath('//i[@class="icon-lg link"]').should('exist')

    }
    industryStress() {
        cy.contains('INDUSTRY STRESS').should('exist')
        cy.contains('This card will provide you the').should('exist')

    }
    helpDesk() {
        cy.contains('HELP DESK EXECUTIVE').should('exist')
        cy.contains('Contact us to receive assistance in uploading the financials of').should('exist')
        cy.xpath('//p[text()="Help Desk Executive"]').should('exist')
    }
    vision() {
        cy.contains('OUR VISION').should('exist')
        cy.contains('Through this card we share our vision with you and welcome you to benefit from it. Stay empowered and propel ahead in your entrepreneurial journey.').should('exist')

        cy.contains('Doing business in India is like driving on the streets of India. Just like driving on the streets of India will make you perhaps one of the finest in driving, we believe doing business in India creates the best in enterprise. We, at Solvendo, true to our name, persevere to make this enterprising journey of Indian entrepreneurs easier by solving some of the big problems concerning debt and stress that plague Indian enterprise. We do this through our proprietary data science engines. We welcome you to come chat with us to explore if we can be of any assistance.').should('exist')
    }
    finish() {
        cy.contains('Finish').click({ force: true })
        cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor')
        //cy.xpath('').click({force:true})
    }
}
export default DebtorTourFlow