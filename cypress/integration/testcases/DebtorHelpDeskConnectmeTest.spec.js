///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import info1 from '../../fixtures/debtorhelpdeskconnetdata.json'
import Login from '../POM/Login'
import DebtorHelpDeskConnectMe from '../POM/DebtorHelpDeskConnectMe'
describe('Help Executive', function () {
  const hd = new DebtorHelpDeskConnectMe()
  const sn = new Login()
  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
  })

  it('CVA_A_TC-10: Verify the debtor is able to click on "connect me" link in the Help Executive card in Dashboard', function () {
    hd.clickOnConnectMe()
    sn.clickOnLogout()
  })

  it('CVA_A_TC-10-01: Verify the debtor not be able to request for a call before 11:00 AM and after 18:00 PM .', function () {
    hd.clickOnConnectMe()
    hd.scheduleDate()
    hd.selectTimeNotAvailable()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-10-02: Verify the debtor is be able to click on noted button after filling all the details and returned to the help desk connect card.', function () {
    hd.clickOnConnectMe()
    hd.scheduleDate()
    hd.selectTime()
    hd.clickOnNoted()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-10-03: Verify the debator is able to reshedule a call in last screen by clicking on "Reshedule it" link it ill redirect to select the date and time .', function () {
    hd.clickOnConnectMe()
    hd.scheduleDate()
    hd.selectTime()
    hd.resheduleCall()
    hd.scheduleDate()
    hd.selectTime()
    hd.clickOnNoted()
    sn.clickOnLogout()
  })

  it('CVA_A_TC-10-04: Verify  on current date debtor should not able schedule a call before 4 hrs from current time', function () {
    hd.clickOnConnectMe()
    hd.currentDateandTime()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-10-05: Verifying whether the schedule a call time and date are showing in noted screen is as per input given. ', function () {
    hd.clickOnConnectMe()
    hd.scheduleDate()
    hd.selectTime()
    hd.notedDateAndTime()
    sn.clickOnLogout()
  })


})