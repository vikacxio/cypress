
///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import Login from '../POM/Login'
import DebtorDashboard from '../POM/DebtorDashboard'
describe('Debtor Dashboard 2', function () {
  const dc = new DebtorDashboard()
  const sn = new Login()
  /*beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
  })*/

  it('CVA_A_TC-27: Verify the title and URL of the Debtor dashboard after login as a Debtor', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.verifyTitleandUrl()
  })
  it('CVA_A_TC-27-01: Verifying the Company Name and Header texts should exist in debtor Dashboard.  ', function () {
    dc.verifyCompanyName()
  })
  it('CVA_A_TC-27-02: Verifying whether the icons and texts in the Explore Card should exist in Debtor Dashboard.', function () {
    dc.verifyTexts()
  })
  it('CVA_A_TC-27-03: Verify on click of which Documents Required  button  is able to view the new window/screen in next step card  ', function () {
    dc.nextStep2()
  })
  it('CVA_A_TC-27-04: Verify on click of Contact Us in next step card confirm button should be disabled withod selecting time ', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.contactUsNextStep()
    dc.disabledButton()
    dc.closeButton()

  })

  it('CVA_A_TC-27-05: Verify on click of contact us in next step card  debtor cant be able to request for a call before 11:00 AM and after 18:00 PM .', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.contactUsNextStep()
    dc.scheduleDate()
    dc.selectTimeNotAvailable()
    dc.closeButton()
  })
  it('CVA_A_TC-27-06: Verify on click of contact us in next step card debtor can be able to click on noted button after filling all the details and returned to the help desk connect card.', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.contactUsNextStep()
    dc.scheduleDate()
    dc.selectTime()
    dc.confirmButton()
    dc.clickOnNoted()

  })
  it('CVA_A_TC-27-07: Verify on click of contact us in next step card debator can able to reshedule a call in last screen by clicking on "Reshedule it" link it ill redirect to select the date and time .', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.contactUsNextStep()
    dc.scheduleDate()
    dc.selectTime()
    dc.confirmButton()
    dc.resheduleCall()
    dc.scheduleDate()
    dc.selectTime()
    dc.confirmButton()
    dc.clickOnNoted()

  })

  it('CVA_A_TC-27-08: Verify  on click of contact us in next step card on current date debtor should not able schedule a call before 4 hrs from current time', function () {
    dc.contactUsNextStep()
    dc.currentDateandTime()
  })
  it('CVA_A_TC-27-09: Verifying on click of contact us in next step card whether the schedule a call time and date are showing in noted screen is as per input given. ', function () {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
    dc.contactUsNextStep()
    dc.scheduleDate()
    dc.selectTime()
    dc.confirmButton()
    dc.notedDateAndTime()
    dc.clickOnNoted()
  })

  it('CVA_A_TC-27-10: Verify  that on click of upload data icon is able to view upload data Window/Screen and able to upload data ', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.uploadData()
  })

  it.skip('CVA_A_TC-27-11: Verifying  debtor is able to view news in Industry new card in Dashboard.', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.industryCard()
  })

  it('CVA_A_TC-27-12: Verify debtor is able  display the read case studies card and and able to show text in the card.', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.verifyCaseStudy()
  })
  it('CVA_A_TC-27-13: Verifying debtor is able to click on  connect to bank icon and pop up screen are able to display. ', function () {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
    dc.connectToBank()
  })
  it.skip('CVA_A_TC-27-14: Verifying that the debtor is able to see industry stress card and stress progressbar as per industry onboard while signup.', function () {
    dc.industryStress()
  })
  it('CVA_A_TC-27-15: Verifyng  that debtor dashboard contains Help Desk connect card and able to request call', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.helpDesk2()
  })
  it('CVA_A_TC-27-16: Verifying the debtor dashboard contains "Firm Card" ', function () {
    dc.likeCard()
  })
  it('CVA_A_TC-27-17: Verifying debtor dashboard contains  "Vision Card".  ', function () {
    dc.verfiyOurVision()
  })
  it('CVA_A_TC-27-18: Verify on click of tour icon in debtor dashboard is able to open tour window/screen', function () {
    dc.tour()
  })
  it.skip('CVA_A_TC-27-19: Verify on click of search icon in dashboard debtor is able to search by Enterig text', function () {
    dc.search()
  })
  it('CVA_A_TC-27-20: Verify on click of news icon in dashboard debtor is able to redirect to the News Page  ', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.clickOnNews()
  })
  it('CVA_A_TC-27-21: Verify on click of notification icon in dashboard debtor is able to redirect to the Notification Page ', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.clickOnNotifications()
  })
  it('CVA_A_TC-27-22: Verify on click of tasks icon in dashboard debtor is able to redirect to the Tasks Page  ', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.clickOnTasks()
  })
  it('CVA_A_TC-27-23: Verify on click of meeting icon in dashboard debtor is able to redirect to the Meeting Page  ', function () {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
    dc.clickOnMeeting()
  })
  it('CVA_A_TC-27-24: Verify on click of profile icon in dashboard  is able to redirect to the debtor profile window/screen  ', function () {
    dc.clickOnProfile()
    sn.clickOnLogout()
  })

})