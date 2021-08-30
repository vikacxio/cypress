///<reference types="cypress-xpath" />
import info from '../../fixtures/creditorlogindata.json'
import info1 from '../../fixtures/logindata.json'
import HelpPage from "../POM/HelpPage"
import Login from '../POM/Login'
describe('Help Page', function () {
    const hp = new HelpPage()
    const sn = new Login()

    it('CVA_A_TC-28: Verify on click of Help in footer Section is able to redirect to the Help Page ', function () {
        sn.visit()
        hp.help()
    })
    it('CVA_A_TC-28-01: Verify on click of Onboarding in help page is able to redirect to the Onboarding section and are able to display the content.', function () {
        hp.onbording()
    })
    it('CVA_A_TC-28-02: Verify on click of Dashboard in help page is able to redirect to the dashboard section and are able to display the content.', function () {
        hp.dashboard()
    })
    it('CVA_A_TC-28-03: Verify on click of Documents in help page is able to redirect to the documents section and are able to display the content.', function () {
        hp.documents()
    })
    it('CVA_A_TC-28-04: Verify on click of Report in help page is able to redirect to the report section and are able to display the content.', function () {
        hp.report()
    })
    it('CVA_A_TC-28-05: Verify on click of Stress in help page is able to redirect to the stress section and are able to display the content.', function () {
        hp.stress()
    })
    it('CVA_A_TC-28-06: Verify on click of All in help page is able to redirect to the All section and are able to display the content.', function () {
        hp.all()
    })
    it('CVA_A_TC-28-07: Verify on click of next button in help page is able to redirect to the next section and are able to display the content.', function () {
        sn.visit()
        hp.help()
        hp.pageLinkNext()
    })
    it('CVA_A_TC-28-08: Verify on click of previous button in help page is able to redirect to the previous section', function () {
        hp.pageLinkPrevious()
    })
    it('CVA_A_TC-28-09: Verify on click of search box user is able to search according to Entered text ', function () {
        hp.searchBox(info1.text)
    })
    it('CVA_A_TC-28-10: Verify on click of back button is able to redirect to the Homepage', function () {
        hp.backButton()
    })
    it('CVA_A_TC-28-11: Verify on click of My Account user is able to redirect to the Signin page', function () {
        hp.helpButton()
        hp.myAccount()
    })
    it('CVA_A_TC-28-12: Verify on click of send Email button user is able to redirect to  email window/screen', function () {
        hp.helpButton()
        hp.sendMail()
    })
    it('CVA_A_TC-28-13: Verify after login as a debtor on click of help able to redirect to the Help page', function () {
        sn.visit()
        sn.fillEmail(info1.email)
        sn.fillPassward(info1.password)
        sn.submit()
        hp.dashboardHelp()
        hp.verifyHelp()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-28-14: Verify  as a debtor on click of back button in help page redirect to the My dashboard', function () {
        sn.visit()
        sn.fillEmail(info1.email)
        sn.fillPassward(info1.password)
        sn.submit()
        hp.dashboardHelp()
        hp.backButton()
        hp.backCreditor()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-28-15: Verify after login as a creditor on click of help is able to redirect to the Help page', function () {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
        hp.dashboardHelp()
        hp.verifyHelp()
    })
    it('CVA_A_TC-28-16: Verify  as a creditor on click of back button in help page is able to redirect to the My dashboard', function () {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
        hp.dashboardHelp()
        hp.backButton()
        hp.backCreditor()
        sn.clickOnLogout()
    })

    it('CVA_A_TC-28-17: Verify on click of About Us in footer Section is able to redirect to the about us page', function () {
        sn.visit()
        hp.helpButton()
        hp.aboutUs()

    })
    it('CVA_A_TC-28-18: Verify on click of Services in footer Section is able to redirect to the Services page', function () {
        hp.helpButton()
        hp.services()

    })
    it('CVA_A_TC-28-19: Verify on click of Book a Demo in footer Section is able to open Book a Demo window ', function () {
        hp.helpButton()
        hp.bookADemo()

    })
    it('CVA_A_TC-28-20: Verify on click of FAQs in footer Section is able to redirect to the FAQs page  ', function () {
        hp.helpButton()
        hp.faqs()

    })
    it('CVA_A_TC-28-21: Verify on click of User Aggrement & Data Privacy Policy in footer Section is able to redirect to the User Aggrement & Data Privacy Policy page ', function () {
        hp.helpButton()
        hp.userAggrement()

    })
    it('CVA_A_TC-28-22: Verify on click of help in footer Section is able to redirect to the Help page  ', function () {
        hp.help()
    })
    it('CVA_A_TC-28-23: Verify on click of facebook icon in footer Section is able to redirect to the Facebook page  ', function () {
        hp.facebook()
    })
    it('CVA_A_TC-28-24: Verify on click of instagram icon in footer Section is able to redirect to the Instagram page  ', function () {
        hp.instagram()
    })
    it('CVA_A_TC-28-25: Verify on click of LinkedIn icon in footer Section is able to redirect to the LinkedIn page  ', function () {
        hp.linkedIn()
    })
    it('CVA_A_TC-28-26: Verify on click of Twitter icon in footer Section is able to redirect to the Twitter page  ', function () {
        hp.twitter()
    })
    it('CVA_A_TC-28-27: Verify the company logo and company name in footer should exist', function () {
        hp.footerLogo()
    })
    it('CVA_A_TC-28-28: Verify on click of Contact Us in footer Section is able to redirect to the contact us page  ', function () {
        hp.contactUs()

    })


})