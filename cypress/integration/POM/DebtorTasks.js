///<reference types="cypress-xpath" />
class DebtorTasks {
    clickOnTasks() {
        cy.xpath('//header/nav[1]/ul[1]/li[3]/a[1]/i[1] ').click({ force: true })
    }
    titleVerification(){ 
        //title Verification
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Tasks for Solvendo')
        cy.url().should('be.equal', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor')

    }
    enterSubject(value) {
        cy.get('#taskSubject').should('have.a.attr', 'placeholder', 'Subject')
        cy.get('#taskSubject').click({ force: true })//.type(value)
        cy.get('#taskSubject').type(value)
        return this;
    }
    selectCategoury() {
        cy.xpath('//a[text()="Select Category"]').click({ force: true })
    }
    enterQueryDarft(value){
        cy.xpath("//div[@class='rdw-editor-main']").click().clear()
        cy.xpath("//div[@class='rdw-editor-main']").type(value)
        return this;
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
    clickOnSend() {
        cy.wait(2000)
        cy.xpath('//button[text()="Send "]').click({ force: true })
        cy.contains('Message Sent').should('exist')
    }
    clickOnSendDisabled() {
        cy.xpath('//button[text()="Send "]').should('be.disabled')

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
    remindme(){
        cy.xpath('//a[@data-title="Remind me later"]').click({force:true})
      
    }
    checkRemindme(){
     //   cy.wait(3000)
        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
       // cy.xpath('//i[@class="icon toolbar-remind "]').should('not.exist')
        
    }
    priority(){
        cy.xpath('//a[@data-title="Add to Priority"]').click({force:true}) 
    }
    checkPriority(){
      //  cy.wait(3000)
        cy.xpath('//i[@class="icon toolbar-priority 123 active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-priority 123 "]').should('not.exist')
        
    }
    checkRemainderandPriority(){
        cy.wait(2000)
        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-priority 123 active"]').should('be.visible')
        
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

    closeButton(){
        cy.xpath('//a[@class="actions-wrap-close"]').click({ force: true })
    }
}
export default DebtorTasks;