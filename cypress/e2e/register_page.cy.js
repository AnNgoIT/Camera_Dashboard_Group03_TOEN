describe('The Register Page UI', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('host') + '/login')
      cy.get('[name^=email]').type('admin@gmail.com')
      cy.get('[name^=password]').type('Admin123')
      cy.get('[class^=LoginPage_Button]').contains('Log In').click()
      cy.wait(8000).visit(Cypress.env('host') + '/register')
    })
    it('header', () => {
      cy.get('[class^=Header_Title]').contains('Đăng kí');
    })
    it('whiteboard title', () => {
      cy.get('.Header_Title__osJeq').contains('Đăng kí');
    })
    it('Sort', () => {
      cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(1)').contains('Sort');
      cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(1)').click()
    })
    it('Sort By Text', () => {
      cy.get('.DataTable_FilterInput__l2CuW').type('locson')
    })
    it('filter', () => {
      cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(3)').contains('Filter');
      cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(3)').click()
    })
    it('username and email', () => {
      cy.get('.DataTable_HeadRowContainer__DmXhR > :nth-child(2)').contains('Username');
      cy.get('.DataTable_HeadRowContainer__DmXhR > :nth-child(3)').contains('Email')
    })
  })