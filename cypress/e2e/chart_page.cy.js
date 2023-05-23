describe('The Chart Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login');
    cy.get('[name^=email]').type('admin@gmail.com');
    cy.get('[name^=password]').type('Admin123');
    cy.get('[class^=LoginPage_Button]').contains('Log In').click();
    cy.wait(5000).visit(Cypress.env('host') + '/statistic');
  });
  describe('ChartPage Test', () => {
    it('TC Name of page is "Thống kê"', () => {
      cy.get('[class^=Header_Title__]').contains('Thống kê');
    });
    it('TC "Đánh dấu đã đọc"', () => {
      cy.get('[class^=StatisticPage_FunctionalContainerRight]').contains("Đánh dấu đã đọc")
    });
    it('TC "Xóa thông báo"', () => {
      cy.get('[class^=StatisticPage_FunctionalContainerRight]').contains("Xóa thông báo")
    });
    it('TC "Sort"', () => {
      cy.get('[class^=DataTable_TitleContainerRight]').contains("Sort")
    });
    it('TC "Filter"', () => {
      cy.get('[class^=DataTable_TitleContainerRight]').contains("Filter")
    });

  });
});
