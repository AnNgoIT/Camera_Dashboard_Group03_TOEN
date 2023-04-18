describe('The Register Page UI', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login')
    cy.get('[name^=email]').type('admin@gmail.com')
    cy.get('[name^=password]').type('Admin123')
    cy.get('[class^=LoginPage_Button]').contains('Log In').click()
    cy.wait(3000).visit(Cypress.env('host') + '/register')
  })
  it('header', () => {
    cy.get('[class^=Header_Title]').contains('Đăng kí');
  })
  it('whiteboard title', () => {
    cy.get('[class^=Whiteboard_Title]').contains('Đăng kí');
  })
})