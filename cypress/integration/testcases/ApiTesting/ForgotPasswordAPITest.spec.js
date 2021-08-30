var token;
describe('Forgot password & Reset password', function () {

  Cypress.config('baseUrl','http://65.1.192.243:8103')

  it('CVA_API_TC-32: POST => "/cvaRegistration/forgetPassword" => Forgot password', () => {
   
    cy.request({
      method: 'POST',
      url: '/cvaRegistration/forgetPassword?userPhoneNumber=8552027288&secondTry=false',

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', true)
    })

    cy.request({
      method: 'POST',
      url: '/cvaRegistration/forgetPassword?secondTry=true&userPhoneNumber=8552027288',

      headers: {
        authorization: token,
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', true)
    })
  })

  it('CVA_API_TC-33: POST => "/cvaRegistration/resetPassword" => Reset Password with invalid token', () => {
    cy.request({
      method: 'POST',
      url: '/cvaRegistration/resetPassword?userEmail=9850353982&token=1111&password=8622f0f69c91819119a8acf60a248d7b36fdb7ccf857ba8f85cf7f2767ff8265',

      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      expect(response.status).equal(200)
      cy.log(JSON.stringify(response.body))
      expect(response.body).to.have.property('success', false)
    })
  })

})