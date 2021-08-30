
///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import Login from '../POM/Login'
import DebtorNotifications from '../POM/DebtorNotifications'
describe('Debtor Notifications', function () {
  const nt = new DebtorNotifications()
  const sn = new Login()
  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
  })

  it('CVA_A_TC-24: Verify whether the debtor clicks on notification icon is able to open the notification slider', function () {
    nt.clickOnNotifications()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-24-01: Verify the title and URL of notifications on click of the notification icon.', function () {
    nt.clickOnNotifications()
    nt.titleandUrlVerification()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-24-02: Verify whether the debtor is able to click on View All link in notification slider is able to redirect to the notification page.', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-24-03: Verify that after clicking on link of the selected card should be redirect to the notifaction page ', function () {
    nt.clickOnNotifications()
    nt.viewCard()
    sn.clickOnLogout()
  })

  it('CVA_A_TC-24-04: Verify that on click of remind me icon is able to display the  remind me later selected in notifications  page ', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.remindme()
    nt.checkRemindme()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-24-05: Verify  that on click of Priority icon debtor is able to display all the notifications in which are added to priority    ', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.priority()
    nt.checkPriority()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-24-06: Verify that on click of  Priority icon and Remind me later icon debtor is able to display all the notifications in which are added to priority and  in remind me later ', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.priority()
    nt.remindme()
    nt.checkPriority()
    nt.checkRemindme()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-24-07: Verify that on click of  sort icon and by selecting ascending debtor is able to display all the notifications in ascending order', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.sortAscending()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-24-08: Verify that on click of  sort icon and by selecting Descending debtor is able to display all the notifications in descending order', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.sortDescending()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-24-09: Verify that on click of view all print icon should be visible to debtor', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.clickOnPrint()

  })
  it('CVA_A_TC-24-10: Verify whether the debtor is able to get all the notifications by clicking on the All.', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.all()

  })
  it.skip('CVA_A_TC-24-11: Verify whether the Debtor is able to get the latest notifications by clicking on the Latest.', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.latest()

  })
  it.skip('CVA_A_TC-24-12: Verify whether the Debtor is able to get This week notifications by clicking on the this Week.', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.thisWeek()

  })
  it.skip('CVA_A_TC-24-13:  Verify whether the Debtor is able to get this month notifications by clicking on the this month.', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.thisMonth()
  })
  /*it.only('CVA_A_TC-24-14: Verify that date format', function () {
    nt.clickOnNotifications()
    nt.clickOnViewAll()
    nt.dateandTime()
  })*/
  it('CVA_A_TC-24-14:  Verify whether the debtor is able to close notification slider on click of close icon.', function () {
    nt.clickOnNotifications()
    nt.closeBox()
  })

})