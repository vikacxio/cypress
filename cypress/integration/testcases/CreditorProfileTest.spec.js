///<reference types="cypress-xpath" />

import info from '../../fixtures/creditorlogindata.json'
import CreditorProfile from "../POM/CreditorProfile"
import Login from '../POM/Login'
describe('Profile Creditor', function () {
    const edit = new CreditorProfile()
    const sn = new Login()
    beforeEach(() => {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
    })

    it('CVA_A_TC-13:Verify on click of Profile in navigation bar is able to redirect to the edit profile window', function () {
        edit.clickOnProfile()
    })
    it('CVA_A_TC-13-01: Verify that on click of pencil icon is able to open the editing screen of profile', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.allElements()
    })
    it('CVA_A_TC-13-02:Verify that the creditor is able to edit the address by clicking on the address in edit window/screen.', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editAdressCity()
        edit.editPincode(info.pincode)
        edit.save()
        cy.reload()
        edit.clickOnProfile()
        edit.checkAddressPincode()
    })
    it('CVA_A_TC-13-03: Verify that on click of  profile picture icon creditor is able to change Profile picture . ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.clickOnProfilePicture()
        edit.save()
    })
    it.skip('CVA_A_TC-13-04:Verify that the creditor is able to edit email by clicking on email in edit window /screen.   ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editEmail(info.newmail)
        edit.save()
    })

    it.skip('CVA_A_TC-13-05: Verify whether the Creditor is able to logout after changing email id and able to login with edited new email id and getting email verification popup once logged In.  ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editEmail(info1.email)
        edit.save()
        sn.visit()
        sn.fillEmail(info.newmail)
        sn.fillPassward(info.password)
        sn.submit()
        edit.verifyEmailBlock()
    })
    it.skip('CVA_A_TC-13-06: Verify that the creditor is able to edit  Mobile Number by clicking on edit window/screen.    ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editMobileNo(info.mobileno)
        edit.save()
    })
    it.skip('CVA_A_TC-13-07: Verify when the creditor changed mobile number is able get a mobile number OTP verification popup  ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editMobileNo(info.mobileno)
        edit.save()
        edit.mobileVerificationbloack()
    })
    it.skip('CVA_A_TC-13-08: Verify whether the creditor is able to get error message in  verification popup entering wrong OTP for only 3 attemps, creditor should block for 15 min.', function () {
        // edit.clickOnProfile()
        //edit.clickOnEditIcon()
        edit.mobileVerificationbloack()
        edit.clickOnVerify()
        edit.verifyMobile()
        edit.verifyMobile()
        edit.verifyMobile()
    })
    it('CVA_A_TC-13-09: Verify that on click of User Name in edit  window creditor is able to edit User name  ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.userName()
        edit.save()
        cy.reload()
        edit.checkUserName()
    })
    it('CVA_A_TC-13-10: Verify on click of Two factor authentication toggle  in window/screen user able to enable   ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.clickTwofactorAuth()
        edit.save()
    })





})