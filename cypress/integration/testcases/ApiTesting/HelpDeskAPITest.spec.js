var token;
describe('Help Executive', function () {
 
  Cypress.config('baseUrl','http://65.1.192.243:8103')

  it('CVA_API_TC-05: POST => "/cvaRegistration/login" => getting token by login',()=>{
    cy.request({
      method: 'POST',
      url:'/cvaRegistration/login',
     
      headers:{
        'content-type':'application/json'
      },
      body:{
        "password": "b1ca657a40b5435c6b546ff68e686e4ff077877d1d5f26f42299797a64d20c44",
        "userPhoneNumber": "yosemor346@d4wan.com"
      },
    
    }).then(function(response){
        expect(response.status).equal(200)
        const respBody = response.body;
        token = respBody['token']
    
  })
  })
  
  it('CVA_API_TC-10: POST=> "/cvaFrontend/inviteCAByGivenUser" => request a call with valid data ',()=>{
      cy.request({
        method: 'POST',
        url:'/cvaFrontend/inviteCAByGivenUser',
        body:{
          "bookDemoRequestForLoginUser": {
            "authorisation": false,
              "bookingDate": "2021-08-22T11:30:00.000Z",
              "demoId": "NA",
              "endTime": {
                  "timeHours": 16,
                  "timeMinutes": 0
              },
              "startTime": {
                  "timeHours": 15,
                  "timeMinutes": 0
              }
          },
          "userIdOfMarketPlaceEntity": "USER_ID2655"
      },
        headers:{
          authorization : token,
          'content-type':'application/json'
        }
      }).then(function(response){
          expect(response.status).equal(200)
          expect(response.body).to.not.be.null
          expect(response.body).to.have.property('success', true)
        cy.log(JSON.stringify(response.body))
    
    })
    })
  
    it('CVA_API_TC-10-01: POST => "/cvaFrontend/inviteCAByGivenUser" => request a call with invalid and missing data',()=>{
      cy.request({
        method: 'POST',
        url:'/cvaFrontend/inviteCAByGivenUser',
        body:{
          "bookDemoRequestForLoginUser": {
              "bookingDate": "2020-07-22T10:27:00.000Z",
              "demoId": "NA",
              "endTime": {
                  "timeHours": 32,
                  "timeMinutes":699 
              },
              "startTime": {
                  "timeHours": 6788 ,
                  "timeMinutes":677 
              }
          },
          "userIdOfMarketPlaceEntity": "USER_ID2655"
      },
        headers:{
          authorization : token,
          'content-type':'application/json'
        }
      }).then(function(response){
        expect(response.status).equal(200)
          cy.log(JSON.stringify(response.body))
          expect(response.body).to.not.be.null
          expect(response.body).to.have.property('error', 'Bad Request')
    
    })
    })

})  