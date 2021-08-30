import faker from 'faker'
var fakeEmail4 = faker.internet.email();
var fakeEmail2 = faker.internet.email();
var fakeEmail3 = faker.internet.email();
var fakeEmail = faker.internet.email();
var fakeEmail5 = faker.internet.email();
var fakemobile = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile1 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile2 = faker.random.number({ min: 1000000000, max: 9999999999 })
describe('Sign Up for Debtor & Creditor', function () {

  Cypress.config('baseUrl', 'http://65.1.192.243:8103')

  it('CVA_API_TC-06: POST => "/cvaRegistration/signUp" => sign up as a debtor with all valid data ', () => {

    cy.request({
      method: 'POST',
      url: '/cvaRegistration/signUp',
      body: {
        "authorisation": false,
        "authorisationFile": [],
        "companyAddress": "Hyderabad",
        "companyAddressPinCode": "445678",
        "companyName": null,
        "companyPAN": "",
        "creditorType": null,
        "debtorType": "LLP",
        "dinnumber": "",
        "director": false,
        "email": fakeEmail4,
        "firmsName": "Satya",
        "mobile": fakemobile,
        "name": "",
        "userRole": "debtor",
        "userPassword": "1a5376ad727d65213a79f3108541cf95012969a0d3064f108b5dd6e7f8c19b89",
        "userId": "NA",
        "industryId": "Industry_7197",
        "cinNum": "",
        "otherIndustry": ""
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', true)
    })
  })

  it('CVA_API_TC-06-01: POST => "/cvaRegistration/signUp" => sign up as debtor with invalid and missing data', () => {

    cy.request({
      method: 'POST',
      url: '/cvaRegistration/signUp',
      body: {
        "authorisation": false,
        "authorisationFile": [],
        "companyAddress": "",
        "companyAddressPinCode": "776668",
        "companyName": "",
        "companyPAN": "",
        "creditorType": "hggh",
        "debtorType": " 056",
        "dinnumber": "",
        "director": false,
        "email": fakeEmail2,
        "firmsName": "",
        "mobile": "",
        "name": "",
        "userRole": "#$@",
        "userPassword": "",
        "userId": "NA",
        "industryId": "",
        "cinNum": " 786gg#$3 ",
        "otherIndustry": ""
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', false)
    })
  })

  it('CVA_API_TC-06-02: POST => "/cvaRegistration/signUp" => sign up as debtor blank space as a password', () => {

    cy.request({
      method: 'POST',
      url: '/cvaRegistration/signUp',
      body: {
        "authorisation": false,
        "authorisationFile": [],
        "companyAddress": "addrfhhjkhk",
        "companyAddressPinCode": "787689",
        "companyName": null,
        "companyPAN": "",
        "creditorType": null,
        "debtorType": "LLP",
        "dinnumber": "",
        "director": false,
        "email": fakeEmail3,
        "firmsName": "CCS",
        "mobile": fakemobile1,
        "name": "",
        "userRole": "debtor",
        "userPassword": "8b6fa01313ce51afc09e610f819250da501778ad363cba4f9e312a6ec823d42a",
        "userId": "NA",
        "industryId": "Industry_7181",
        "cinNum": "",
        "otherIndustry": ""
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', false)
    })



  })
  it('CVA_API_TC-07: POST => "/cvaRegistration/signUp" => sign up as SFC creditor with invalid and missing data ', () => {

    cy.request({
      method: 'POST',
      url: '/cvaRegistration/signUp',
      body: {
        "authorisation": false,
        "authorisationFile": [],
        "companyAddress": " ",
        "companyAddressPinCode": "554665",
        "companyName": null,
        "companyPAN": "",
        "creditorType": "SFC",
        "debtorType": null,
        "dinnumber": "",
        "director": false,
        "email": fakeEmail,
        "firmsName": "",
        "mobile": "",
        "name": "Gauri",
        "userRole": "creditor",
        "userPassword": "         ",
        "userId": "NA",
        "cinNum": "",
        "otherIndustry": ""
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response.body).to.have.property('success', false)
    })
  })

  it('CVA_API_TC-07-01: POST => "/cvaRegistration/signUp" => sign up as UFC creditor with invalid and missing data', () => {

    cy.request({
      method: 'POST',
      url: '/cvaRegistration/signUp',
      body: {
        "authorisation": false,
        "authorisationFile": [],
        "companyAddress": "    ",
        "companyAddressPinCode": "664333",
        "companyName": null,
        "companyPAN": "",
        "creditorType": "UFCG",
        "debtorType": null,
        "dinnumber": "",
        "director": false,
        "email": fakeEmail5,
        "firmsName": "",
        "mobile": "",
        "name": "",
        "userRole": "creditor",
        "userPassword": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "userId": "NA",
        "cinNum": "",
        "otherIndustry": ""
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response.body).to.have.property('success', false)
    })
  })
})