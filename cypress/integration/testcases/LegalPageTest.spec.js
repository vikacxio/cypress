///<reference types="cypress-xpath" />
import info from '../../fixtures/creditorlogindata.json'
import info1 from '../../fixtures/logindata.json'
import LegalPage from '../POM/LegalPage'
import Login from '../POM/Login'
describe('Legal Page', function () {
    const lg = new LegalPage()
    const sn = new Login()

    it('CVA_A_TC-29:Verify on click ofUser Agreement & Data Privacy Policy in footer Section is able to redirect to the Legal page', function () {
        sn.visit()
        lg.userAggrement()
    })

    it('CVA_A_TC-29-01:Verify the title and URL of the legal page should exist ', function () {
        lg.verifyTitleUrl()
    })
    it('CVA_A_TC-29-02:Verify the titles and  subtitles and texts should exists in legal page ', function () {
        lg.verifyTexts()
    })
    it('CVA_A_TC-29-03:Verify all the links in legal section should be clickable and able to redirect to the respective page ', function () {
        lg.verifyLinks()
    })
    it('CVA_A_TC-29-04:Verify all the links in Privacy Policy section should be clickable and able to redirect to the respective page ', function () {
        lg.userAggrement()
        lg.privacyPolicyLink()
    })

    it('CVA_A_TC-29-05:Verify on click of Privacy Policy user is able to redirect to the Privacy Policy section', function () {
        lg.userAggrement()
        lg.privacyPolicy()
    })

    it('CVA_A_TC-29-06:Verify on click of search box user is able to search according to entered text', function () {
        lg.searchBar()
    })
    it('CVA_A_TC-29-07:Verify on click of back button is able to redirect to the Homepage', function () {
        lg.backButton()
    })
    it('CVA_A_TC-29-08:Verify on click of My Account user is able to redirect to the Signin page', function () {
        lg.userAggrement()
        lg.myAccount()
    })
    it('CVA_A_TC-29-09:Verify on click of download icon  user is able to download solvendo terms and aggrement document', function () {
        lg.userAggrement()
        lg.downloadicon()

    })
    it('CVA_A_TC-29-10:Verify on click of print icon  user is able to redirect to the print window/screen', function () {
        lg.userAggrement()
        lg.printIcon()

    })
    it('CVA_A_TC-29-11:Verify after login as a debtor on click of User Agreement And Data Privacy Policy to redirect to the Legal page', function () {
        sn.visit()
        sn.fillEmail(info1.email)
        sn.fillPassward(info1.password)
        sn.submit()
        lg.userAggrementBoth()
        lg.debtorLegal()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-29-12:Verify  as a debtor on click of back button in Legal page redirect to the My dashboard', function () {
        sn.visit()
        sn.fillEmail(info1.email)
        sn.fillPassward(info1.password)
        sn.submit()
        lg.userAggrementBoth()

        lg.backButton()
        lg.backCreditor()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-29-13:Verify  as a debtor on click of User Agreement And Data Privacy Policy in legal page checkbox should exixt', function () {
        sn.visit()
        sn.fillEmail(info1.email)
        sn.fillPassward(info1.password)
        sn.submit()
        lg.userAggrementBoth()
        lg.userAggrementButton()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-29-14:Verify after login as a creditor on click of User Agreement And Data Privacy Policy able to redirect to the Legal page', function () {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
        lg.userAggrementBoth()
        lg.creditorLegal()
    })
    it('CVA_A_TC-29-15: Verify  as a creditor on click of back button in Legal page redirect to the My dashboard', function () {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
        lg.userAggrementBoth()

        lg.backButton()
        lg.backCreditor()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-29-16:Verify  as a creditor on click of User Agreement And Data Privacy Policy in legal page checkbox should exist', function () {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
        lg.userAggrementBoth()
        lg.userAggrementButton()
        sn.clickOnLogout()
    })

    it('CVA_A_TC-29-17: Verify on click of About Us in Header Section is able to redirect to the about us page', function () {
        sn.visit()
        lg.userAggrement()
        lg.aboutUs()

    })
    it('CVA_A_TC-29-18: Verify on click of Services in Header Section is able to redirect to the Services page', function () {
        lg.userAggrement()
        lg.services()

    })
    it('CVA_A_TC-29-19:Verify on click of Demo in Header Section is able to open Book a Demo window ', function () {
        lg.userAggrement()
        lg.bookADemo()

    })
    it('CVA_A_TC-29-20:Verify on click of FAQs in Header Section is able to redirect to the FAQs page ', function () {
        lg.userAggrement()
        lg.faqs()

    })

    it('CVA_A_TC-29-21:Verify on click of Contact Us in header Section is able to redirect to the contact us page ', function () {
        lg.contactUs()

    })


})