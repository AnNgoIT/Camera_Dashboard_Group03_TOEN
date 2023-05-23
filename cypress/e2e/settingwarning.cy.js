describe('setting warning UI', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login')
    cy.get('[name^=email]').type('admin@gmail.com')
    cy.get('[name^=password]').type('Admin123')
    cy.get('[class^=LoginPage_Button]').contains('Log In').click()
    cy.wait(20000).visit(Cypress.env('host') + '/settingwarning')
  })
  it('Header', () => {
    cy.get('[class^=Header_HeaderTitleContainer]').contains('Cài đặt cảnh báo');
  })
  it('Warning Header', () => {
    cy.get('[class^=SettingWarning_ContainerInfo]').contains('Tên cảnh báo:');
    cy.get('[type^=text]')
  })
  it('time report', () => {
    cy.get('[class^=SettingWarning_Header]').contains('Cảnh báo theo thời gian');
    cy.get('[class^=SettingWarning_Center]').contains('Khung thời gian cảnh báo');
    cy.get('[class^=SettingWarning_Select]').contains('Low');
    cy.get('[class^=SettingWarning_Select]').contains('Medium');
    cy.get('[class^=SettingWarning_Select]').contains('High');
  })
  it('face report', () => {
    cy.get('[class^=SettingWarning_Header]').contains('Cảnh báo theo khuôn mặt');
    cy.get('[class^=SettingWarning_Center]').contains('Chọn khuôn mặt được dùng để cảnh báo:');
    cy.get('[class^=SettingWarning_ImgPerson]')
  })
  it('area report', () => {
    cy.get('[class^=SettingWarning_Header]').contains('Cảnh báo theo khu vực');
    cy.get('[class^=SettingWarning_Center]').contains('Chọn khu vực để cảnh báo:');
    cy.get('[class^=SettingWarning_ImgWarning]')
  })
  it('cancel Button', () => {

  })
  it('save Button', () => {

  })
})