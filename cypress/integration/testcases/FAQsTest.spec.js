///<reference types="cypress-xpath" />
import FAQs from '../POM/FAQs'
import Login from '../POM/Login'
describe('FAQs', function () {
    const lg = new FAQs()
    const sn = new Login()

    it('CVA_A_TC-04:Verify on click of FAQs  in Header Section is able to redirect to the FAQs page', function () {
        sn.visit()
        lg.faqs()
    })

    it('CVA_A_TC-04-01:Verify the title and URL of the FAQs page should exist ', function () {
        lg.verifyTitleUrl()
    })
    it('CVA_A_TC-04-02: Verify on click of Onboarding in FAQs page is able to redirect to the Onboarding section and are able to display the content.', function () {
        lg.onbording()
    })
    it('CVA_A_TC-04-03: Verify on click of Dashboard in FAQs page is able to redirect to the dashboard section and are able to display the content.', function () {
        lg.dashboard()
    })
    it('CVA_A_TC-04-04: Verify on click of Documents in FAQs page is able to redirect to the documents section and are able to display the content.', function () {
        lg.documents()
    })
    it('CVA_A_TC-04-05: Verify on click of Report in FAQs page is able to redirect to the report section and are able to display the content.', function () {
        lg.report()
    })
    it('CVA_A_TC-04-06: Verify on click of Stress in FAQs page is able to redirect to the stress section and are able to display the content.', function () {
        lg.stress()
    })
    it('CVA_A_TC-04-07: Verify on click of All in FAQs page is able to redirect to the All section and are able to display the content.', function () {
        lg.all()
    })
    it('CVA_A_TC-04-08: Verify on click of Payment in FAQs page is able to redirect to the stress section and are able to display the content.', function () {
        lg.payments()
    })
    it('CVA_A_TC-04-09: Verify on click of next button in FAQs page is able to redirect to the next section and are able to display the content.', function () {
        sn.visit()
        lg.faqs()
        lg.pageLinkNext()
    })
    it('CVA_A_TC-04-10: Verify on click of previous button in FAQs page is able to redirect to the previous section', function () {
        lg.pageLinkPrevious()
    })
    it('CVA_A_TC-04-11: Verify on click of search box user is able to search according to Entered text ', function () {
        lg.searchBox('data')
    })
    it('CVA_A_TC-04-12: Verify on click of back button is able to redirect to the Homepage', function () {
        lg.backButton()
    })
    it('CVA_A_TC-04-13: Verify on click of My Account user is able to redirect to the Signin page', function () {
        lg.faqs()
        lg.myAccount()
    })
    it('CVA_A_TC-04-14: Verify on click of send Email button user is able to redirect to  email window/screen', function () {
        lg.faqs()
        lg.sendMail()

    })

    it('CVA_A_TC-04-15: Verify on click of About Us in Header Section is able to redirect to the about us page', function () {
        sn.visit()
        lg.faqs()
        lg.aboutUs()
    })
    it('CVA_A_TC-04-16: Verify on click of Services in Header Section is able to redirect to the Services page', function () {
        lg.faqs()
        lg.services()
    })
    it('CVA_A_TC-04-17:Verify on click of Demo in Header Section is able to open Book a Demo window ', function () {
        lg.faqs()
        lg.bookADemo()

    })
    it('CVA_A_TC-04-18:Verify on click of User Agreement & Data Privacy Policy in Header Section is able to redirect to the Legal page ', function () {
        lg.faqs()
        lg.userAggrement()
    })

    it('CVA_A_TC-04-19:Verify on click of Contact Us in header Section is able to redirect to the contact us page ', function () {
        lg.contactUs()
    })


})