///<reference types="cypress-xpath" />
import info1 from '../../fixtures/creditortasksdata.json'

class CreditorTasks {
    clickOnTasks() {
        cy.wait(3000)
        cy.get('#tasks > .icon').click({ force: true })
        // cy.get('#tasks').click({ force: true })
    }
    titleVerification() {
        //title Verification
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Tasks for Solvendo')
        cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/creditor')

    }
    enterSubject(value) {
        cy.get('#taskSubject').should('have.a.attr', 'placeholder', 'Subject')
        cy.get('#taskSubject').click({ force: true }).type(value)
        return this;
    }
    selectCompany() {
        cy.contains('Select Company').should('exist')
        cy.get(':nth-child(1) > .selectpicker > .dropdown-toggle').click({ force: true })
        cy.xpath('//div[@class="dd__body"]/a')
            .each(($el, index, $list) => {
                var companyname = $el.attr('id')
                if (companyname == info1.companyname)
                    cy.wrap($el).click({ force: true })
            })
    }
    selectCategoury() {
        cy.xpath('//a[text()="Select Category"]').click({ force: true })
    }
    selectUploadData() {
        cy.xpath('//a[@id="Upload Data"]').click({ force: true })
    }
    selectTemplates() {
        cy.xpath('//a[@id="Templates"]').click({ force: true })
    }
    selectAddCompanies() {
        cy.xpath('//a[@id="Add Companies"]').click({ force: true })
    }
    selectReport() {
        cy.xpath('//a[@id="Report"]').click({ force: true })
    }
    selectExpertReatedQueries() {
        cy.xpath('//a[@id="Expert related queries"]').click({ force: true })
    }
    enterQuery(value) {
        cy.contains('Type your query here')
        cy.xpath("//div[@class='rdw-editor-main']").click().type(value)
        return this;
    }
    closeButton() {
        cy.xpath('//a[@class="actions-wrap-close"]').click({ force: true })
    }
    clickOnSend() {
        cy.wait(2000)
        cy.xpath('//button[text()="Send "]').click({ force: true })
        cy.wait(2000)
        cy.contains('Message Sent').should('exist')
    }
    clickOnSendDisabled() {
        cy.xpath('//button[text()="Send "]').should('be.disabled')

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

    clickOnViewAllTasks() {
        cy.xpath('//a[text()="View All"]').click({ force: true })
    }
    sendMecopyButton() {
        cy.xpath('//a[text()="Send me a copy"]').click({ force: true })
    }
    exitButtonn() {
        cy.xpath('//button[text()="exit"]').click({ force: true })
    }
    draftANewTask() {
        cy.xpath('//a[text()="Draft a new task"]').click({ force: true })
        cy.contains('Our task force will address your queries and notify via notifications').should('exist')
    }
    enterQueryDarft(value) {
        cy.xpath("//div[@class='rdw-editor-main']").click().clear()
        cy.xpath("//div[@class='rdw-editor-main']").type(value)
        return this;
    }
    allTasks() {
        cy.xpath('//div[@class="all-item all_news_item"]')
            .each(($el, index, $list) => {
                var tasks = $el.text()
                cy.log(tasks)
            })
    }
    uploadFile() {
        cy.wait(3000)
        cy.get('#uploadFile > .icon').scrollIntoView().click({ force: true })
        const filepath = 'files/image7.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
    }
    filter() {

        cy.xpath('//a[@data-title="Filter"]').click({ force: true })
        cy.xpath('//div[@class="dd-menu-scroll AllTasks_ddMenuScroll__ugcGE"]/a/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname)
                    cy.wrap($el).click({ force: true })
            })

    }
    filter2() {
        cy.xpath('//a[@data-title="Filter"]').click({ force: true })
        cy.xpath('//div[@class="dd-menu-scroll AllTasks_ddMenuScroll__ugcGE"]/a/i')
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
                cy.log(industries)
                if (industries != info1.industryname) {
                    cy.wrap($el).should('be.visible')
                }
            })
    }
    checkFilter2() {
        cy.wait(3000)
        cy.xpath('//div[@class="all-item-col one notification "]/i')
            .each(($el, index, $list) => {
                var industries = $el.attr('class')
                if (industries == info1.industryname2) {
                    cy.wrap($el).should('be.visible')
                }
            })

    }
    searchCompany() {
        cy.get(".search-filed").should("have.attr", "placeholder", "Search Company/Firm");
        cy.get(".search-filed")
            .click()
            .type(info1.companyname);
        cy.get(':nth-child(1) > .two').contains(info1.companyname).should('be.visible')

    }
    remindme() {
        cy.xpath('//a[@data-title="Remind me later"]').click({ force: true })
    }
    checkRemindme() {
        cy.xpath('//div[@class="all-item-col three"]/div/i')

            .each(($el2, index, $list) => {
                if ($el2.attr("class") == 'icon toolbar-remind active') {
                    cy.wrap($el2).should("have.attr", "class", 'icon toolbar-remind active');
                }
            })


        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
       
        cy.xpath('//i[@class="icon toolbar-remind "]').should('not.exist')
    }
    priority() {
        cy.xpath('//a[@data-title="Add to Priority"]').click({ force: true })
    }
    checkPriority() {
        //cy.wait(2000)
        cy.xpath('//i[@class="icon toolbar-priority 123 active"]').should('be.visible')
      
        cy.xpath('//i[@class="icon toolbar-priority 123 "]').should('not.exist')
    }
    checkRemainderandPriority() {
        cy.wait(2000)
        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-priority 123 "]').should('be.visible')

    }
    addReminder() {
        cy.xpath('//div[@class="all-item-col three"]/div/i[1]')
            .each(($el, index, $list) => {
                var rm = $el.attr('class')
                cy.log(rm)
                if (rm != 'icon toolbar-remind active')
                    $el.click({ force: true })

            })
    }
    addToPriority() {
        cy.xpath('//div[@class="all-item-col three"]/div/i[2]')
            .each(($el, index, $list) => {
                var prior = $el.attr('class')
                cy.log(prior)
                if (prior != 'icon toolbar-priority active')
                    $el.click({ force: true })

            })
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
        cy.xpath('//a[@data-title="Print"]').should('exist')
    }
}
export default CreditorTasks;