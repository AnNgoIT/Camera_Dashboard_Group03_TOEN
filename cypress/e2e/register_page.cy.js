describe('The Register Page', () => {
  beforeEach(() => {
  })
  it('successfully loads', () => {
    // const {username, password} = currentUser
    cy.visit('http://127.0.0.1:3000/register')

    // cy.get('input[name=username]').type(username)

    // cy.get('input[name=password]').type(`${password}{enter}`)

    // cy.url().should('include', '/dashboard')

    // cy.get('h1').should('contain', 'jane.lane')
  })
})