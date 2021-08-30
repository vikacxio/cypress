describe('CVA_API_TC-04 -> API Validation for FAQs page', function () {

    Cypress.config('baseUrl','http://65.1.192.243:8103')
    //  Get FAQ based on Category
    it('CVA_API_TC-04-01 -> POST -/cvaFrontendHomePage/getFAQBasedOnCategory -> Get FAQ based on Category', () => {
        cy.request({
         url: '/cvaFrontendHomePage/getFAQBasedOnCategory',
         method: 'POST',
         qs: {
            category: 'Onboarding',
            page:0,
            size:6,
            help:false

         },
        }).then((response)=>{
        expect(response.status).equal(200)
        cy.log(JSON.stringify(response.body))
        })
    })
    //get Answer for FAQ Question
    it('CVA_API_TC-04-02 -> POST -/cvaFrontendHomePage/getAnswerOfFAQQuestion -> Get Answer of A FAQ question', () => {
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


    //search answer for a given question
    it('CVA_API_TC-04-03 -> POST -/cvaFrontendHomePage/searchFAQQuestion -> Search on FAQ question', () => {
        cy.request({
         url: '/cvaFrontendHomePage/searchFAQQuestion',
         method: 'POST',
         qs: {
            searchKeyWord: 'Can I change my registered mobile number?',
            category: 'NA',
            page:0,
            size:6,
            help:false

         },
}).then((response)=>{
        expect(response.status).equal(200)
        cy.log(JSON.stringify(response.body))
        })
    })

})
