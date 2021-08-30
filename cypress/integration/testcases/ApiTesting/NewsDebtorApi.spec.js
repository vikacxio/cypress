var token
describe('CVA_API_TC-21 -> API Validation for  Debtor News page', function () {

    Cypress.config('baseUrl','http://65.1.192.243:8103')
    //Login
    it('CVA_API_TC-21-01 -> POST /cvaRegistration/login -> Login Of the User',()=>{
        cy.request({
          method: 'POST',
          url:'/cvaRegistration/login',
         
          headers:{
            'content-type':'application/json'
          },
          body:{
            "password":"9e53246d7a8e55d7583534e123bbf30837f2bf85b8394a05f1c368e64b5e6f6a",
            "userPhoneNumber": "karthikselvaraj844@gmail.com"
          },
        
        }).then(function(response){

            const respBody = response.body;
            token = respBody['token']

            expect(response.status).equal(200)
            expect(response.body).to.have.property('success',true)
        })
    })
    //Get News For a given company
    it('CVA_API_TC-21-02 ->GET -> /cvaFrontendHomePage/getNewsForGivenCompany -> Get News For a given company',()=>{
        cy.request({
           method: 'GET',
            url: '/cvaFrontendHomePage/getNewsForGivenCompany',
          qs:{
            newsKey: "Building Materials-Tiles Cement",
            page: 0,
            size: 10
          },
            headers: {
              authorization : token
            },
    }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })

})