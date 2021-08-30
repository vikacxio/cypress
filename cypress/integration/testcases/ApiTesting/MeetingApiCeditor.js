var token;
describe('Meeting room Creditor API testing', function () {
 
  it('CVA_API_TC-18-01: Meeting room token authorization',()=>{
    cy.request({
      method: 'POST',
      url:'http://65.1.192.243:8103/cvaRegistration/login',
     
      headers:{
        'content-type':'application/json'
      },
      body:{
        "password": "c55da45b53dcf70e9c6b0fad929cacf86663b6538593dd078ff4963aaf8b6a59",
        "userPhoneNumber": "solvendoDemo3@solvendo.io"
      },
    
    }).then(function(response){
        expect(response.status).equal(200)
        const respBody = response.body;
        token = respBody['token']
    
  })
  })
  
  it("CVA_API_TC-18-02: Meeting room creditor POST request with the valid input", function(){
    cy.request({
        method: 'POST',
        url: 'http://65.1.192.243:8103/cvaFrontendHomePage/createMeeting',
        body:{
          "companyName": "apple.inc",
          "meetingDate": 1627603200000,
          "meetingStartTime": {
              "timeHours": "11",
              "timeMinutes": "00"
          },
          "meetingEndTime": {
              "timeHours": "12",
              "timeMinutes": "00"
          },
          "agendaOfMeeting": "testingn",
          "participatingList": [
              "test@gmail.com"
          ],
          "meetingLink": "newmeeting.com",
          "meetingDeleted": false
      },
        headers:{
            authorization : token,
            "Content-Type": "application/json"
  
        }
      }).then(function(response){
          expect(response.status).equal(200)
          expect(response.body).to.not.be.null
        //  expect(response.body).to.have.property('success', true)
        cy.log(JSON.stringify(response.body))
    
    })
    })
    it("CVA_API_TC-18-03: Meeting room creditor POST request with invalid input", function(){
        cy.request({
            method: 'POST',
            url: 'http://65.1.192.243:8103/cvaFrontendHomePage/createMeeting',
           body: {
            "companyName": "apple.inc",
            "meetingDate": 1627603200000,
            "meetingStartTime": {
                "timeHours": "08",
                "timeMinutes": "00"
            },
            "meetingEndTime": {
                "timeHours": "098",
                "timeMinutes": "00"
            },
            "agendaOfMeeting": "testingn",
            "participatingList": [
                "test@gmail.com"
            ],
            "meetingLink": "newmeeting.com",
            "meetingDeleted": false
        },
        headers:{
          authorization : token,
          'content-type':'application/json'
        }
      }).then(function(response){
        expect(response.status).equal(200)
          cy.log(JSON.stringify(response.body))
          expect(response.body).to.not.be.null
        //  expect(response.body).to.have.property('error', 'Bad Request')
    
    })
    })



})  

 
