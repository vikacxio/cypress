
describe(' Book A Demo ', () => {

  Cypress.config('baseUrl','http://65.1.192.243:8103')
  
  it('CVA_API_TC-16: POST =>"/cva/bookADemo" => book a demo with valid data', () => {


    var user =
    {
      "bookDemoRequestForLoginUser": {
        "bookingDate": "2021-08-26T07:27:00.000Z",
        "endTime": {
          "timeHours": " 13",
          "timeMinutes": "00"
        },
        "startTime": {
          "timeHours": "12",
          "timeMinutes": "00 "
        }
      },
      "demoId": "NA",
      "email": "gaurimmankar@gmail.com",
      "userName": "Laxmi",
      "phoneNumber": "6678887778",
      "demoRequest": "shoulld be on time"
    }

    cy.request('POST', '/cva/bookADemo', user).then((response) => {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', true)
     
    })

    /* cy.request({
       method: 'POST',
       url: 'http://65.1.192.243:8103/cva/bookADemo',
       body: {
         'bookingDate': '2021-06-26T04:57:21.855Z',
         'endTime': { 'timeHours': ' 16', 'timeMinutes': '00' },
         'startTime': { 'timeHours': '15', 'timeMinutes': '00 ' },
         'demoId': 'NA', 'email': 'testg@1234.com', 'userName': 'Gauri',
         'phoneNumber': '6765467888', 'demoRequest': 'demo'
       },
       headers: {
         'content-type': 'application/json'
       }
     }).then(function (response) {
       expect(response.status).equal(200)
       expect(response.body).to.have.property('success', true)
       expect(response.body).not.be.null
       cy.log(JSON.stringify(response.body))
 
     })*/
  })

  it('CVA_API_TC-16-01: POST=>"/cva/bookADemo" => book a demo with invalid and missing data', () => {


    var user =
    {
      "bookDemoRequestForLoginUser": {
        "bookingDate": "2020-08-16T07:27:00.000Z",
        "endTime": {
          "timeHours": " ",
          "timeMinutes": "00"
        },
        "startTime": {
          "timeHours": " ",
          "timeMinutes": "00 "
        }
      },
      "demoId": "NA",
      "email": "",
      "userName": "",
      "phoneNumber": "6678887778",
      "demoRequest": "shoulld be on time"
    }

    cy.request('POST', '/cva/bookADemo', user).then((response) => {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', false)
    
    })

  })
})