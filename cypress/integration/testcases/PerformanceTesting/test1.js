describe("performance testing ", function(){
    it("performence test 1", function(){
        cy.visit("/")
        cy.lighthouse()

    })
})