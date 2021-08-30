///<reference types="cypress-xpath" />
import info1 from '../../fixtures/crediornewsdata.json'
class CreditorNews {
    clickOnNews() {
        cy.wait(2000)
        cy.xpath('//i[@class="icon newspaper"]').click({ force: true })
        // cy.get('#news > .icon').click({force:true})
    }
    verifyTitle() {
        cy.wait(2000)
        //title Verification
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'News')
        cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/creditor')

    }
    clickonViewall() {
        const va = cy.xpath('//a[text()="View All"]')
        va.click({ force: true })
        cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/news-all')

    }
    clickOnRemindMelater() {
        cy.xpath('//a[@data-title="Remind me later"]').click({ force: true })
    }
    clickOnAddtoPriority() {
        cy.xpath('//a[@data-title="Add to Priority"]').click({ force: true })
    }
    sortAscending() {
        cy.xpath('//a[@data-title="Sort"]').click({ force: true })
        cy.xpath('//i[@class="icon sort-ascending"]').click({ force: true })
    }
    sortDescending() {
        cy.xpath('//a[@data-title="Sort"]').click({ force: true })
        cy.xpath('//i[@class="icon sort-descending"]').click({ force: true })
    }
    clickOnPrint() {
        cy.xpath('//a[@data-title="Print"]').click({ force: true })
    }
    viewnewsCard() {
        cy.get('#actionContainer > div > div:nth-child(2) > div.card-inner > div.link > a').click({ force: true })
    }
    filter() {

        cy.xpath('//a[@data-title="Filter"]').click({ force: true })
        cy.xpath('//div[@class="dd-menu-scroll"]/a/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname)
                    cy.wrap($el).click({ force: true })
            })

    }
    filter2() {
        cy.xpath('//a[@data-title="Filter"]').click({ force: true })
        cy.xpath('//div[@class="dd-menu-scroll"]/a/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname2) {
                    cy.wrap($el).click({ force: true })
                }
            })

    }
    checkFilter() {
        cy.wait(2000)
        cy.xpath('//div[@class="all-item-col one notification "]/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname) {
                    cy.wrap($el).should('exist')
                }
            })
        cy.xpath('//div[@class="all-item-col one notification "]/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries !== info1.industryname)
                    cy.wrap($el).should('not.exist')
            })
        //cy.wait(2000)  
        //cy.xpath('//i[@class="icon roads"]').should('be.visible')
        //  cy.xpath('//i[@class="icon automotive"]').should('not.be.visible')
    }
    checkFilter2() {
        cy.wait(3000)
        cy.xpath('//div[@class="all-item-col one notification "]/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname) {
                    cy.wrap($el).should('exist')
                }
            })
        cy.xpath('//div[@class="all-item-col one notification "]/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname2) {
                    cy.wrap($el).should('exist')
                }
                //else{
                // cy.wrap($el).should('exist')
                // }
            })
        /* cy.xpath('//div[@class="all-item-col one notification "]/i')
          .each(($el, index, $list) => {
              var industries = $el.attr('class')
              if(industries!=(info1.industryname2 && info1.industryname)){ 
                  cy.wrap($el).should('not.exist')}
                  //else{
                  // cy.wrap($el).should('exist')
                 // }
            })*/

    }
    msg() {
        cy.contains('Oops !').should('exist')
        cy.contains('No Results Found.').should('exist')
    }
    remindme() {
        cy.xpath('//a[@data-title="Remind me later"]').click({ force: true })
    }
    checkRemindme() {
        cy.wait(2000)
        cy.xpath('//div[@class="all-item-col three"]/div/i')

            .each(($el2, index, $list) => {
                if ($el2.attr("class") == 'icon toolbar-remind active') {
                    cy.wrap($el2).should("have.attr", "class", 'icon toolbar-remind active');
                }
            })
        cy.xpath('//i[@class="icon toolbar-remind "]').should('not.exist')
        //  cy.xpath('//i[@class="icon toolbar-priority active"]').should('not.be.visible')

    }
    priority() {
        cy.xpath('//a[@data-title="Add to Priority"]').click({ force: true })

    }
    checkPriority() {
        cy.wait(2000)
        cy.xpath('//i[@class="icon toolbar-priority active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-priority "]').should('not.exist')

    }
    checkRemainderandPriority() {
        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-priority active"]').should('be.visible')

    }
    closeButton() {
        cy.xpath('//a[@class="actions-wrap-close"]').click({ force: true })
    }
    all() {
        cy.xpath('//a[text()="All"]').click({ force: true })
    }
    latest() {
        cy.xpath('//a[text()="Latest"]').click({ force: true })
    }
    thisWeek() {
        cy.xpath('//a[text()="This Week"]').click({ force: true })
    }
    thisMonth() {
        cy.xpath('//a[text()="This Month"]').click({ force: true })
    }

    searchCompany() {
        cy.xpath('//input[@class="search-filed qwqw"]').should("have.attr", "placeholder", "Search Company/Firm")
        // cy.get(".search-filed").should("have.attr","placeholder","Search Company/Firm");
        cy.get(".search-filed")
            .click({force:true})
            .type(info1.companyname);
        // cy.get(':nth-child(1) > .two').contains(info1.companyname).should('be.visible')
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div[2]/div[1]').contains(info1.companyname).should('be.visible')
    }
}
export default CreditorNews