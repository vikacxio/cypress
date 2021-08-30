///<reference types="cypress-xpath" />
import info from '../../fixtures/creditorlogindata.json'
import Login from '../POM/Login'
import CreditorNews from '../POM/CreditorNews';
describe('News Creditor', function () {
  const sn = new Login();
  const nws = new CreditorNews();

  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.crednews)
    sn.fillPassward(info.password)
    sn.submit()
  })

  it('CVA_A_TC-22:  Verify whether the creditor clicks on news icon is able to open the News slider', function () {
    nws.clickOnNews()

  })
  it('CVA_A_TC-22-01: Verify the title and URL of news on click of the news icon.', function () {
    nws.clickOnNews()
    nws.verifyTitle()

  })
  it('CVA_A_TC-22-02: Verify whether the creditor is able to click on View All link in news slider is able to redirect to the news page.', function () {
    nws.clickOnNews()
    nws.clickonViewall()

  })
  it.skip('CVA_A_TC-22-03: Verify that after clicking on link of the selected card should be redirect to the news page  ', function () {
    nws.clickOnNews()
    nws.viewnewsCard()
    sn.clickOnLogout()
  })

  it('CVA_A_TC-22-04: Verify that on click of remind me icon is able to display the  remind me later selected in news page  ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.remindme()
    nws.checkRemindme()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-22-05: Verify  that on click of Priority icon creditor is able to display all the news in which are added to priority    ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.priority()
    nws.checkPriority()
    sn.clickOnLogout()

  })
  it.skip('CVA_A_TC-22-06: Verify that after selecting Add to Priority icon and Remind me later icon creditor is able to see all the News in which are added to priority and  in remind me later ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.priority()
    nws.remindme()
    nws.checkPriority()
    nws.checkRemindme()

  })
  it('CVA_A_TC-22-07: Verify on click of filter icon of industry and selecting particular industry, creditor  should able to display all the news having selected industry   ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.filter()
    nws.checkFilter()

  })
  it.skip('CVA_A_TC-22-08: Verify in the filter dropdown, creditor able to select multiple industries for filter out news accourding to industry ', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.filter()
    nws.filter2()
    nws.checkFilter2()
    sn.clickOnLogout()
  })
  it(" CVA_A_TC-22-09: Verify whether the creditor is able to search news of company by entering company name in search box", function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.searchCompany()
    sn.clickOnLogout()
  })
  it.skip(" CVA_A_TC-22-10: Verify that on click of sort icon abd by selecting ascending creditor is able to see all the  news in ascending order", function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.sortAscending()
  })
  it.skip(" CVA_A_TC-22-11: Verify that on click of sort icon and by selecting descending creditor is able to see all the  news in descending order", function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.sortDescending()
  })
  it.skip('CVA_A_TC-22-12: Verify whether the creditor is able to get all the news by clicking on the All.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.all()

  })
  it.skip('CVA_A_TC-22-13: Verify whether the creditor is able to get the latest news by clicking on the Latest.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.latest()

  })
  it.skip('CVA_A_TC-22-14: Verify whether the creditor is able to get This week news by clicking on the this Week.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.thisWeek()

  })
  it.skip('CVA_A_TC-22-15:  Verify whether the creditor is able to get this month news by clicking on the this month.', function () {
    nws.clickOnNews()
    nws.clickonViewall()
    nws.thisMonth()
  })
  it('CVA_A_TC-22-16:  Verify whether the creditor is able to close news slider by click on close icon.', function () {
    nws.clickOnNews()
    nws.closeButton()
  })

})
export default CreditorNews