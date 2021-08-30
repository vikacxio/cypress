///<reference types="cypress-xpath" />
class DebtorNews {
    clickOnNews() {
        cy.get('#news > .icon').click({force:true})
      
    }
    verifyTitleURL(){
  //title Verification
  cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'News')
  cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor')

    }
    clickonViewall() {
        const va = cy.xpath('//a[text()="View All"]')
        va.click({force:true})
        cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/news-all')
       
    }
    clickOnRemindMelater() {
        cy.xpath('//a[@data-title="Remind me later"]').click({force:true})
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
        cy.xpath('//a[@data-title="Print"]').should('be.visible')
    }
    viewnewsCard(){
        cy.get(':nth-child(2) > .card-inner > .link > .more-link').click({ force: true })
    }
    closeButton(){
        cy.xpath('//a[@class="actions-wrap-close"]').click({ force: true })
    }
    filter(){
        cy.reload()
        cy.xpath('//a[@data-title="Filter"]').click({force:true})
        cy.xpath('//div[@class="dd-menu-scroll AllNotifications_ddMenuScroll__5uTco"]/a')
        .each(($el, index, $list) => {
            var industries = $el.attr('name')
            if(industries==info1.industryname)
           cy.wrap($el).click({force:true})
          })

    }
    checkFilter(){
      cy.xpath('//div[@class="all-item all_news_item"]')
      .each(($el, index, $list) => {
        var names = $el.text()
      cy.log(names)
        //cy.xpath('//div[@class="icons_company_wrap"]/div/i').should('exist')
    })
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

remindme(){
    cy.xpath('//a[@data-title="Remind me later"]').click({force:true})
}
checkRemindme(){
  
    cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
    cy.xpath('//i[@class="icon toolbar-remind "]').should('not.exist')
}
priority(){
    cy.xpath('//a[@data-title="Add to Priority"]').click({force:true}) 
}
checkPriority(){
    cy.xpath('//i[@class="icon toolbar-priority active"]').should('be.visible')
    cy.xpath('//i[@class="icon toolbar-priority "]').should('not.exist')
}
checkRemainderandPriority(){
    cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
    cy.xpath('//i[@class="icon toolbar-remind "]').should('not.be.visible')
    cy.xpath('//i[@class="icon toolbar-priority active"]').should('be.visible')
    cy.xpath('//i[@class="icon toolbar-priority "]').should('not.be.visible')
}

}
export default DebtorNews