/* eslint-disable no-undef */
let testCaseID = 0;
describe('Test Contact Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login');
    cy.get('[name^=email]').type('admin@gmail.com');
    cy.get('[name^=password]').type('Admin123');
    cy.get('[class^=LoginPage_Button]').contains('Log In').click();
    cy.wait(15000).visit(Cypress.env('host') + '/contact');
  });
  it(`TC${testCaseID += 1} - Title Header have text "Liên hệ"`, () => {
    cy.get('[class^=Header_Title__]').contains('Liên hệ');
  });
  describe('Test WhiteBoard', () => {
    it(`TC${testCaseID += 1} - WhiteBoard should have css background-color: white`, () => {
      cy.get('[class^=Whiteboard_Container__]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
    // it(`TC${testCaseID += 1} - WhiteBoard should have css border: 1px solid rgb(223,224,235)`, () => {
    //   cy.get('[class^=Whiteboard_Container__]').should('have.css', 'border', '1px solid rgb(223, 224, 235)');
    // });
    it(`TC${testCaseID += 1} - WhiteBoard should have css border-radius: 8px`, () => {
      cy.get('[class^=Whiteboard_Container__]').should('have.css', 'border-radius', '8px');
    });
    describe('Test Title', () => {
      it(`TC${testCaseID += 1} - Title should have css font-family: Muli`, () => {
        cy.get('[class^=Whiteboard_Title__]').should('have.css', 'font-family', 'Muli');
      });
      it(`TC${testCaseID += 1} - Title should have css font-size: 19px`, () => {
        cy.get('[class^=Whiteboard_Title__]').should('have.css', 'font-size', '19px');
      });
      // it(`TC${testCaseID += 1} - Title should have css line-height: 22px`, () => {
      //   cy.get('[class^=Whiteboard_Title__]').should('have.css', 'line-height', '22px');
      // });
      it(`TC${testCaseID += 1} - Title should have css letter-spacing: 0.4px`, () => {
        cy.get('[class^=Whiteboard_Title__]').should('have.css', 'letter-spacing', '0.4px');
      });
      it(`TC${testCaseID += 1} - Title should have css color: #252733`, () => {
        cy.get('[class^=Whiteboard_Title__]').should('have.css', 'color', 'rgb(37, 39, 51)');
      });
    });
  });
});
