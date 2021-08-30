///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import faker from 'faker'
var fakeEmail = faker.internet.email();
var fakemobile = faker.random.number({ min: 1000000000, max: 9999999999 })
import Login from '../POM/Login'
describe('Login', function () {
  const sn = new Login()
  it('CVA_A_TC-05:Verify whether the user is able to login successfully by entering valid username and valid password  ', function () {
    const sn = new Login()
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-05-01:Verify whether the user is not able to login with  valid email and invalid Password and it should be able to show error msg after 3 attempts', function () {

    sn.visit()
    sn.fillEmail(info.testemail)
    sn.fillPassward(info.wrongpass)
    sn.submit()

    sn.fillEmail(info.testemail)
    sn.fillPassward(info.wrongpass)
    sn.submit()

    sn.fillEmail(info.testemail)
    sn.fillPassward(info.wrongpass)
    sn.submit()
    sn.errormsgofWrongPassword()

  })
  it('CVA_A_TC-05-02:Verify whether the user is not able to login with  invalid email and valid Password and it should be able to show error msg after 3 attempts', function () {

    sn.visit()
    sn.fillEmail(fakeEmail)
    sn.fillPassward(info.password)
    sn.submit()

    sn.fillEmail(fakeEmail)
    sn.fillPassward(info.password)
    sn.submit()

    sn.fillEmail(fakeEmail)
    sn.fillPassward(info.password)
    sn.submit()
    sn.errorMsgUserBlocking()


  })
  it('CVA_A_TC-05-03:Verify by entering a invalid OTP for a 3 times should be able to block user for 15 min', function () {

    sn.visit()
    sn.fillEmail(info.testemail)
    sn.forgotPassword()
    sn.enterNumber(fakemobile)
    sn.clickOnVerify()
    sn.enterOTP(info.actotp)
    sn.enterOTP(info.actotp)
    sn.enterOTP(info.actotp)
    sn.forgotpassErrorMsg()
    sn.errorMsgUserBlocking()

  })

})