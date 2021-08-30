///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import Login from '../POM/Login'
import DebtorConnectToBank from '../POM/DebtorConnectToBank'
describe('Connect To Bank', function () {
  const cb = new DebtorConnectToBank()
  const sn = new Login()
  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
  })
  it('CVA_A_TC-09: Verify the debtor is able to click on "Connect to Bank card"  in Dashboard and can be to give a request bank by filling all the mandatory details', function () {
    cb.clickOnConnectToBank()
    cb.enterBankName()
    cb.enterBankDetails()
    cb.enterCity()
    cb.enterBranchName(info.branchname)
    cb.confirmationPage()
    cb.acceptButton()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-09-01:Verify the debtor cannot request a bank if the  already request is sent.', function () {
    cb.revokeRequest()
  })
  it('CVA_A_TC-09-02: Verify the debtor is clicking on "back " link  is able to redirect to respective screens from  confirmation page to bank selection Page  ', function () {
    cb.clickOnConnectToBank()
    cb.enterBankName()
    cb.enterBankDetails()
    cb.enterCity()
    cb.enterBranchName(info.branchname)
    cb.backFlow()
    sn.clickOnLogout()

  })
  it('CVA_A_TC-09-03:Verify on click of Deny button is able to cancel all the request and retain to default state i.e Connet To my bank Card', function () {
    cb.clickOnConnectToBank()
    cb.enterBankName()
    cb.enterBankDetails()
    cb.enterCity()
    cb.enterBranchName(info.branchname)
    cb.confirmationPage()
    cb.denyButton()
  })



})