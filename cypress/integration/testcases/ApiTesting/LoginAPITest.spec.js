
describe('Login ', function () {

  Cypress.config('baseUrl', 'http://65.1.192.243:8103')

  it('CVA_API_TC-05: POST => "/cvaRegistration/login" => login with valid username and valid password', () => {
    cy.request({
      method: 'POST',
      url: '/cvaRegistration/login',
      body:
      {
        "password": "b1ca657a40b5435c6b546ff68e686e4ff077877d1d5f26f42299797a64d20c44",//akash123
        "userPhoneNumber": "yosemor346@d4wan.com"
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

  it('CVA_API_TC-05-01: POST => "/cvaRegistration/login" => login with valid username and invalid password', () => {
    cy.request({    //1st attempt
      method: 'POST',
      url: '/cvaRegistration/login',
      body:
      {
        "password": "8622f0f69c91819119a8acf60a248d7b36fdb7ccf857ba8f85cf7f2767ff8265",//test@123
        "userPhoneNumber": "yosemor346@d4wan.com"
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('loginCount', 'Only 2 attempts left to enter your valid credentials')
      expect(response.body).to.have.property('success', false)

    })
    cy.request({  //2nd attempt
      method: 'POST',
      url: '/cvaRegistration/login',
      body:
      {
        "password": "8622f0f69c91819119a8acf60a248d7b36fdb7ccf857ba8f85cf7f2767ff8265",
        "userPhoneNumber": "yosemor346@d4wan.com"
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('loginCount', 'Only 1 attempts left to enter your valid credentials')
      expect(response.body).to.have.property('success', false)

    })

    cy.request({   //3rd attempt
      method: 'POST',
      url: '/cvaRegistration/login',
      body:
      {
        "password": "8622f0f69c91819119a8acf60a248d7b36fdb7ccf857ba8f85cf7f2767ff8265",
        "userPhoneNumber": "yosemor346@d4wan.com"
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('loginCount', 'Last attempt to enter your valid credentials')
      expect(response.body).to.have.property('success', false)

    })

  })

  it('CVA_API_TC-05-03: POST => "/cvaRegistration/login" =>  after 3 invalid login attempts user able to get a message "You ran out of your 3 attempts to Sign In successfully.Try again after"', () => {
    cy.request({
      method: 'POST',
      url: '/cvaRegistration/login',
      body:
      {
        //"password": "b1ca657a40b5435c6b546ff68e686e4ff077877d1d5f26f42299797a64d20c44",//akash123
        "password": "8622f0f69c91819119a8acf60a248d7b36fdb7ccf857ba8f85cf7f2767ff8265",
        "userPhoneNumber": "yosemor346@d4wan.com"
      },

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', false)
      expect(response.body).to.have.property('user', 'You ran out of your 3 attempts to sign In successfully. Try again after 15 min')

    })

  })


})