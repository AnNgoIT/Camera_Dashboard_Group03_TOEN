describe('setting warning UI', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login')
    cy.get('[name^=email]').type('admin@gmail.com')
    cy.get('[name^=password]').type('Admin123')
    cy.get('[class^=LoginPage_Button]').contains('Log In').click()
    cy.wait(3000).visit(Cypress.env('host') + '/settingwarning')
  })
  it('Header', () => {
    cy.get('[class^=StatisticPage]').contains('Cài đặt cảnh báo');
  })
  it('Warning Header', () => {
    cy.get('[class^=SettingWarning_Header]').contains('Cài đặt cảnh báo');
  })
})