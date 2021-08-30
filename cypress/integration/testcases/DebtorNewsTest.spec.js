///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import Login from '../POM/Login'
import DebtorNews from '../POM/DebtorNews';
describe('News Debtor', function () {
  const sn = new Login();
  const nws = new DebtorNews();

  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.newsemail)
    sn.fillPassward(info.newspass)
    sn.submit()
  })

  it('CVA_A_TC-21: Verify whether the debtor clicks on news icon is able to open the News slider', function () {
    nws.clickOnNews()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-21-01: Verifying  the title and URL of news on click of the news icon.', function () {
    nws.clickOnNews()
    nws.verifyTitleURL()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-21-02: Verify whether the debtor is able to click on View All link in news slider is able to redirect to the news page.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-21-03: Verify that after click on link of the selected card should be redirect to the news page  ', function () {
    nws.clickOnNews()
    nws.viewnewsCard()
    sn.clickOnLogout()
  })

  it('CVA_A_TC-21-04: Verify that on click of remind me icon is able to display the  remind me later selected in news page  ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.remindme()
    nws.checkRemindme()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-21-05: Verify  that on click of Priority icon debtor is able to display all the news in which are added to priority    ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.priority()
    nws.checkPriority()

  })
  it.skip('CVA_A_TC-21-06: Verify after selecting  both Add to Priority icon and Remind me later icon debtor is able to see all the News in which are added to priority and  in remind me later  ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.priority()
    nws.remindme()
    nws.checkPriority()
    nws.checkRemindme()

  })
  it.skip('CVA_A_TC-21-07: Verify on click of sort icon and by selecting ascending debtor is able to see all the News in ascending order', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.sortAscending()

  })
  it.skip('CVA_A_TC-21-08: Verify on click of sort icon and by selecting descending debtor is able to see all the News in descending order', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.sortDescending

  })
  it('CVA_A_TC-21-09: Verify that on click of view all print icon should be visible to debtor', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.clickOnPrint()
  })

  it.skip('CVA_A_TC-21-10: Verify whether the debtor is able to get all the news by clicking on the All.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.all()
  })

  it.skip('CVA_A_TC-21-11: Verify whether the Debtor is able to get the latest news by clicking on the Latest.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.latest()
  })
  it.skip('CVA_A_TC-21-12: Verify whether the Debtor is able to get This week news by clicking on the this Week.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.thisWeek()
  })
  it.skip('CVA_A_TC-21-13:  Verify whether the Debtor is able to get this month news by clicking on the this month.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.thisMonth()
  })
  it('CVA_A_TC-21-14:  Verify whether the debtor is able to close news slider by click on close icon.', function () {
    nws.clickOnNews()
    nws.closeButton()
  })
  /* it.skip('CVA_A_TC-21-07: Verify after clicking on filter icon of industry and selecting particular industry, debtor  should able to display all the notifications having selected industry   ', function () {
     nws.clickOnNews()
     nws.clickonViewall()
     nws.filter()
     nws.checkFilter()
     sn.clickOnLogout()
   })*/

})