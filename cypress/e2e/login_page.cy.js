describe('The Login Page UI', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login')
  })
  it('successfully loads', () => {
    cy.visit(Cypress.env('host') + '/login')
  })
  // it('title loads', () => {
  //   cy.title().should('eq', 'React App')
  // })
  it('form loads', () => {
    cy.get('[class^=LoginPage_SubTitle1]').contains('Camera Dashboard');
    cy.get('[class^=LoginPage_Title]').contains('Log In');
    cy.get('[class^=LoginPage_SubTitle]').contains('Enter your email and password below');
  })
  it('email loads', () => {
    cy.get('[class^=LoginPage_Label]').contains('EMAIL')
  })
  it('password loads', () => {
    cy.get('[class^=LoginPage_Label]').contains('PASSWORD')
  })
  it('button loads', () => {
    cy.get('[class^=LoginPage_Button]').contains('Log In')
  })
  it('contact support', () => {
    cy.get('[class^=LoginPage_Link]').contains('Contact support')
  })
  it('login button', () => {
    cy.get('[name^=email]').type('admin@gmail.com')
    cy.get('[name^=password]').type('Admin123')
    cy.get('[class^=LoginPage_Button]').contains('Log In').click()
  })
})