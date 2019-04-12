/**
 * Created by aaronflynn on 12/04/2019.
 */

describe('Carrotbag is started', function() {
    it('Checks Carrotbag is started', function() {
        cy.visit('http://localhost:3000')
        cy.contains('Column')
    })
})

describe('Carrotbag Add Card Test', function() {
    it('finds the content "type"', function() {
        cy.visit('http://localhost:3000')
        cy.wait(300)
        cy.get('input:first').should('have.attr', 'placeholder', 'Add new card')
            .click()
            .type('Hello world card {enter}')
        cy.contains('Hello world card')
    })
})

describe('Carrotbag Delete Card Test', function() {
    it('finds the content "type"', function() {
        // Create a card to delete
        cy.visit('http://localhost:3000')
        cy.wait(300)
        cy.get('input:first').should('have.attr', 'placeholder', 'Add new card')
            .click()
            .type('Delete me card {enter}')
        cy.contains('Delete me card')

        // Delete the card
        cy.wait(100)
        cy.contains('Delete me card').click()

        // Assert Card is removed
       // expect(cy.contains('Delete me card')).to.be.false
    })
})

