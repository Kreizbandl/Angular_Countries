describe('Navigationstests', () => {
    beforeEach(() => {
      // Startseite
      cy.visit('/');
    });

    // testen ob richtige URLs aufgerufen werden

    it('sollte auf die Startseite verlinken', () => {
      // click auf Logo Link
      cy.get('#home-link').click();
      // überprüfen ob richtig URL aufgerufen
      cy.url().should('eq', 'http://localhost:4200/home');
    });
  
    it('sollte auf die Country-List-Seite verlinken', () => {
      // click auf All Countries Link 
      cy.get('#countries-list-link').click();
      // überprüfen ob richtig URL aufgerufen
      cy.url().should('eq', 'http://localhost:4200/country-list');
    });

    it('sollte auf die Country-List-Seite verlinken', () => {
        // click auf Contact Link
        cy.get('#contact-link').click();
        // überprüfen ob richtig URL aufgerufen
        cy.url().should('eq', 'http://localhost:4200/contact');
      });

    // Tabulatortaste simulieren
    it('sollte Links mit Tabulatortaste durchlaufen', () => {
        cy.visit('/');

        // fockus auf Logo-Link
        cy.get('#home-link').focus();
        cy.focused().should('have.id', 'home-link');
        
        // Drücken der Tabulatortaste
        cy.get('#search').trigger('keydown', { keyCode: 9 });

        cy.should('have.id', 'search');

        // Drücken der Tabulatortaste
        cy.get('#search-button').trigger('keydown', { keyCode: 9 });

        cy.should('have.id', 'search-button');

        // Drücken der Tabulatortaste
        cy.get('#countries-list-link').trigger('keydown', { keyCode: 9 });

        cy.should('have.id', 'countries-list-link');

        // Drücken der Tabulatortaste
        cy.get('#contact-link').trigger('keydown', { keyCode: 9 });

        cy.should('have.id', 'contact-link');
    });
});
  