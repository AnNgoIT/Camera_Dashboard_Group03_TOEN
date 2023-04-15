describe('The Register Page UI', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/register')
  })
  it('header', () => {
    cy.get('[class^=Header_Title]').contains('Đăng kí');
  })
  it('whiteboard title', () => {
    cy.get('[class^=Whiteboard_Title]').contains('Đăng kí');
  })
})