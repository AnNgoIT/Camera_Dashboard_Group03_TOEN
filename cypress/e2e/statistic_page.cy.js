describe('The Statistic Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login')
    cy.get('[name^=email]').type('admin@gmail.com')
    cy.get('[name^=password]').type('Admin123')
    cy.get('[class^=LoginPage_Button]').contains('Log In').click()
    cy.wait(20000).visit(Cypress.env('host') + '/statistic')
  })
  it('header', () => {
    cy.get('[class^=Header_Title]').contains('Thống kê');
    cy.get('[class^=StatisticPage_FunctionalContainer]').contains('Nút chuyển thống kê và đếm người');
  })
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
})