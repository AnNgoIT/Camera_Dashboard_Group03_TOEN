describe('The Statistic Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login')
    cy.get('[name^=email]').type('admin@gmail.com')
    cy.get('[name^=password]').type('Admin123')
    cy.get('[class^=LoginPage_Button]').contains('Log In').click()
    cy.wait(8000).visit(Cypress.env('host') + '/statistic')
  })
  it('header', () => {
    cy.get('[class^=Header_Title]').contains('Thống kê');
    cy.get('[class^=StatisticPage_FunctionalContainer]').contains('Nút chuyển thống kê và đếm người');
  })
  // it('header', () => {
  //   cy.get('[class^=Header_Title]').contains('Thống kê');
  //   cy.get('[class^=StatisticPage_FunctionalContainer]').contains('Nút chuyển thống kê và đếm người');
  // })
  it('notification', () => {
    cy.get('[class^=StatisticPage_IconContainer]').contains('Đánh dấu đã đọc');
    cy.get('[class^=StatisticPage_IconContainer]').contains('Xóa thông báo');
  })
  it('datatable title', () => {
    cy.get('[class^=DataTable_Title]').contains('Thống kê');
    cy.get('[class^=DataTable_IconContainer]').contains('Sort');
    cy.get('[class^=DataTable_IconContainer]').contains('Filter');
  })
  it('datatable column', () => {
    cy.get('[class^=DataTable_HeadRowContainer]').contains('Profile');
    cy.get('[class^=DataTable_HeadRowContainer]').contains('Khu vực');
    cy.get('[class^=DataTable_HeadRowContainer]').contains('Serial');
    cy.get('[class^=DataTable_HeadRowContainer]').contains('Thời gian');
  })
  it('sort', () => {
    cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(1)').click()
  })
  it('filter', () => {
    cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(1)').type('DEF')
    cy.get('.DataTable_TitleContainerRight__RkXVu > :nth-child(3)').click()
  })
  it('danh dau da doc', () => {
    cy.get('.DataTable_BodyContainer__yjg2C > :nth-child(1) > :nth-child(1) > input').click()
    cy.get('.StatisticPage_FunctionalContainerRight__qaGfQ > :nth-child(1)').click()
  })
  it('xoa thong bao', () => {
    cy.get('.DataTable_BodyContainer__yjg2C > :nth-child(1) > :nth-child(1) > input').click()
    cy.get('.StatisticPage_FunctionalContainerRight__qaGfQ > :nth-child(1)').click()
  })
})