///<reference types="cypress-xpath" />

//import info2 from '../../fixtures/logindata.json'


class Login {
    visit() {
        cy.visit('/')
        
    }
    fillEmail(value) {
        cy.xpath('//*[@id="top"]/ul[2]/li[2]/a[1]').click()
        const field = cy.get('#userEmail')
        field.clear({force: true})
        field.type(value)
        return this
    }
    fillPassward(value) {
        const field = cy.get('#userPassword')
        field.clear({force: true})
        field.type(value)
        return this
    }
    forgotPassword(){
cy.xpath('//a[text()="Forgot Password?"]').click({force:true})
    }
    enterNumber(value){
        cy.get('#userEmail').type(value)
        return this
    }
    clickOnLogout(){
        cy.xpath('//img[@class="profile_icon_dp"]').click({force:true})
        cy.xpath('//span[text()="Sign Out"]').click({force:true})
    }
    clickOnVerify(){
        cy.get('#btnVerifyPhoneNo').click({force:true})
    }
    clickOnVerifyOtp(){
        cy.xpath('btnVerifyPin').click({force:true})
    }
    errormsgofWrongPassword(){
      cy.get('#authError')
      .each(($el, index, $list) => {
        var msg = $el.text()
        cy.log( msg)
      })
    }
    enterOTP(){
        cy.get('.code-box').click({ force: true })
        var expotp = '1111';
        if (expotp == info2.actotp) {

          var digit1 = (info2.actotp)[0];
          cy.get('#value1').click({ force: true }).type(digit1)
          var digit2 = (info2.actotp)[1];
          cy.get('#value2').click({ force: true }).type(digit2)
          var digit3 = (info2.actotp)[2];
          cy.get('#value3').click({ force: true }).type(digit3)
          var digit4 = (info2.actotp)[3];
          cy.get('#value4').click({ force: true }).type(digit4)
          cy.get('#btnVerifyPin').click({ force: true })
         
        } else {
            var digit1 = (info2.actotp)[0];
            cy.get('#value1').click({ force: true }).type(digit1)
            var digit2 = (info2.actotp)[1];
            cy.get('#value2').click({ force: true }).type(digit2)
            var digit3 = (info2.actotp)[2];
            cy.get('#value3').click({ force: true }).type(digit3)
            var digit4 = (info2.actotp)[3];
            cy.get('#value4').click({ force: true }).type(digit4)
            cy.get('#btnVerifyPin').click()
            cy.xpath('//div[@id="pinErrorMsg"]')
              .each(($el, index, $list) => {
                var errmsg = $el.text()
                cy.log(errmsg + " Please enter valid OTP")

              })
             
          }
    }
    submit() {
        const button = cy.get('#btnSignIn')
        button.click({force: true})
    }
    errorMsgUserBlocking(){
       cy.contains('Oops!').should('exist')
       cy.contains('You ran out of your 3 attempts').should('exist')
       cy.contains(' to Sign In successfully.').should('exist')
       cy.contains('Try again after').should('exist')
       cy.contains('15 min').should('exist')
       
    }
    forgotpassErrorMsg(){
        cy.contains('Recheck').should('exist')
        cy.xpath('//div[@class="side-box-title"]')
        .each(($el, index, $list) => {
            var errmsg = $el.text()
            cy.log( errmsg)
    })
}

}
export default Login