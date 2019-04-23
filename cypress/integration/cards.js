/**
 * Created by aaronflynn on 12/04/2019.
 */

describe('Carrotbag is started', function() {
    it('Checks Carrotbag starts', function() {
        cy.visit('/')
        cy.contains('Column')
    })
})

describe('Carrotbag Add Card Test', function() {
    it('Adds a card', function() {
        cy.visit('/')
        cy.wait(300)
        add_card('Add card Test')
    })
})

describe('Carrotbag Delete Card Test', function() {
    it('Removes a card', function() {
        // Create a card to delete
        cy.visit('/')
        cy.wait(300)
        add_card('Delete card test')

        // Delete the card
        cy.wait(100)
        delete_card('Delete card test')

        // Assert Card is removed
        cy.get('Delete card test').should('not.exist')
    })
})

describe('Carrotbag Add Column Test', function() {
    it('Adds a column', function() {
        cy.visit('/')
        cy.wait(300)
        add_column('Test Column')
    })
})

describe('Carrotbag Delete Column Test', function() {
    it('Deletes a column', function() {
        cy.visit('/')
        cy.wait(300)
        add_column('Delete Column test')

        // Test to explode here
        assert(false)
    })
})

function add_card(card_text) {
    cy.get('input:first').should('have.attr', 'placeholder', 'Add new card')
        .click()
        .type(card_text + '{enter}')
    cy.contains(card_text)
}

function delete_card(column_text) {
    cy.contains(column_text).click()
}

function add_column(column_text) {
    cy.get('input:last').should('have.attr', 'placeholder', 'Add new column')
        .click()
        .type(column_text + '{enter}')
    cy.contains(column_text)
}