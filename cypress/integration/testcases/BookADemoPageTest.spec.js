///<reference types="cypress-xpath" />
import info from '../../fixtures/bookADemoData.json'
import info2 from '../../fixtures/creditorlogindata.json'
import info1 from '../../fixtures/logindata.json'
import Login from '../POM/Login'

import BookADemoPage from '../POM/BookADemoPage'
describe('BookADemoPageTest', function () {
  const sn = new Login()
  const bk = new BookADemoPage()
  it('CVA_A_TC-16: Verify on Click of Book a Demo in the solvendo homepage, it redirecting to Demo popup window/screen.', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyTextcase0()

  })

  it('CVA_A_TC-16-01: Verifying whether  the text  is displaying in the Book a demo screen', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyTextcase0()

  })
  it('CVA_A_TC-16-02: Verify whether the confirm button is disabled  without Entering Name, email and Mobile Number', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyButtoncase01()

  })
  it('CVA_A_TC-16-03: Verify whether the confirm button is disabled  without Entering Name and Mobile Number', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyButtoncase1()

  })
  it('CVA_A_TC-16-04: Verify whether the confirm button is disabled  without Entering Email and Mobile Number', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyButtonCase2
  })
  it('CVA_A_TC-16-05 : Verify whether the user is able to click on confirm button after Entering Name,Email and Mobile Number and are redirected to next screen', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()

  })
  it('CVA_A_TC-16-06: Verify whether the  user  is able to click on confirm button after Entering date, Time and Write Demo Message.', function () {
    const bk = new BookADemoPage()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.EnterDateTimeDemoMsgToCheckConfirmButtonCase4()

  })
  it('CVA_A_TC-16-07: Verify whether the  user is not able to click on confirm button without Writing Demo Message.', function () {
    const bk = new BookADemoPage()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.EnterDateTimeDemoMsgToCheckConfirmButtonCase4Disabled()

  })
  it('CVA_A_TC-16-08:Verify Whether the user can reshedule date and time  by clicking on reschedule link , which shoud be able to redirect to the date and time selection screen ', function () {
    const bk = new BookADemoPage()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.EnterDateTimeDemoMsgToCheckConfirmButtonCase4()
    bk.reshuduleDateandTimeCase5()
    //bk.clickOnNotedButton()

  })
  it('CVA_A_TC-16-09: Verify the user cannot  be able  to request demo before 4 hrs from current time', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.currentDateAndTimeCase6()

  })
  it('CVA_A_TC-16-10: Verifying whether the requested demo date and time is equal to the date and time displaying in noted screen . ', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.notedScreenDateAndTimeassertionCase7
    bk.clickOnNotedButton()

  })
  it('CVA_A_TC-16-11: Verify  whether the user cannot book a demo from 18:00 to 11:00 ', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.dontBookADemoFrom18to11Case8()
  })
  it('CVA_A_TC-16-12:Verify whether the  user  is able to click on Noted button in last screen after Entering date, Time and Write Demo Message.', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyConfirmButtonEnterNameEmailMobileCase3()
    bk.EnterDateTimeDemoMsgToCheckConfirmButtonCase4()
    bk.clickOnNotedButton()
  })
  it('CVA_A_TC-16-13: Verify on Click of close icon in Book a Demo window/screen, user is able to close Demo popup window/screen.', function () {
    const bk = new BookADemoPage()
    bk.visit()
    bk.verifyTextcase0()
    bk.closeButton()
  })
  it('CVA_A_TC-16-14: Verify whether the  creditor  is able to click on confirm button after Entering date, Time and Write Demo Message.', function () {
    sn.visit()
    sn.fillEmail(info2.email)
    sn.fillPassward(info2.password)
    sn.submit()
    bk.bookADemoCred()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    cy.wait(2000)
    bk.confirmButton()

  })
  it('CVA_A_TC-16-15:Verify Whether the creditor can reshedule date and time  by clicking on reschedule link , which shoud be able to redirect to the date and time selection screen ', function () {
    sn.visit()
    sn.fillEmail(info2.email)
    sn.fillPassward(info2.password)
    sn.submit()
    bk.bookADemoCred()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    bk.resheduleDemo()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    cy.wait(2000)
    bk.confirmButton()

  })
  it('CVA_A_TC-16-16:Verify Whether the creditor can  book a demo by click on back button after click on confirm button by selecting date and time ', function () {
    sn.visit()
    sn.fillEmail(info2.email)
    sn.fillPassward(info2.password)
    sn.submit()
    bk.bookADemoCred()
    bk.clickOnBack()
    bk.confirmName()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    bk.confirmButton()

  })
  it('CVA_A_TC-16-17: Verify whether the  debtor  is able to click on confirm button after Entering date, Time and Write Demo Message.', function () {
    sn.visit()
    sn.fillEmail(info1.email)
    sn.fillPassward(info1.password)
    sn.submit()
    bk.bookADemoCred()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    cy.wait(2000)
    bk.confirmButton()

  })
  it('CVA_A_TC-16-18:Verify Whether the debtor can reshedule date and time  by clicking on reschedule link , which should be able to redirect to the date and time selection screen ', function () {
    sn.visit()
    sn.fillEmail(info1.email)
    sn.fillPassward(info1.password)
    sn.submit()
    bk.bookADemoCred()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    bk.resheduleDemo()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    cy.wait(2000)
    bk.confirmButton()

  })
  it('CVA_A_TC-16-19:Verify Whether the debtor can  book a demo by click on back button after click on confirm button by selecting date and time ', function () {
    sn.visit()
    sn.fillEmail(info1.email)
    sn.fillPassward(info1.password)
    sn.submit()
    bk.bookADemoCred()
    bk.clickOnBack()
    bk.confirmName()
    bk.selectDate()
    bk.selectTime()
    bk.demoMsg()
    bk.confirmButton()
    bk.confirmButton()

  })

})