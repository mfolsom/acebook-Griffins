describe('App', () => {
    it('redirects to /login when user is not logged in', () => {
        cy.visit('/');
        cy.url().should('include', '/login');
    });

});