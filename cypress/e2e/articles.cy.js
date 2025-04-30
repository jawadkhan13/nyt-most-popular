describe('NYT Most Popular Articles App', () => {
    it('loads the list of articles', () => {
      cy.visit('/');                
      cy.get('[data-testid="article-link"]')
        .should('have.length.at.least', 1);
    });
  
    it('navigates to detail and back', () => {
      cy.visit('/');                
      cy.get('[data-testid="article-link"]')
        .first()
        .click();
      cy.url().should('include', '/article/');
  
      cy.get('[data-testid="back-button"]')
      .should('be.visible')
      .click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });
  });