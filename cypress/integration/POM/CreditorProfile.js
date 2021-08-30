///<reference types="cypress-xpath" />

import info from '../../fixtures/debtoreditProfile.json'
class CreditorProfile {
    clickOnProfile() {
        cy.xpath('//img[@class="profile_icon_dp"]').click({ force: true })
    }
    clickOnEditIcon() {
        cy.xpath('//i[@class="icon edit"]').click({ force: true })
    }
    clickOnProfilePicture() {
      cy.xpath('//span[@class="upload_image"]').scrollIntoView().click({ force: true })
        const filepath = 'files/image6.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
    }
    companyNameVerification() {
        cy.get(':nth-child(1) > .address_td > p').should('have.text', 'H P Mehta & Co')
        
    }
    editAdressCity() {
        cy.xpath('//p[@id="addressText"]').click({ force: true })
        .type('{selectall}{backspace}')
        cy.xpath('//p[@id="addressText"]').type(info.address)
    }
    checkAddressPincode(){
        cy.get('#addressText > span').should('have.text', info.address)
        cy.get('.address_td > :nth-child(2)').should('have.text', info.pincode)
    }
    editPincode(value) {
        cy.get('.address_td > :nth-child(2)').click({ force: true })
        .type('{selectall}{backspace}')
        cy.get('.address_td > :nth-child(2)').type(value)
        return this
    }
    allElements(){
        cy.xpath('//p[@id="addressText"]').click({ force: true }).should('be.visible')
        cy.get('.address_td > :nth-child(2)').click({ force: true }).should('be.visible')
      
      //  cy.xpath('//*[@id="root"]/header/nav/ul/li[5]/span/div/table/tbody/tr[3]/td[2]/p').click({ force: true }).should('be.visible')
       
        cy.get(':nth-child(4) > .address_td').click({ force: true }).should('be.visible')
    }
    editEmail(value) {
    cy.get('#profile-email').click({ force: true })
    cy.get('.form-control').type('{selectall}{backspace}').type(value)
       // em.
      //  cy.xpath('//*[@id="root"]/header/nav/ul/li[5]/span/div/table/tbody/tr[3]/td[2]/p').type(value)
        return this
    }
    verifyEmailBlock(){
        cy.xpath('//div[@class="side-box-title"]').should('have.text', 'Verification')
        cy.contains('Verification of credentials is essential to proceed further and access ')
        cy.get('#verifyEmail').click({force:true})
    }
    editMobileNo(value) {
        
        cy.get('#profile-mobile').click({ force: true })
        .type('{selectall}{backspace}')
       cy.xpath('//input[@name="mobile"]').type(value)
        return this
    }
    mobileVerificationbloack(){
        cy.xpath('//div[@class="side-box-title"]').should('have.text', 'Verification')
        cy.contains('Verification of credentials is essential to proceed further and access ')
        cy.contains('Solvendo').should('exist')
    }
    userName(){
        cy.get('#userNameText').click({ force: true })
        cy.xpath('//input[@class="form-control name_control"]')
       // cy.get('.media-body > .form-control')
        .type('{selectall}{backspace}')
        cy.xpath('//input[@class="form-control name_control"]').type(info.credUsername)
      
    }
    checkUserName(){
        cy.get('#userNameText').should('have.text', info.credUsername)
    }
    verifyMobile(){
        cy.get('#btnSignIn').click({ force: true })
        cy.xpath('//div[@class="side-box-title"]').should('have.text', 'Enter Code')
        var expotp = '1111';
        if (expotp == info.actotp) {

          var digit1 = (info.actotp)[0];
          cy.get('#value1').click({ force: true }).type(digit1)
          var digit2 = (info.actotp)[1];
          cy.get('#value2').click({ force: true }).type(digit2)
          var digit3 = (info.actotp)[2];
          cy.get('#value3').click({ force: true }).type(digit3)
          var digit4 = (info.actotp)[3];
          cy.get('#value4').click({ force: true }).type(digit4)
          cy.get('#btnVerifyPin').click({ force: true })
        } else {
            var digit1 = (info.actotp)[0];
            cy.get('#value1').click({ force: true }).type(digit1)
            var digit2 = (info.actotp)[1];
            cy.get('#value2').click({ force: true }).type(digit2)
            var digit3 = (info.actotp)[2];
            cy.get('#value3').click({ force: true }).type(digit3)
            var digit4 = (info.actotp)[3];
            cy.get('#value4').click({ force: true }).type(digit4)
            cy.get('#btnVerifyPin').click({force: true})
            cy.xpath('//div[@id="pinErrorMsg"]')
              .each(($el, index, $list) => {
                var errmsg = $el.text()
                cy.log(errmsg + " Please enter valid OTP")

              })
            }
    }
clickOnVerify(){
    cy.get('#btnSignIn').click({ force: true })
}
clickOneditMobileNoDetails(){
    cy.get('#pinResend > .desc-text-bottom').click({ force: true })
}
    clickTwofactorAuth() {
        cy.xpath('//label[@for="twoFactorAuthentication"]').click({ force: true })
    }
    save() {
        cy.get('.sign_out_wrap > span').click({ force: true })
       // cy.xpath('//span[text()="Save"]').click({ force: true })
    }
   /* changeImage() {
        cy.xpath('//*[@id="root"]/header/nav/ul/li[5]/span/div/div[2]/div[1]').click({ force: true })
    }*/
  
}

export default CreditorProfile