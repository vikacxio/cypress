///<reference types="cypress-xpath" />
///<reference types="cypress-xpath" />
import info from '../../fixtures/logindata.json'
import info1 from '../../fixtures/debtoreditProfile.json'
import DebtorEditProfile from "../POM/DebtorEditProfile"
import Login from '../POM/Login'
describe('Profile Debtor', function () {
    const edit = new DebtorEditProfile()
    const sn = new Login()
    beforeEach(() => {
        sn.visit()
        sn.fillEmail(info.email)
        sn.fillPassward(info.password)
        sn.submit()
    })

    it('CVA_A_TC-14: Verify that on click of Profile icon in right side corner is able to open the profile Screen', function () {
        edit.clickOnProfile()
    })
    it('CVA_A_TC-14-01: Verify that on click of pencil icon is able to open the editing screen of profile', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.allElements()
    })

    it('CVA_A_TC-14-02: Verify that the debtor is able to edit the address by clicking on the address in edit window/screen.', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editAdressCity(info1.address)
        edit.editPincode(info1.pincode)
        edit.save()
        cy.reload()
        edit.clickOnProfile()
        edit.checkAddressPincode()
        
    })
    it('CVA_A_TC-14-03: Verify that on click of  profile picture icon  debtor is  able to change Profile picture . ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.clickOnProfilePicture()
        edit.save()
    })
    it.skip('CVA_A_TC-14-04: Verify that  the debtor is able to edit  email   by clicking on email in edit window /screen. ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editEmail(info1.newmail)
        edit.save()
       
    })

    it.skip('CVA_A_TC-14-05: Verify whether the Debtor is able to  logout after changing email id and able to login with edited new email id and getting email verification popup once logged In.   ', function () {
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
    it.skip('CVA_A_TC-14-06: Verify that the debtor is able to edit  Mobile Number by clicking on edit window/screen.  ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editMobileNo(info1.mobileno)
        edit.save()
    })
    it.skip('CVA_A_TC-14-07: Verify whether the user is able to change mobile no. and  get a mobile no. verification popup', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.editMobileNo(info1.mobileno)
        edit.save()
        edit.mobileVerificationbloack()
    })
    it.skip('CVA_A_TC-14-08: Verify whether the debtor is able to get error message in  verification popup entering wrong OTP for only 3 attemps, debtor should block for 15 min.', function () {
        // edit.clickOnProfile()
        //edit.clickOnEditIcon()
        edit.mobileVerificationbloack()
        edit.clickOnVerify()
        edit.verifyMobile()
        edit.verifyMobile()
        edit.verifyMobile()
    })
    it('CVA_A_TC-14-09: Verify that on click of User Name  in edit  window debtor is able to edit User name ', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.userName()
        edit.save()
        cy.reload()
        edit.clickOnProfile()
        edit.checkUserName()
    })
    it('CVA_A_TC-14-10: Verify on click of Two factor authentication toggle  in window/screen user able to enable', function () {
        edit.clickOnProfile()
        edit.clickOnEditIcon()
        edit.clickTwofactorAuth()
        edit.save()
    })




})