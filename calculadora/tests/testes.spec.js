describe("Testando a calculadora", ()=>{
    it("Soma", ()=>{
        cy.visit('/')
        cy.get('[value="7"]').click()
        cy.get('[value="+"]').click()
        cy.get('[value="6"]').click()
        cy.get('[value="="]').click()
        cy.get('#tela').should('have.text','13')
    })
})
