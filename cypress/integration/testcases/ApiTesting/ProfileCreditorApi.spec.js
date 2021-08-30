var token
describe('CVA_API_TC-13-> API validation for update creditor profile ', function () {

    Cypress.config('baseUrl','http://65.1.192.243:8103')
     
    it('CVA_API_TC-13-01 ->POST- /cvaRegistration/login ->Login Of the User',()=>{
        cy.request({
          method: 'POST',
          url:'/cvaRegistration/login',
         
          headers:{
            'content-type':'application/json'
          },
          body:{
            "password": "c55da45b53dcf70e9c6b0fad929cacf86663b6538593dd078ff4963aaf8b6a59",
            "userPhoneNumber": "solvendoDemo4@solvendo.io"
          },
        
        }).then(function(response){

            const respBody = response.body;
            token = respBody['token']

            expect(response.status).equal(200)
            expect(response.body).to.have.property('success',true)
       })
    })

    it('CVA_API_TC-13-02 -> PUT -> /cvaFrontend/updateProfile ->Update Profile Up for CVA User',()=>{
    var user= {
        "name":"Raghav",
        "companyAddress":"Mysore",
        "pin":"560078"
    }

    cy.request({
        url: '/cvaFrontend/updateProfile',
        method: 'PUT',
        body: user,
        headers: {
          authorization : token
        },
    }).then((response)=>{
        expect(response.status).equal(200)
        cy.log(response.body)
    })
  })

})