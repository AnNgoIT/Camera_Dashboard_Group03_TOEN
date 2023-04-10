/* eslint-disable no-undef */
let testCaseID = 0;
describe('Test Camera Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cameras');
  });
  it(`TC${testCaseID += 1} - Title Header have text "Quản lí Camera"`, () => {
    cy.get('.Header_Title__BTZcM').contains('Quản lí Camera');
  });
  describe('Test Data Table', () => {
    it(`TC${testCaseID += 1} - Data Table should have css background-color: white`, () => {
      cy.get('.DataTable_Container__K0vgD').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
    it(`TC${testCaseID += 1} - Data Table should have css border: 1px solid rgb(223,224,235)`, () => {
      cy.get('.DataTable_Container__K0vgD').should('have.css', 'border', '1px solid rgb(223, 224, 235)');
    });
    it(`TC${testCaseID += 1} - Data Table should have css border-radius: 8px`, () => {
      cy.get('.DataTable_Container__K0vgD').should('have.css', 'border-radius', '8px');
    });
    describe('Test TitleContainer', () => {
      it(`TC${testCaseID += 1} - TitleContainer should have text "Camera"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').contains('Camera');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have logo "Sort"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').find('img').first().should('have.attr', 'src')
          .should('include', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgBzZJNTsNADIWfnVIiVnCDHIFRpEIICzgR5QblBnAC4CQtQpCwgMAJ4AbMciTAZgKaFkKbwIpaGsmyxp+ff4D/NgrOuKiSPnTMTKNsy5zXsavyroLq5oJMm2+nG72vyYAmInpW3FSoIarywMR2fm21UwXzKq1EbAYDc4/ftnBZVHsM8SpwlGfpqI5dl9UBQX604Fb5cN+YDwW9NrqqDhVImvHYvdYzmnQC1mIyztF6M55l6VPwWwHO4Vuyi2GD9GDcBhC/GYE8htd3Mmz+6ZrBCdFMhYdM/gTY3UmP0WGtgKK8PVWlREUv8vxztQsBHL1YvEUg4mdMJZO/AX9gNLuX5bN3UGxrMkt9jP4AAAAASUVORK5CYII=');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have text "Sort"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').contains('Sort');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have logo "Filter"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').find('img').last().should('have.attr', 'src')
          .should('include', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBzY7LDcJAEEPtqQBKoIZwACJRC5RAKakASqAIPqdIlEAH2QaiyUf5KrvJSjkkvoxl2U8DLC3W5vWJExIbz5UJD8G2sNJkxA2+0rbLbv7+xpf83Cfm1/AYPKwAD0hvbAWMQAbjQmIDlEVF1ASqkW3sBFS/mdbTuGpugKdWDEhVf5gDOJ/2T4HsCP5JSbBaZQrsJal6ps35AAAAAElFTkSuQmCC');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have text "Filter"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').contains('Filter');
      });
      describe('Test Title', () => {
        it(`TC${testCaseID += 1} - Title should have css font-family: Muli`, () => {
          cy.get('[class^=DataTable_Title__]').should('have.css', 'font-family', 'Muli');
        });
        it(`TC${testCaseID += 1} - Title should have css font-size: 19px`, () => {
          cy.get('[class^=DataTable_Title__]').should('have.css', 'font-size', '19px');
        });
        it(`TC${testCaseID += 1} - Title should have css line-height: 22px`, () => {
          cy.get('[class^=DataTable_Title__]').should('have.css', 'line-height', '22px');
        });
        it(`TC${testCaseID += 1} - Title should have css letter-spacing: 0.4px`, () => {
          cy.get('[class^=DataTable_Title__]').should('have.css', 'letter-spacing', '0.4px');
        });
        it(`TC${testCaseID += 1} - Title should have css color: #252733`, () => {
          cy.get('[class^=DataTable_Title__]').should('have.css', 'color', 'rgb(37, 39, 51)');
        });
      });
      describe('Test IconContainer', () => {
        it(`TC${testCaseID += 1} - IconContainer should have css font-family: Mulish`, () => {
          cy.get('[class^=DataTable_IconContainer__]').should('have.css', 'font-family').should('includes', 'Mulish');
        });
        it(`TC${testCaseID += 1} - IconContainer should have css font-size: 14px`, () => {
          cy.get('[class^=DataTable_IconContainer__]').should('have.css', 'font-size', '14px');
        });
        it(`TC${testCaseID += 1} - IconContainer should have css font-weight: 600`, () => {
          cy.get('[class^=DataTable_IconContainer__]').should('have.css', 'font-weight', '600');
        });
        it(`TC${testCaseID += 1} - IconContainer should have css line-height: 20px`, () => {
          cy.get('[class^=DataTable_IconContainer__]').should('have.css', 'line-height', '20px');
        });
        it(`TC${testCaseID += 1} - IconContainer should have css letter-spacing: 0.2px`, () => {
          cy.get('[class^=DataTable_IconContainer__]').should('have.css', 'letter-spacing', '0.2px');
        });
        it(`TC${testCaseID += 1} - IconContainer should have css color: #4B506D`, () => {
          cy.get('[class^=DataTable_IconContainer__]').should('have.css', 'color', 'rgb(75, 80, 109)');
        });
      });
    });
    describe('Test Table', () => {
      describe('Test HeadConTainer', () => {
        it(`TC${testCaseID += 1} - HeadContainer should have input type checkbox`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').find('input[type="checkbox"]');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Serial"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Serial');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Home ID"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Home ID');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Connection"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Connection');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Security Level"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Security Level');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have font-size: 14px`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').should('have.css', 'font-size', '14px');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have font-family: Mulish, sans-serif`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').should('have.css', 'font-family', 'Mulish, sans-serif');
        });
      });
      // describe('Test BodyConTainer', () => { second });
    });
  });
});
