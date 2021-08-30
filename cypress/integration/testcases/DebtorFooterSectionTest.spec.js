///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import DebtorFooterSection from "../POM/DebtorFooterSection"
import Login from '../POM/Login'
describe('Debtor Footer', function () {
    const ft = new DebtorFooterSection()
    const sn = new Login()
    beforeEach(() => {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
    })

    it('CVA_A_TC-19: Verify on click of About Us in footer Section is able to redirect to the about us page', function () {
        ft.aboutUs()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-01: Verify on click of Services in footer Section is able to redirect to the Services page', function () {
        ft.services()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-02: Verify on click of Book a Demo in footer Section is able to open Book a Demo window ', function () {
        ft.bookADemo()
        ft.closeButton()
    })
    it('CVA_A_TC-19-03: Verify whether the  debtor  is able to click on confirm button after Entering date, Time and Write Demo Message.', function () {
        ft.bookADemo()
        ft.selectDate()
        ft.selectTime()
        ft.demoMsg()
        ft.confirmButton()
        ft.confirmButton()
    })
    it('CVA_A_TC-19-04: Verify Whether the debtor can reshedule date and time  by clicking on reschedule link , which shoud be able to redirect to the date and time selection screen ', function () {
        ft.bookADemo()
        ft.selectDate()
        ft.selectTime()
        ft.demoMsg()
        ft.confirmButton()
        ft.resheduleDemo()
        ft.selectDate2()
        ft.selectTime()
        ft.demoMsg()
        ft.confirmButton()
    })
    it('CVA_A_TC-19-05: Verify Whether the debtor can  book a demo by click on back button after click on confirm button by selecting date and time ', function () {
        ft.bookADemo()
        ft.clickOnBack()
        ft.confirmName()
        ft.selectDate()
        ft.selectTime()
        ft.demoMsg()
        ft.confirmButton()
        ft.confirmButton()
    })
    it('CVA_A_TC-19-06: Verify on click of FAQs in footer Section is able to redirect to the FAQs page ', function () {
        ft.faqs()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-07:Verify on click of User Aggrement & Data Privacy Policy in footer Section is able to redirect to the User Aggrement & Data Privacy Policy page ', function () {
        ft.userAggrement()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-08:Verify on click of help in footer Section is able to redirect to the Help page ', function () {
        ft.help()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-09:Verify on click of career in footer Section is able to redirect to the career page ', function () {
        ft.career()
       // sn.clickOnLogout()
    })
    it('CVA_A_TC-19-10:Verify on click of facebook icon in footer Section is able to redirect to the Facebook page ', function () {
        ft.facebook()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-11:Verify on click of instagram icon in footer Section is able to redirect to the Instagram page ', function () {
        ft.instagram()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-12:Verify on click of LinkedIn icon in footer Section is able to redirect to the LinkedIn page ', function () {
        ft.linkedIn()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-13:Verify on click of Twitter icon in footer Section is able to redirect to the Twitter page ', function () {
        ft.twitter()
        sn.clickOnLogout()
    })
    it('CVA_A_TC-19-14:Verify the company logo and company name in footer should exist', function () {
        ft.footerLogo()
        sn.clickOnLogout()
    })

})