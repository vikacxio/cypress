///<reference types="cypress-xpath" />
import info1 from '../../fixtures/logindata.json'
import info from '../../fixtures/debtorconnecttobankdata.json'
class DebtorConnectToBank {

    clickOnConnectToBank() {
        cy.wait(2000)
        //cy.xpath('//h4[text()="Connect to my Bank"]').click({force:true})
        cy.get('#connect-to-bank').click({force:true})
    }
 
    enterBankName() {
        cy.wait(2000)
        cy.contains(" That's Great!")
        cy.get('#bank').should('have.a.attr', 'placeholder', 'Type name of your bank here')
        cy.contains(' Please select your bank from list below')
        cy.xpath('//button[text()="Next"]').should('be.disabled')
        cy.get('.dropdown-item').click({ force: true })
        cy.xpath('//button[text()="Next"]').click()
    }
    enterBankDetails() {
        cy.contains("Details")
        cy.contains("Name of your bank")
        // cy.xpath('//input[@name="bankName"]').should('have.a.attr', 'placeholder', 'Type name of your bank')
       
        cy.xpath('//button[text()="Next"]').should('be.disabled')
        cy.get('#bankName').click().type(info1.bankdetail)


        cy.xpath('//button[text()="Next"]').click({ force: true })
        //return false;

    }
    enterCity() {

        cy.contains("City, State")
        cy.contains("Select the city of your bank")
        cy.get('#city').should('have.a.attr', 'placeholder', 'Type name of city')
        const field = cy.get('#city')
        field.click({ force: true })
        cy.xpath('//button[text()="Next"]').should('be.disabled')
        cy.xpath('//a[@class="dropdown-item"]')
            .each(($el, index, $list) => {

                var cityname = $el.attr('name')
                cy.log(cityname)
                if (cityname == info.cityname) {
                    cy.wait(2000)

                    // cy.xpath("//button[text()='" + cityname + "']").click({ force: true })
                    cy.wrap($el).click()
                }
            })
        cy.xpath('//button[text()="Next"]').click({ force: true })

    }
    enterBranchName() {
        cy.contains("Branch")
        cy.contains("Select branch")
        cy.xpath('//button[text()="Select"]').should('be.disabled')
        cy.get('#branch').should('have.a.attr', 'placeholder', 'Type name of the branch')
        const field = cy.get('#branch')
        field.clear({ force: true })
        field.type(info.branchname)
        cy.xpath('//button[text()="Select"]').click({ force: true })

    }
    confirmationPage() {
        cy.contains("Requesting")
        let str = info.bankdetails
        let firstChar = str.charAt(0)
        cy.contains(firstChar)

    }
    acceptButton() {
        cy.xpath('//button[text()="I Accept"]').click({ force: true })
    }
    denyButton() {
        cy.xpath('//p[text()="Deny"]').click({ force: true })
    }

    revokeRequest() {
        cy.wait(2000)
        cy.contains('Request Pending').should('exist')
        cy.contains('Revoke Request')
       // cy.contains(info.branchname)
        cy.xpath('//p[text()="Revoke Request"]').click({ force: true })
    }
    backFlow() {
        cy.contains("Requesting")
        let str = info.bankdetails
        let firstChar = str.charAt(0)
        cy.contains(firstChar)

        //cy.get('.back_button').click({ force: true })
        cy.xpath('//span[text()="Back"]').click({ force: true })
        cy.wait(2000)
        cy.contains("Branch")
        cy.contains("Select branch")
        cy.get('.back_button').click({ force: true })
        cy.wait(2000)
        cy.contains("City, State")
        cy.contains("Select the city of your bank")
     
        cy.xpath('//span[text()="Back"]').click({ force: true })
        cy.wait(2000)
        cy.contains("Details")
        cy.contains("Name of your bank")
        cy.xpath('//span[text()="Back"]').click({ force: true })
       
        cy.wait(2000)
        cy.contains(" That's Great!")
        cy.contains(' Please select your bank from list below')
    }

}
export default DebtorConnectToBank