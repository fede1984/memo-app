/// <reference types="Cypress" />

describe('Memo App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should show login page on load', () => {
      cy.get('[data-testid="app-ingresa"]').should('be.visible');
    });
  
    it('should start the game when the user enters a name and clicks "Empezar Juego"', () => {
      cy.get('[data-testid="app-ingresa"]').type('Juan');
      cy.get('[data-testid="app-ingresa"]').blur()
      cy.get('.btn-primary').click();
    });
  
    it('should increment the errors when the player doesnt matches a pair of cards', () => {
      cy.get('[data-testid="app-ingresa"]').type('Juan');
      cy.get('[data-testid="app-ingresa"]').blur()
      cy.get('.btn-primary').click();
      cy.get('[data-testid="card"]').first().click();
      cy.get('[data-testid="card"]').eq(1).click();
      cy.get('[data-testid="errores"]').should('have.text', '1');;
    });
  });
  