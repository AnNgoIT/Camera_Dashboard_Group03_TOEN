describe('The Chart Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login');
    cy.get('[name^=email]').type('admin@gmail.com');
    cy.get('[name^=password]').type('Admin123');
    cy.get('[class^=LoginPage_Button]').contains('Log In').click();
    cy.wait(15000).visit(Cypress.env('host') + '/');
  });
  describe('UI test', () => {
    it('Name of page is "Thống kê"', () => {
      cy.get('[class^=Header_Title__]').contains('Thống kê');
    });
  });
});
