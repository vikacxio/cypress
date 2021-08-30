describe('CVA_API_TC-28 -> API Validation for HELP page  ', function () {
    
    Cypress.config('baseUrl','http://65.1.192.243:8103')
    // Get FAQ based on Category
    it('CVA_API_TC-28-01 -> POST -/cvaFrontendHomePage/getFAQBasedOnCategory -> Get FAQ based on Category', () => {
        cy.request({
         url: '/cvaFrontendHomePage/getFAQBasedOnCategory',
         method: 'POST',
         qs: {
            category: 'Onboarding',
            page:0,
            size:6,
            help:true

         },
}).then((response)=>{
        expect(response.status).equal(200)
        cy.log(JSON.stringify(response.body))
        })
    })
    //Get Answer of A FAQ question
    it('CVA_API_TC-28-02 -> POST -/cvaFrontendHomePage/getAnswerOfFAQQuestion -> Get Answer of A FAQ question', () => {
        cy.request({
         url: '/cvaFrontendHomePage/getAnswerOfFAQQuestion',
         method: 'POST',
         qs: {
            "questionId": "Question_3920"

         },
        }).then((response)=>{
        expect(response.status).equal(200)
        cy.log(JSON.stringify(response.body))
        })
    })
    //Search on FAQ question
    it('CVA_API_TC-28-03 -> POST -/cvaFrontendHomePage/searchFAQQuestion -> Search on FAQ question', () => {
        cy.request({
         url: '/cvaFrontendHomePage/searchFAQQuestion',
         method: 'POST',
         qs: {
            searchKeyWord: 'Can I change my registered mobile number?',
            category: 'NA',
            page:0,
            size:6,
            help:true
         },
        }).then((response)=>{
        expect(response.status).equal(200)
        cy.log(JSON.stringify(response.body))
        })
    })
})
