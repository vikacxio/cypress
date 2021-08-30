import Login from "../../../POM/Login";
const excelFilePath = "cypress\\LoginDetailsDebtor.xlsx";
const sheetName = "Sheet1";
describe('Testing API Endpoints Using Cypress', () => {


  it("CVA_API_TC-18-01: Meeting room debtor token authorization", function(){
    it('POST -Request',()=>{
        cy.request({
          method: 'POST',
          url:'http://65.1.192.243:8103/cvaRegistration/login',
         
          headers:{
            'content-type':'application/json'
          },
          body:{
            "password": "937e8d5fbb48bd4949536cd65b8d35c426b80d2f830c5c308e2cdec422ae2244",
            "userPhoneNumber": "thirtheshv@gmail.com"
          },
        
        }).then(function(response){
            expect(response.status).equal(200)
            const respBody = response.body;
            token = respBody['token']
        
      })
      })
    })
  it('CVA_API_TC-18-02: Meeting room creditor POST request with the valid input', () => {

    cy.request({
      method: 'POST',
      url: 'http://65.1.192.243:8103/cvaFrontendHomePage/createMeeting',
      body:{
        "companyName": "ALKA INDIA LIMITED",
        "meetingDate": 1626134400000,
        "meetingStartTime": {
            "timeHours": "06",
            "timeMinutes": "00"
        },
        "meetingEndTime": {
            "timeHours": "07",
            "timeMinutes": "00"
        },
        "agendaOfMeeting": "testing",
        "participatingList": [
            "test@gmail.com"
        ],
        "meetingLink": "zosodjdfakj",
        "meetingDeleted": false
    },
      headers: {
        authorization : token,
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      //expect(response.body).to.have.property('success', true)
      //expect(response.body).not.be.null
      cy.log(response.body)
    //expect(response.body).to.have.property("companyName", "ALKA INDIA LIMITED")
      cy.log(JSON.stringify(response.body))

    })
  })

  it('CVA_API_TC-18-03: Meeting room debtor POST request with the invalid input', () => {

    cy.request({
      method: 'POST',
      url: 'http://65.1.192.243:8103/cvaFrontendHomePage/createMeeting',
      body:{
        "companyName": "ALKA INDIA LIMITED",
        "meetingDate": 1626134400000,
        "meetingStartTime": {
            "timeHours": "06",
            "timeMinutes": "00"
        },
        "meetingEndTime": {
            "timeHours": "0227",
            "timeMinutes": "00"
        },
        "agendaOfMeeting": "testing",
        "participatingList": [
            "test@gmail.com"
        ],
        "meetingLink": "zosodjdfakj",
        "meetingDeleted": false
    },
      headers: {
        authorization : token,
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(response.body)
      cy.log(JSON.stringify(response.body))

    })
  })
})