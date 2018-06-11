describe('Login flow', () => {
  it('should redirect to login page', () => {
    cy.visit('http://localhost:3000');

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login')
    })
  });

  it('should contains greeting message', () => {
    cy.get('.login-page__title').should('have.text', 'Welcome to Gitter!')
  });

  it('should redirect to gitter login page after click on link', () => {
    cy.get('.login-page__link').click();

    cy.location().should((location) => {
      expect(location.host).to.eq('gitter.im')
    })
  });
});