///<reference types="cypress-xpath" />
import faker from 'faker'
import info from '../../fixtures/signupdata.json'
var fakename = faker.name.findName();
var fakeEmail = faker.internet.email();
var fakeEmail2 = faker.internet.email();
var fakeEmail3 = faker.internet.email();
var fakeEmail4 = faker.internet.email();
var fakeEmail5 = faker.internet.email();
var fakeEmail6 = faker.internet.email();
var fakeEmail7 = faker.internet.email();
var fakeEmail8 = faker.internet.email();
var fakeEmail9 = faker.internet.email();
var fakeEmail10 = faker.internet.email();
var fakeEmail11 = faker.internet.email();
var fakeEmail12 = faker.internet.email();
var fakemobile2 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile3 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile4 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile5 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile6 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile8 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile9 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile10 = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile = faker.random.number({ min: 1000000000, max: 9999999999 })
var fakemobile1 = faker.random.number({ min: 1000000000, max: 9999999999 })
describe('SignUpTest using Data Through Excel', function () {

  beforeEach(function () {
    cy.visit('/')
    cy.fixture('signupdata.json').then(function (user) {
      this.user = user
    })
  })
  it('CVA_A_TC-06: Verify whether  the user is able to SignUp as Debtor by fillling all the respective fields and  can able to login ', function ()// Test case 1 
  {

    const excelFilePath = "cypress\\fixtures\\files\\SignUpdata.xlsx";
    const sheetName = "Sheet1";
  
    //cy.visit('/')

    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        const emails = [fakeEmail5, fakeEmail6, fakeEmail7, fakeEmail8, fakeEmail9];
        const mnum = [fakemobile2, fakemobile3, fakemobile4, fakemobile5, fakemobile6];

        for (let i = 0; i < user.length; i++) {

          cy.get('#my-account').click()
          cy.get('#signUp').click({ force: true })
          cy.contains('Hello !').should('exist')
          cy.contains('Tell us a few more details about yourself to help us').should('exist')
          cy.contains('create your customised, dashboard at Solvendo.').should('exist')
          cy.contains('What best describes you?').should('exist')
          cy.contains('Please select one').should('exist')
          cy.get('#debtor').click()
          cy.contains('Which kind of a debtor are you?').should('exist')



          var type = 'Others';
          cy.xpath("//button[text()='" + type + "']    ")
            .each(($el, index, $list) => {
              var debtrole = (user[i].Debtortype)// user[i].Debtortype;  
              //info.ddebtrtype;             
              if (debtrole !== "Others") {

                {
                  cy.xpath("//button[text()='" + debtrole + "']").click({ force: true })

                  //Firm’s Name
                  cy.contains('Firm’s Name').should('exist')
                  cy.contains('Please share details of the').should('exist')
                  cy.wait(500)
                  cy.get('#firmsName').should('have.a.attr', 'placeholder', 'Enter Name of the Company')
                  cy.get('[name="firmsName"]').click({ force: true }).type(info.dfirmname)
                  cy.get('#firmsNameStatus').click({ force: true })

                  //Select Industry
                  cy.contains('Select Industry').should('exist')
                  cy.contains('Please select the industry best applicable to you.').should('exist')
                  cy.get('#industry').should('have.a.attr', 'placeholder', 'Select Industry from this list')

                  cy.get('#industry').click()
                  var industryname = user[i].Industry;               //info.dselectindustry;
                  if (industryname != 'other') {
                    cy.get('#industry').type(industryname)
                      .type('{enter}')
                    cy.wait(4000)
                    cy.get('#industryConfirmed').click({ force: true })

                  }
                  else {
                    cy.get('#industry').type(industryname)
                      .type('{enter}')
                    cy.get('#industryConfirmed').click({ force: true })
                    cy.contains('Select Industry').should('exist')
                    cy.contains('Please ').should('exist')
                    cy.contains('mention the industry').should('exist')
                    cy.contains(' best applicable to you.').should('exist')
                    cy.get('#otherIndustry').should('have.a.attr', 'placeholder', 'Type your Industry here')
                    cy.get('#otherIndustry').click({ force: true }).type(info.dotherindustry)
                    cy.get('#otherIndustryConfirmed').click({ force: true })
                  }
                  //Address
                  cy.contains('Address')
                  cy.contains('Share a few more details about yourself to help us')
                  cy.contains('create your customised, dashboard at Solvendo.')
                  cy.get('#companyAddress').should('have.a.attr', 'placeholder', 'Please type the address here')
                  cy.get('#companyAddress').click({ force: true }).type(info.dcompanyaddress)
                  cy.get('#companyAddressPinCode').should('have.a.attr', 'placeholder', 'Pincode')
                  cy.xpath("//input[@id='companyAddressPinCode']").type(info.dpincode)
                    .type('{enter}')
                    .type('{enter}')
                  cy.wait(2000)
                  cy.get('div[class="side-box-buttons"]').click()

                  //Email
                  cy.contains('You will receive an email from us on this address to')
                  cy.contains('activate your account.')
                  cy.get('#email').should('have.a.attr', 'placeholder', 'Enter Your Email Address Here')
                  cy.get('#email').click({ force: true }).type(emails[i])    //fakeEmail,user[i].email
                  cy.get('#btnSignIn').then($button => {
                    if ($button.is(':disabled')) {
                      //you get here only if button is disabled
                      cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                        .each(($el, index, $list) => {
                          var errmsg = $el.text()
                          cy.log(errmsg)

                        })
                    }
                    else {

                      cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                      expect($el).to.have.prop('disabled', false)
                    }
                  })
                  // cy.get('#btnSignIn').click({ force: true })

                  //Password
                  cy.contains('Password')
                  cy.contains('choose your password')
                  cy.get('#password').should('have.a.attr', 'placeholder', 'Enter Your Password Here')
                  cy.get('#password').type(user[i].Password)                       //info.dpass
                  cy.get('#confirmPassword').should('have.a.attr', 'placeholder', 'Confirm Password Here*')
                  cy.get('#confirmPassword').type(user[i].ConfirmPass)            //info.dpass
                  cy.get('#btnSignIn').click()

                  //OTP
                  cy.contains('Mobile Number')
                  cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')

                  cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
                  cy.xpath("//input[@id='mobile']").click({ force: true }).type(mnum[i])//user[i].mobile
                  cy.wait(3000)
                  cy.get('#btnSignIn').then($button => {
                    if ($button.is(':disabled')) {
                      //you get here only if button is disabled
                      cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                        .each(($el, index, $list) => {
                          var errmsg = $el.text()
                          cy.log(errmsg)

                        })
                    }
                    else {

                      cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                      expect($el).to.have.prop('disabled', false)
                    }
                  })

                  //  cy.wait(4000)
                  cy.xpath('//div[@class="code-box-wrap"]').click({ force: true })
                  var expotp = '1111';
                  if (expotp == info.actotp) {

                    var digit1 = (info.actotp)[0];
                    cy.get('#value1').type(digit1)
                    var digit2 = (info.actotp)[1];
                    cy.get('#value2').type(digit2)
                    var digit3 = (info.actotp)[2];
                    cy.get('#value3').type(digit3)
                    var digit4 = (info.actotp)[3];
                    cy.get('#value4').type(digit4)

                    cy.get('#btnSignIn').click()
                    cy.wait(4000)
                    cy.get('#terms').check()
                    cy.get('#btnSignIn').click({ force: true })
                    cy.url().should('eq', Cypress.config().baseUrl + 'signin#!')
                  } else {
                    //cy.xpath('//div[@class="code-box-wrap"]').click({force:true})
                    var digit1 = (info.actotp)[0];
                    cy.get('#value1').type(digit1)
                    var digit2 = (info.actotp)[1];
                    cy.get('#value2').type(digit2)
                    var digit3 = (info.actotp)[2];
                    cy.get('#value3').type(digit3)
                    var digit4 = (info.actotp)[3];
                    cy.get('#value4').type(digit4)
                    cy.get('#btnSignIn').click()
                    cy.xpath('//div[@id="pinErrorMsg"]')
                      .each(($el, index, $list) => {
                        var errmsg = $el.text()
                        cy.log(errmsg + " Please enter valid OTP")

                      })
                  }
                  //cy.get('#pinResend>a').click({ force: true })



                }

              }

              //Selecting only others debtor

              else {
                cy.xpath('//button[text()="Others"]').click({ force: true })
                //Your Name
                cy.contains('Your Name')
                cy.contains('Share a few more details about ')
                cy.contains('yourself')
                cy.contains(' to help us create your customised dashboard at')
                cy.contains('Solvendo')
                cy.get('#name').should('have.a.attr', 'placeholder', 'Enter Your Name Here')
                cy.get('#name').click({ force: true }).type(fakename)
                cy.get('#btnSignIn').click({ force: true })
                //Address
                cy.contains('Address')
                cy.contains('Share a few more details about yourself to help us')
                cy.contains('create your customised, dashboard at Solvendo.')
                cy.get('#companyAddress').should('have.a.attr', 'placeholder', 'Please type the address here')
                cy.get('#companyAddress').click({ force: true }).type(info.dcompanyaddress)
                cy.get('#companyAddressPinCode').should('have.a.attr', 'placeholder', 'Pincode')
                cy.xpath("//input[@id='companyAddressPinCode']").type(info.dpincode)
                  .type('{enter}')
                  .type('{enter}')
                cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
                cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
                cy.get('div[class="side-box-buttons"]').click()

                //Email
                cy.contains('You will receive an email from us on this address to')
                cy.contains('activate your account.')
                cy.get('#email').should('have.a.attr', 'placeholder', 'Enter Your Email Address Here')
                cy.get('#email').click({ force: true }).type(emails[i])//fakeEmail,user[i].email
                cy.get('#btnSignIn').then($button => {
                  if ($button.is(':disabled')) {
                    //you get here only if button is disabled
                    cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                      .each(($el, index, $list) => {
                        var errmsg = $el.text()
                        cy.log(errmsg)

                      })
                  }
                  else {

                    cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                    expect($el).to.have.prop('disabled', false)
                  }
                })
                //cy.get('#btnSignIn').click({ force: true })
                //Password
                cy.contains('Password')
                cy.contains('choose your password')
                cy.get('#password').should('have.a.attr', 'placeholder', 'Enter Your Password Here')
                cy.get('#password').type(user[i].Password)    //info.dpass
                cy.get('#confirmPassword').should('have.a.attr', 'placeholder', 'Confirm Password Here*')
                cy.get('#confirmPassword').type(user[i].ConfirmPass)                     //info.dpass
                cy.get('#btnSignIn').click()
                //OTP
                cy.contains('Mobile Number')
                cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
                cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
                cy.xpath("//input[@id='mobile']").click({ force: true }).type(mnum[i])//fakemobile,user[i].mobile
                  .type('{enter}')

                cy.xpath('//button[@id="btnSignIn"]').click()

                cy.wait(2000)
                cy.xpath('//div[@class="code-box-wrap"]').click({ force: true })
                var expotp = '1111';
                if (expotp == info.actotp) {

                  var digit1 = (info.actotp)[0];
                  cy.get('#value1').type(digit1)
                  var digit2 = (info.actotp)[1];
                  cy.get('#value2').type(digit2)
                  var digit3 = (info.actotp)[2];
                  cy.get('#value3').type(digit3)
                  var digit4 = (info.actotp)[3];
                  cy.get('#value4').type(digit4)

                  cy.get('#btnSignIn').click()
                  cy.wait(4000)
                  cy.get('#terms').check()
                  cy.get('#btnSignIn').click({ force: true })

                  cy.url().should('eq', Cypress.config().baseUrl + 'signin')
                } else {
                  //cy.xpath('//div[@class="code-box-wrap"]').click({force:true})
                  var digit1 = (info.actotp)[0];
                  cy.get('#value1').type(digit1)
                  var digit2 = (info.actotp)[1];
                  cy.get('#value2').type(digit2)
                  var digit3 = (info.actotp)[2];
                  cy.get('#value3').type(digit3)
                  var digit4 = (info.actotp)[3];
                  cy.get('#value4').type(digit4)
                  cy.get('#btnSignIn').click()
                  cy.xpath('//div[@id="pinErrorMsg"]')
                    .each(($el, index, $list) => {
                      var errmsg = $el.text()
                      cy.log(errmsg + " Please enter valid OTP")

                    })
                }
                // cy.get('#pinResend>a').click({ force: true })

                // cy.get('.side-box-content > :nth-child(4) > a').click()


              }

            }
              //task
            )//task

          //for loop
        }
      })

  })
  it('CVA_A_TC-06-01: Verify on clicking of "back"  link is able to redirect to their respective screens in the SignUp flow of Debtor', function ()// Test case 1 
  {

    // cy.visit('/')
    cy.reload(true)

    cy.get('#my-account').click()
    cy.get('#signUp').click({ force: true })
    cy.contains('Hello !').should('exist')
    cy.contains('Tell us a few more details about yourself to help us').should('exist')
    cy.contains('create your customised, dashboard at Solvendo.').should('exist')
    cy.contains('What best describes you?').should('exist')
    cy.contains('Please select one').should('exist')
    cy.get('#debtor').click()
    cy.contains('Which kind of a debtor are you?').should('exist')


    var type = 'Others';
    cy.xpath("//button[text()='" + type + "']    ")
      .each(($el, index, $list) => {
        var debtrole = info.ddebtrtype;
        if (debtrole !== "Others") {

          {
            cy.xpath("//button[text()='" + debtrole + "']").click({ force: true })

            //Firm’s Name
            cy.contains('Firm’s Name').should('exist')
            cy.contains('Please share details of the').should('exist')
            cy.wait(500)
            cy.get('#firmsName').should('have.a.attr', 'placeholder', 'Enter Name of the Company')
            cy.get('[name="firmsName"]').click({ force: true }).type(fakename)
            cy.get('#firmsNameStatus').click({ force: true })

            //Select Industry
            cy.contains('Select Industry').should('exist')
            cy.contains('Please select the industry best applicable to you.').should('exist')
            cy.get('#industry').should('have.a.attr', 'placeholder', 'Select Industry from this list')

            cy.get('#industry').click()
            var industryname = info.dselectindustry;
            if (industryname != 'other') {
              cy.get('#industry').type(industryname)
                .type('{enter}')
              cy.wait(2000)
              cy.get('#industryConfirmed').click({ force: true })

              //Address
              cy.contains('Address')
              cy.contains('Share a few more details about yourself to help us')
              cy.contains('create your customised, dashboard at Solvendo.')
              cy.get('#companyAddress').should('have.a.attr', 'placeholder', 'Please type the address here')
              cy.get('#companyAddress').click({ force: true }).type(info.dcompanyaddress)
              cy.get('#companyAddressPinCode').should('have.a.attr', 'placeholder', 'Pincode')
              cy.xpath("//input[@id='companyAddressPinCode']").type(info.dpincode)
                .type('{enter}')
                .type('{enter}')
              cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
              cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
              cy.get('div[class="side-box-buttons"]').click()

              //Email
              cy.wait(4000)
              cy.contains('You will receive an email from us on this address to')
              cy.contains('activate your account.')
              cy.get('#email').should('have.a.attr', 'placeholder', 'Enter Your Email Address Here')
              cy.get('#email').click({ force: true }).type(fakeEmail2)
              cy.get('#btnSignIn').then($button => {
                if ($button.is(':disabled')) {
                  //you get here only if button is disabled
                  cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                    .each(($el, index, $list) => {
                      var errmsg = $el.text()
                      cy.log(errmsg)

                    })
                }
                else {

                  cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                  expect($el).to.have.prop('disabled', false)
                }
              })
              //cy.get('#btnSignIn').click({ force: true })

              //Password
              cy.contains('Password')
              cy.contains('choose your password')
              cy.get('#password').should('have.a.attr', 'placeholder', 'Enter Your Password Here')
              cy.get('#password').type(info.dpass)
              cy.get('#confirmPassword').should('have.a.attr', 'placeholder', 'Confirm Password Here*')
              cy.get('#confirmPassword').type(info.dpass)
              cy.get('#btnSignIn').click()

              //OTP
              cy.contains('Mobile Number')
              cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')

              cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
              cy.xpath("//input[@id='mobile']").click({ force: true }).type(fakemobile1)
                .type('{enter}')

              //backword flow starting from mobille otp number screen

              //mobile number screen
              cy.contains('Mobile Number')
              cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
              cy.contains('BACK')
              cy.xpath('//a[text()="BACK"]').click({ force: true })

              //password
              cy.contains('Password')
              cy.contains('With ')
              cy.contains(' as your Username,')
              cy.contains('choose your password')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //email
              cy.contains('Email')
              cy.contains('You will receive an email from us on this address to')
              cy.contains('activate your account.')
              cy.get('#btnSignIn').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Address
              cy.contains('Address')
              cy.contains('Share a few more details about yourself to help us')
              cy.contains('create your customised, dashboard at Solvendo.')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Select Indusrty
              cy.contains('Select Industry').should('exist')
              cy.contains('Select Industry').should('exist')
              cy.contains('Please select the industry best applicable to you.').should('exist')

              cy.contains('Change Industry')
              cy.get('#industryConfirmed').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Firm Name
              cy.contains('Firm’s Name').should('exist')
              cy.contains('Please share details of the').should('exist')
              //cy.get('#industryConfirmed').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Debtor
              //  cy.get('#debtor').click()
              cy.contains('Which kind of a debtor are you?').should('exist')
              cy.contains('Company registered under Company’s Act')
              cy.contains('Limited Liability Partnership')
              cy.contains('Partnership Firm')
              cy.contains('Sole Proprietorship Firm')
              cy.contains('Others')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Debtor or creditor
              cy.contains('Hello !').should('exist')
              cy.contains('Tell us a few more details about yourself to help us').should('exist')
              cy.contains('create your customised, dashboard at Solvendo.').should('exist')
              cy.contains('What best describes you?').should('exist')
              cy.get('#debtor').should('have.attr', 'type', 'button')
              cy.get('#creditor').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //SignUp
              cy.url().should('eq', Cypress.config().baseUrl + 'signin#')

            }
            else {
              cy.get('#industry').type(industryname)
                .type('{enter}')
              // cy.type('{enter}')

              cy.get('#industryConfirmed').click({ force: true })
              cy.contains('Select Industry').should('exist')
              cy.contains('Please ').should('exist')
              cy.contains('mention the industry').should('exist')
              cy.contains(' best applicable to you.').should('exist')
              cy.get('#otherIndustry').should('have.a.attr', 'placeholder', 'Type your Industry here')
              cy.get('#otherIndustry').click({ force: true }).type(info.dotherindustry)
              cy.get('#otherIndustryConfirmed').click({ force: true })

              //Address
              cy.contains('Address')
              cy.contains('Share a few more details about yourself to help us')
              cy.contains('create your customised, dashboard at Solvendo.')
              cy.get('#companyAddress').should('have.a.attr', 'placeholder', 'Please type the address here')
              cy.get('#companyAddress').click({ force: true }).type(info.dcompanyaddress)
              cy.get('#companyAddressPinCode').should('have.a.attr', 'placeholder', 'Pincode')
              cy.xpath("//input[@id='companyAddressPinCode']").type(info.dpincode)
                .type('{enter}')
                .type('{enter}')
              cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
              cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
              cy.get('div[class="side-box-buttons"]').click()

              //Email
              cy.contains('You will receive an email from us on this address to')
              cy.contains('activate your account.')
              cy.get('#email').should('have.a.attr', 'placeholder', 'Enter Your Email Address Here')
              cy.get('#email').click({ force: true }).type(fakeEmail3)
              cy.get('#btnSignIn').then($button => {
                if ($button.is(':disabled')) {
                  //you get here only if button is disabled
                  cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                    .each(($el, index, $list) => {
                      var errmsg = $el.text()
                      cy.log(errmsg)

                    })
                }
                else {

                  cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                  expect($el).to.have.prop('disabled', false)
                }
              })
              //cy.get('#btnSignIn').click({ force: true })

              //Password
              cy.contains('Password')
              cy.contains('choose your password')
              cy.get('#password').should('have.a.attr', 'placeholder', 'Enter Your Password Here')
              cy.get('#password').type(info.dpass)
              cy.get('#confirmPassword').should('have.a.attr', 'placeholder', 'Confirm Password Here*')
              cy.get('#confirmPassword').type(info.dpass)
              cy.get('#btnSignIn').click()

              //OTP
              cy.contains('Mobile Number')
              cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
              //cy.wait(10000)
              cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
              cy.xpath("//input[@id='mobile']").click({ force: true }).type(fakemobile)
                .type('{enter}')
              //  cy.xpath('//button[@id="btnSignIn"]').click()
              // cy.wait(4000)

              //backword flow starting from mobille otp number screen

              //mobile number screen
              cy.contains('Mobile Number')
              cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
              cy.contains('BACK')
              cy.xpath('//a[text()="BACK"]').click({ force: true })

              //password
              cy.contains('Password')
              cy.contains('With ')
              cy.contains(' as your Username,')
              cy.contains('choose your password')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //email
              cy.contains('Email')
              cy.contains('You will receive an email from us on this address to')
              cy.contains('activate your account.')
              cy.get('#btnSignIn').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Address
              cy.contains('Address')
              cy.contains('Share a few more details about yourself to help us')
              cy.contains('create your customised, dashboard at Solvendo.')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Select Indusrty
              cy.contains('Select Industry').should('exist')
              cy.contains('Please ').should('exist')
              cy.contains('mention the industry').should('exist')
              cy.contains(' best applicable to you.').should('exist')
              // cy.contains('oxygen')
              cy.get('#otherIndustryConfirmed').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //select industry
              cy.contains('Select Industry').should('exist')
              cy.contains('Please select the industry best applicable to you.').should('exist')
              cy.contains('other')
              cy.contains('Change Industry')
              cy.get('#industryConfirmed').should('have.attr', 'type', 'button')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Firm Name

              cy.contains('Please share details of the').should('exist')

              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Debtor
              cy.contains('Which kind of a debtor are you?').should('exist')
              cy.contains('Company registered under Company’s Act')
              cy.contains('Limited Liability Partnership')
              cy.contains('Partnership Firm')
              cy.contains('Sole Proprietorship Firm')
              cy.contains('Others')
              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //Debtor or creditor
              cy.contains('Hello !').should('exist')
              cy.contains('Tell us a few more details about yourself to help us').should('exist')
              cy.contains('create your customised, dashboard at Solvendo.').should('exist')
              cy.contains('What best describes you?').should('exist')
              cy.get('#debtor').should('have.attr', 'type', 'button')
              cy.get('#creditor').should('have.attr', 'type', 'button')
              cy.contains('BACK')
              cy.get('.back-button').click({ force: true })
              //SignUp
              cy.url().should('eq', Cypress.config().baseUrl + 'signin#')
            }
          }
        }
        //Selecting only others debtor

        else {
          cy.xpath('//button[text()="Others"]').click({ force: true })
          //Your Name
          cy.contains('Your Name')
          cy.contains('Share a few more details about ')
          cy.contains('yourself')
          cy.contains(' to help us create your customised dashboard at')
          cy.contains('Solvendo')
          cy.get('#name').should('have.a.attr', 'placeholder', 'Enter Your Name Here')
          cy.get('#name').click({ force: true }).type(fakename)
          cy.get('#btnSignIn').click({ force: true })
          //Address
          cy.contains('Address').should('exist')
          cy.contains('Share a few more details about yourself to help us')
          cy.contains('create your customised, dashboard at Solvendo.')
          cy.get('#companyAddress').should('have.a.attr', 'placeholder', 'Please type the address here')
          cy.get('#companyAddress').click({ force: true }).type(info.dcompanyaddress)
          cy.get('#companyAddressPinCode').should('have.a.attr', 'placeholder', 'Pincode')
          cy.xpath("//input[@id='companyAddressPinCode']").type(info.dpincode)
            .type('{enter}')
            .type('{enter}')
          cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
          cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
          cy.get('div[class="side-box-buttons"]').click()

          //Email
          cy.contains('You will receive an email from us on this address to')
          cy.contains('activate your account.')
          cy.get('#email').should('have.a.attr', 'placeholder', 'Enter Your Email Address Here')
          cy.get('#email').click({ force: true }).type(fakeEmail4)
          cy.get('#btnSignIn').then($button => {
            if ($button.is(':disabled')) {
              //you get here only if button is disabled
              cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                .each(($el, index, $list) => {
                  var errmsg = $el.text()
                  cy.log(errmsg)

                })
            }
            else {

              cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
              expect($el).to.have.prop('disabled', false)
            }
          })
          // cy.get('#btnSignIn').click({ force: true })
          //Password
          cy.contains('Password')
          cy.contains('choose your password')
          cy.get('#password').should('have.a.attr', 'placeholder', 'Enter Your Password Here')
          cy.get('#password').type(info.dpass)
          cy.get('#confirmPassword').should('have.a.attr', 'placeholder', 'Confirm Password Here*')
          cy.get('#confirmPassword').type(info.dpass)
          cy.get('#btnSignIn').click()
          //OTP
          cy.contains('Mobile Number')
          cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')

          cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
          cy.xpath("//input[@id='mobile']").click({ force: true }).type(fakemobile)
            .type('{enter}')

          // cy.xpath('//button[@id="btnSignIn"]').click()
          cy.wait(4000)

          //backword flow starting from mobille otp number screen

          //mobile number screen
          cy.contains('Mobile Number')
          cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
          cy.contains('BACK')
          cy.xpath('//a[text()="BACK"]').click({ force: true })

          //password
          cy.contains('Password')
          cy.contains('With ')
          cy.contains(' as your Username,')
          cy.contains('choose your password')

          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //email
          cy.contains('Email')
          cy.contains('You will receive an email from us on this address to')
          cy.contains('activate your account.')
          cy.get('#btnSignIn').should('have.attr', 'type', 'button')

          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //Address
          cy.contains('Address')
          cy.contains('Share a few more details about yourself to help us')
          cy.contains('create your customised, dashboard at Solvendo.')

          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })

          //Your Name
          cy.contains('Your Name').should('exist')
          cy.contains('Share a few more details about ').should('exist')
          cy.contains('yourself').should('exist')
          cy.contains(' to help us create your customised dashboard at').should('exist')
          cy.get('#name').should('have.attr', 'placeholder', 'Enter Your Name Here')

          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //Debtor

          cy.contains('Which kind of a debtor are you?').should('exist')
          cy.contains('Company registered under Company’s Act')
          cy.contains('Limited Liability Partnership')
          cy.contains('Partnership Firm')
          cy.contains('Sole Proprietorship Firm')
          cy.contains('Others')

          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //Debtor or creditor
          cy.contains('Hello !').should('exist')
          cy.contains('Tell us a few more details about yourself to help us').should('exist')
          cy.contains('create your customised, dashboard at Solvendo.').should('exist')
          cy.contains('What best describes you?').should('exist')
          cy.get('#debtor').should('have.attr', 'type', 'button')
          cy.get('#creditor').should('have.attr', 'type', 'button')

          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //SignUp
          cy.url().should('eq', Cypress.config().baseUrl + 'signin#')

        }
      })
  })

  it('CVA_A_TC-07: Verify whether  the user is able to SignUp as Creditor by fillling all the respective fields.', function ()// Test case 3
  {
    // cy.visit('/')
    const excelFilePath = "cypress\\fixtures\\files\\SignUpdata.xlsx";
    const sheetName = "Sheet2";
    //cy.visit('/')
    const emails = [fakeEmail10, fakeEmail11, fakeEmail12];
    const mnum = [fakemobile8, fakemobile9, fakemobile10];
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        for (let i = 0; i < user.length; i++) {
          cy.get('#my-account').click()
          cy.get("#signUp").click({ force: true })
          cy.contains('Hello !').should('exist')
          cy.contains('Tell us a few more details about yourself to help us').should('exist')
          cy.contains('create your customised, dashboard at Solvendo.').should('exist')
          cy.contains('What best describes you?').should('exist')
          cy.contains('Please select one').should('exist')
          cy.get('#creditor').click()

          // Select Creditor Type
          cy.contains('Hello').should('exist')
          cy.contains('Share a few more details about yourself to help us').should('exist')
          var type = 'Secured Financial Creditor'
          cy.xpath("//button[text()='" + type + "']    ")
            .each(($el, index, $list) => {
              var credrole = user[i].Creditortype;                     //info.creditortype;
              if (credrole !== "Secured Financial Creditor") {


                //Selecting  Unsecured Financial Creditor  or Operational Creditor

                {

                  cy.xpath("//button[text()='" + credrole + "']").click({ force: true })
                  //Firm’s Name
                  cy.contains('Your Name').should('exist')
                  cy.contains('Share a few more details about yourself to help us').should('exist')
                  cy.contains('create your customised dashboard at Solvendo.').should('exist')
                  cy.get('#name').click({ force: true }).type(fakename)
                  cy.get('#btnSignIn').click({ force: true })

                  //Address
                  cy.contains('Address')
                  cy.contains('Share a few more details about yourself to help us')
                  cy.contains('create your customised, dashboard at Solvendo.')
                  cy.get('#companyAddress').click({ force: true }).type(info.ccompanyaddress)
                  cy.get('#companyAddressPinCode').click({ force: true }).type('533401', { delay: 200 })
                    .type('{enter}')
                  cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
                  cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
                  cy.wait(3000)
                  cy.get('#btnSignIn').click({ force: true })

                  //Email
                  cy.contains('You will receive an email from us on this address to')
                  cy.contains('activate your account.')
                  cy.get('#email').click({ force: true }).type(emails[i])//user[i].email

                  cy.get('#btnSignIn').then($button => {
                    if ($button.is(':disabled')) {
                      //you get here only if button is disabled
                      cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                        .each(($el, index, $list) => {
                          var errmsg = $el.text()
                          cy.log(errmsg)

                        })
                    }
                    else {

                      cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                      expect($el).to.have.prop('disabled', false)
                    }
                  })
                  //S  cy.get('#btnSignIn').click({ force: true })
                  //Mobile No
                  cy.contains('Mobile Number')
                  cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
                  cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
                  cy.xpath("//input[@id='mobile']").click({ force: true }).type(mnum[i])//
                    .type('{enter}')
                    .type('{enter}')
                  //cy.xpath('//button[@id="btnSignIn"]').click()
                  cy.get('#btnSignIn').then($button => {
                    if ($button.is(':disabled')) {
                      //you get here only if button is disabled
                      cy.xpath('//div[@class="errortxt error-txt break-txt"]')
                        .each(($el, index, $list) => {
                          var errmsg = $el.text()
                          cy.log(errmsg)

                        })
                    }
                    else {

                      cy.xpath('//button[@id="btnSignIn"]').click({ force: true })
                      expect($el).to.have.prop('disabled', false)
                      //OTP
                      cy.contains('OTP')
                      cy.get('#pinResend>a').click({ force: true })

                      cy.get('.side-box-content > :nth-child(4) > a').click()
                      cy.xpath("//input[@id='terms']").check()
                      cy.get('#btnSignIn').click()
                    }
                  })

                }
              }
              //Selecting Only secured Financial Creditor 
              else {
                cy.xpath('//button[text()="Secured Financial Creditor"]').click({ force: true })

                //Firm’s Name
                cy.contains('Your Name').should('exist')
                cy.contains('Share a few more details about yourself to help us').should('exist')
                cy.contains('create your customised dashboard at Solvendo.').should('exist')
                cy.get('#name').click({ force: true }).type(fakename)
                cy.get('#btnSignIn').click({ force: true })
                //Address
                cy.contains('Address')
                cy.contains('Share a few more details about yourself to help us')
                cy.contains('create your customised, dashboard at Solvendo.')
                cy.get('#companyAddress').click({ force: true }).type(info.ccompanyaddress)
                cy.get('#companyAddressPinCode').click({ force: true }).type(info.cpincode, { delay: 200 })
                  .type('{enter}')
                  .type('{enter}')
                cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
                cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
                cy.wait(3000)
                cy.get('#btnSignIn').click({ force: true })

                //Email
                cy.contains('You will receive an email from us on this address to')
                cy.contains('activate your account.')
                cy.get('#email').click({ force: true }).type(emails[i])  //user[i].email
                cy.get('#btnSignIn').click({ force: true })
                //Password

                cy.contains('Our executive will soon get in touch with you!')
                cy.get('#btnSignIn').click({ force: true })
              }
            }  //task
            )//task

        }//for loop
      })


  })

  it('CVA_A_TC-07-01: Verify on clicking of "back" link is able to redirect to their respective screens in the SignUp flow of  Creditor', function ()// Test case 4
  {
    // cy.visit('/')
    cy.get('#my-account').click()
    cy.get("#signUp").click({ force: true })
    cy.contains('Hello !').should('exist')
    cy.contains('Tell us a few more details about yourself to help us').should('exist')
    cy.contains('create your customised, dashboard at Solvendo.').should('exist')
    cy.contains('What best describes you?').should('exist')
    cy.contains('Please select one').should('exist')
    cy.get('#creditor').click()

    // Select Creditor Type
    cy.contains('Hello').should('exist')
    cy.contains('Share a few more details about yourself to help us').should('exist')
    var type = 'Secured Financial Creditor'
    cy.xpath("//button[text()='" + type + "']    ")
      .each(($el, index, $list) => {
        var credrole = info.creditortype;
        if (credrole !== "Secured Financial Creditor") {


          //Selecting  Unsecured Financial Creditor  or Operational Creditor

          {

            cy.xpath("//button[text()='" + credrole + "']").click({ force: true })
            //Firm’s Name
            cy.contains('Your Name').should('exist')
            cy.contains('Share a few more details about yourself to help us').should('exist')
            cy.contains('create your customised dashboard at Solvendo.').should('exist')
            cy.get('#name').click({ force: true }).type(fakename)
            cy.get('#btnSignIn').click({ force: true })

            //Address
            cy.contains('Address')
            cy.contains('Share a few more details about yourself to help us')
            cy.contains('create your customised, dashboard at Solvendo.')
            cy.get('#companyAddress').click({ force: true }).type(info.ccompanyaddress)
            cy.get('#companyAddressPinCode').click({ force: true }).type('533401', { delay: 200 })
              .type('{enter}')
            cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
            cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
            cy.wait(4000)
            cy.get('#btnSignIn').click({ force: true })
            //Email
            cy.contains('You will receive an email from us on this address to')
            cy.contains('activate your account.')
            cy.get('#email').click({ force: true }).type(fakeEmail3)
            cy.get('#btnSignIn').click({ force: true })
            //Mobile No
            cy.contains('Mobile Number')
            cy.contains('An OTP will be sent to this number to verify your account and to recover your account/reset password.')
            cy.xpath('//input[@class="no-design mobile"]').should('have.a.attr', 'placeholder', 'Enter Mobile Number Here')
            cy.xpath("//input[@id='mobile']").click({ force: true }).type(fakemobile1)
              .type('{enter}')
              .type('{enter}')
            cy.xpath('//button[@id="btnSignIn"]').click()


            cy.contains('BACK')
            cy.get('.back-button').click({ force: true })
            // email 
            cy.contains('You will receive an email from us on this address to')
            cy.contains('activate your account.')
            cy.contains('BACK')
            cy.get('.back-button').click({ force: true })
            //Address
            cy.contains('Address')
            cy.contains('Share a few more details about yourself to help us')
            cy.contains('create your customised, dashboard at Solvendo.')
            cy.contains('BACK')
            cy.get('.back-button').click({ force: true })
            //Your name
            cy.contains('Your Name').should('exist')
            cy.contains('Share a few more details about yourself to help us').should('exist')
            cy.contains('create your customised dashboard at Solvendo.').should('exist')
            cy.contains('BACK')
            cy.get('.back-button').click({ force: true })
            //creditor type
            cy.get('#my-account').click()
            cy.contains('Hello !').should('exist')
            cy.contains('Share a few more details about yourself to help us create your customised, dashboard at ').should('exist')
            cy.contains('Which Creditor are you?').should('exist')
            cy.contains('Please select one').should('exist')
            cy.contains('Secured Financial Creditor').should('exist')
            cy.contains('Unsecured Financial Creditor').should('exist')
            cy.contains('Operational Creditor').should('exist')
            cy.contains('BACK')
            cy.get('.back-button').click({ force: true })
            //Debtor or creditor
            cy.contains('Hello !').should('exist')
            cy.contains('Tell us a few more details about yourself to help us').should('exist')
            cy.contains('create your customised, dashboard at Solvendo.').should('exist')
            cy.contains('What best describes you?').should('exist')
            cy.contains('BACK')
            cy.get('.back-button').click({ force: true })
            //signup page
            cy.url().should('eq', Cypress.config().baseUrl + 'signin#')




          }
        }
        //Selecting Only secured Financial Creditor 
        else {
          cy.xpath('//button[text()="Secured Financial Creditor"]').click({ force: true })

          //Firm’s Name
          cy.contains('Your Name').should('exist')
          cy.contains('Share a few more details about yourself to help us').should('exist')
          cy.contains('create your customised dashboard at Solvendo.').should('exist')
          cy.get('#name').click({ force: true }).type(fakename)
          cy.get('#btnSignIn').click({ force: true })
          //Address
          cy.contains('Address')
          cy.contains('Share a few more details about yourself to help us')
          cy.contains('create your customised, dashboard at Solvendo.')
          cy.get('#companyAddress').click({ force: true }).type(info.ccompanyaddress)
          cy.get('#companyAddressPinCode').click({ force: true }).type(info.cpincode, { delay: 200 })
            .type('{enter}')
            .type('{enter}')
          cy.xpath('//div[@class="form-group-text city"]').should('be.visible')
          cy.xpath('//div[@class="form-group-text state"]').should('be.visible')
          cy.get('#btnSignIn').click({ force: true })

          //Email

          //backword flow from email 
          cy.contains('You will receive an email from us on this address to')
          cy.contains('activate your account.')
          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //Address
          cy.contains('Address')
          cy.contains('Share a few more details about yourself to help us')
          cy.contains('create your customised, dashboard at Solvendo.')
          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //Your name
          cy.contains('Your Name').should('exist')
          cy.contains('Share a few more details about yourself to help us').should('exist')
          cy.contains('create your customised dashboard at Solvendo.').should('exist')
          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //creditor type

          cy.contains('Hello !').should('exist')
          cy.contains('Share a few more details about yourself to help us create your customised, dashboard at ').should('exist')
          cy.contains('Which Creditor are you?').should('exist')
          cy.contains('Please select one').should('exist')
          cy.contains('Secured Financial Creditor').should('exist')
          cy.contains('Unsecured Financial Creditor').should('exist')
          cy.contains('Operational Creditor').should('exist')
          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //Debtor or creditor
          cy.contains('Hello !').should('exist')
          cy.contains('Tell us a few more details about yourself to help us').should('exist')
          cy.contains('create your customised, dashboard at Solvendo.').should('exist')
          cy.contains('What best describes you?').should('exist')
          cy.contains('BACK')
          cy.get('.back-button').click({ force: true })
          //signup page
          cy.url().should('eq', Cypress.config().baseUrl + 'signin#')
        }
      })

  })
})


