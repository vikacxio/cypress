var token
describe('CVA_API_TC-30 -> API Validation for Tour module ', function () {

    Cypress.config('baseUrl','http://65.1.192.243:8103')
     
    it('CVA_API_TC-30-01 -> POST -/cvaRegistration/login -> Login Of the User',()=>{
        cy.request({
          method: 'POST',
          url:'/cvaRegistration/login',
         
          headers:{
            'content-type':'application/json'
          },
          body:{
            "password":"b1ca657a40b5435c6b546ff68e686e4ff077877d1d5f26f42299797a64d20c44",
            "userPhoneNumber": "yosemor346@d4wan.com"
          },
        
        }).then(function(response){

            const respBody = response.body;
            token = respBody['token']

            expect(response.status).equal(200)
            expect(response.body).to.have.property('success',true)
        })
    })

    it('CVA_API_TC-30-02 -> POST- /cvaFrontend/userTakenForTour -> User taken for tour',()=>{
        var tour= {
            "fullTour":false
        }

        cy.request({
            url: '/cvaFrontend/userTakenForTour',
            method: 'POST',
            body: tour,
            headers: {
            authorization : token
            },
        }).then((response)=>{
            expect(response.status).equal(200)
            cy.log(JSON.stringify(response.body))
        })
    })
})   