describe('Test Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })
  it('should visible error message for no filled in field email', () => {
    cy.get('input[name="email"]').focus().blur();
    cy.get('[class ^=LoginPage_EmailContainer]').get('[class ^=LoginPage_Errors]').contains('Email không được bỏ trống.')
  })
  it('should visible error message for no filled in field password', () => {
    cy.get('input[name="password"]').focus().blur();
    cy.get('[class ^=LoginPage_PasswordContainer]').get('[class ^=LoginPage_Errors]').contains('Mật khẩu không được bỏ trống.')
  })
  it('should visible error message for not be email', () => {
    cy.get('input[name="email"]').type('admin').blur();
    cy.get('[class ^=LoginPage_EmailContainer]').get('[class ^=LoginPage_Errors]').contains('Email không hợp lệ')
  })
  it('should visible error message for password < 6', () => {
    cy.get('input[name="password"]').type('123').blur();
    cy.get('[class ^=LoginPage_PasswordContainer]').get('[class ^=LoginPage_Errors]').contains('Mật khẩu không được ít hơn 6 kí tự')
  })
    it('should show error message for invalid username', () => {
      cy.get('input[name="email"]').type('invalid@test.com')
      cy.get('input[name="password"]').type('invalidpassword')
      cy.get('button[type="submit"]').click()
      cy.get('.Toastify').contains('User not found').should('be.visible')
    })
    it('should show error message for invalid password', () => {
      cy.get('input[name="email"]').type('admin@gmail.com')
      cy.get('input[name="password"]').type('invalidpassword')
      cy.get('button[type="submit"]').click()
      cy.get('.Toastify').contains('Wrong password').should('be.visible')
    })
  it('should be able to login', () => {
    cy.get('input[name="email"]').type('admin@gmail.com')
    cy.get('input[name="password"]').type('Admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/')
  })
})