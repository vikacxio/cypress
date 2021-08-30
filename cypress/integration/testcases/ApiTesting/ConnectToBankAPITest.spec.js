
var token;
describe('Connect To Bank', function () {
 
  it('CVA_API_TC-05: POST =>"/cvaRegistration/login" => getting token by login', () => {
    cy.request({
      method: 'POST',
      url: 'http://65.1.192.243:8103/cvaRegistration/login',

      headers: {
        'content-type': 'application/json'
      },
      body: {
        "password": "b1ca657a40b5435c6b546ff68e686e4ff077877d1d5f26f42299797a64d20c44",
        "userPhoneNumber": "yosemor346@d4wan.com"
      },

    }).then(function (response) {
      expect(response.status).equal(200)
      const respBody = response.body;
      token = respBody['token']
    })
  })

  it('CVA_API_TC-09: POST =>"/cvaFrontend/connectToBank" =>connect to bank with valid data', () => {
    cy.request({
      method: 'POST',
      url: 'http://65.1.192.243:8103/cvaFrontend/connectToBank',
      body: {
        "bankName": "Other",
        "branchNameOfBank": "UP",
        "city": "Delhi",
        "listedWithUs": false,
        "state": " India"
      },
      headers: {
        authorization: token,
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      expect(response.body).to.have.property('success', true)
      cy.log(JSON.stringify(response.body))
    })
  })

  it('CVA_A_TC-09-01: Revoke request', function () {
    cy.visit('/')
    cy.get('#my-account').click({ force: true })
    cy.get('#userEmail').click({ force: true })
    cy.get('#userEmail').type('yosemor346@d4wan.com')

    cy.get('#userPassword').clear({ force: true })
    cy.get('#userPassword').type('akash123')
    cy.get('#btnSignIn').click({ force: true })
    cy.wait(2000)
    cy.xpath('//p[text()="Revoke Request"]').click({ force: true })
  })

  it('CVA_API_TC-09-01: POST=> "/cvaFrontend/connectToBank" =>connect to bank with invalid  and missing data', () => {

    cy.request({
      method: 'POST',
      url: 'http://65.1.192.243:8103/cvaFrontend/connectToBank',
      body: {
        "bankName": "    ",
        "branchNameOfBank": "878779",
        "city": "$##$#",
        "listedWithUs": false,
        "state": "...."
      },
      headers: {
        authorization: token,
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      expect(response.body).to.have.property('success', false)
      cy.log(JSON.stringify(response.body))
    })
  })

})