/* eslint-disable no-undef */
let testCaseID = 0;
describe('Test Camera Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/warning');
  });
  it(`TC${testCaseID += 1} - Title Header have text "Cảnh báo"`, () => {
    cy.get('.Header_Title__BTZcM').contains('Cảnh báo');
  });
  describe('Test FunctionalContainer', () => {
    it(`TC${testCaseID += 1} - FunctionalContainer should have icon "tick"`, () => {
      cy.get('.WarningPage_FunctionalContainer__bXxUw').find('img').first().should('have.attr', 'src')
        .should('include', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGNSURBVHgBlZTRUcJAEIZ3V0B9owNDB2QYGGPGkVSAHQAdQAVCBZSgdEAHgWEgoqOhA2IHPDvm1rsjRMIkEf6HTLJ39+1m828QUuR5fpNRtBiwCQxlBAgYOCCgsWWZ0+P9ePjgLt6ql1QYyQNNyFbwDeQ4lhnsAxRnX/ntIl64/wCUjBKIjdqfqMT1fL0A5whhCxQ6dqOx1pWUgN0zDr/IPm11r8LCSIVoLpsIwMZJACGG9m2tCxw6CqRe3fPem0Qg2slEGGQC7PpA3xeKLbmxrMNMj4SIRgxAXF9foSlADLMAi5X/JJ8HB2kfiBmMv804NU1ze2/VBzEoF6AYXCbd5UjSYL3l0tfNikBOLkAfgi/ZEp4lYhK08D6eI9A0F6BEsCGBYpKy1NmDcgGKwWKszbZ8/XSZU5wqGw3M1SyAmqk7q1bRZuPwp68NdKwcwA5Cjq5GXWy7sZaRPpyqXcKuFQ1hYorlL8CQLlRDaOQgZiDCnk4cV5SiubQyMnaI6EYIrigbIPNUIE/2X+xQv7f3y+jp/9ToAAAAAElFTkSuQmCC');
    });
    it(`TC${testCaseID += 1} - FunctionalContainer have text "Đánh dấu đã đọc"`, () => {
      cy.get('.WarningPage_FunctionalContainer__bXxUw').contains('Đánh dấu đã đọc');
    });
    it(`TC${testCaseID += 1} - FunctionalContainer should have icon "trash"`, () => {
      cy.get('.WarningPage_IconContainer__SBjWy').filter(':contains("Xóa thông báo")').find('img').should('have.attr', 'src')
        .should('include', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADISURBVHgB7ZRBCsIwEEUngwtx15tYXEhwozfwJh7BegRvYG/iphQLEjyCtxDFjMkiEKUmU0SqkAdJYDKZzw+TACT6RnCSqoNag9aFH0PAQsp8EzuLwMEUHw0xm8mJsON6wUzDs+A7gg7qWs1J6BURLNsPi71AsZPTvOwsUNVHgg5YZ9AHX3cQtMUVCV0Pq4tcAddFfiwGr00/IAn8iUDTqDEn1saAk3S7a2VX/124WIygA/NjLoioNFVPr3vmAzybaWtzIPHTPAAaZUeM+p585AAAAABJRU5ErkJggg==');
    });
    it(`TC${testCaseID += 1} - FunctionalContainer have text "Xóa thông báo"`, () => {
      cy.get('.WarningPage_FunctionalContainer__bXxUw').contains('Xóa thông báo');
    });
    it(`TC${testCaseID += 1} - FunctionalContainer should have icon "setting"`, () => {
      cy.get('.WarningPage_FunctionalContainer__bXxUw').find('img').last().should('have.attr', 'src')
        .should('include', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBpVSxSgNBEN3Z3VwMIY2x0caAYKXVVVY2dhaiRcAqBPt8TDoLiQbEUkRFBAutrK6KjSkkaZLGNCaCOXd3vDlJOJfbWOQVx/DmzczO7swBc6DRuCyB9LYYYiEmAAaowqBa3e+k6bkrEUCmOE1CQCxy7nku/TTR8fH10sQ+ObkqMMmLthgFlGJfSgzQ5/T0xo9S+sChh4B9ppnPZsCAehGQWUSDK6jhuVrdbQFVEBlxyOaA/tYXUdvcZ3NCZuW2BMaXo+7TFYYFWuu2lHkP8atE7afJALgndahupPQ2EPRm0jnpPUENGo3bEARu/akV3dfH4C3gR0d7Q6XCrl3FShIjn/98tTkMoVOr1cbOOarX61mbK5fLoUvPKUDmvFXbUSisrdtcs3m/YXMyx1fp5aF5fndgtF5KLSNYMB5hV0ozFgti3TlfAEOJaJzHpcBsDnzKGNlOoDJ9rsbqic0JY8zvq9FTxydE6AGK1v+RLKB1iu2ofcoBE9/Z2UOxUtkZkE2XR9NKu5SMR41tqk6Bdgy4ik4WOclFJ36sVHbbafoZ/yMYcibeE0Q0uGrk0v8AVRW8U8geqpsAAAAASUVORK5CYII=');
    });
    it(`TC${testCaseID += 1} - FunctionalContainer have text "Cài đặt cảnh báo"`, () => {
      cy.get('.WarningPage_FunctionalContainer__bXxUw').contains('Cài đặt cảnh báo');
    });
    it(`TC${testCaseID += 1} - FunctionalContainer should have css font-family: Mulish`, () => {
      cy.get('.WarningPage_FunctionalContainer__bXxUw').should('have.css', 'font-family', 'Mulish, sans-serif');
    });
    describe('Test IconContainer', () => {
      it(`TC${testCaseID += 1} - IconContainer should have css font-family: Mulish`, () => {
        cy.get('[class^=WarningPage_IconContainer__]').should('have.css', 'font-family').should('includes', 'Mulish');
      });
      it(`TC${testCaseID += 1} - IconContainer should have css font-size: 16px`, () => {
        cy.get('[class^=WarningPage_IconContainer__]').should('have.css', 'font-size', '16px');
      });
      it(`TC${testCaseID += 1} - IconContainer should have css font-weight: 300`, () => {
        cy.get('[class^=WarningPage_IconContainer__]').should('have.css', 'font-weight', '300');
      });
      it(`TC${testCaseID += 1} - IconContainer should have css line-height: 20px`, () => {
        cy.get('[class^=WarningPage_IconContainer__]').should('have.css', 'line-height', '20px');
      });
      it(`TC${testCaseID += 1} - IconContainer should have css letter-spacing: 0.4px`, () => {
        cy.get('[class^=WarningPage_IconContainer__]').should('have.css', 'letter-spacing', '0.4px');
      });
      it(`TC${testCaseID += 1} - IconContainer should have css color: #000`, () => {
        cy.get('[class^=WarningPage_IconContainer__]').should('have.css', 'color', 'rgb(0, 0, 0)');
      });
    });
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
      it(`TC${testCaseID += 1} - TitleContainer should have text "Lịch sử cảnh báo"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').contains('Lịch sử cảnh báo');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have icon "Sort"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').find('img').first().should('have.attr', 'src')
          .should('include', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgBzZJNTsNADIWfnVIiVnCDHIFRpEIICzgR5QblBnAC4CQtQpCwgMAJ4AbMciTAZgKaFkKbwIpaGsmyxp+ff4D/NgrOuKiSPnTMTKNsy5zXsavyroLq5oJMm2+nG72vyYAmInpW3FSoIarywMR2fm21UwXzKq1EbAYDc4/ftnBZVHsM8SpwlGfpqI5dl9UBQX604Fb5cN+YDwW9NrqqDhVImvHYvdYzmnQC1mIyztF6M55l6VPwWwHO4Vuyi2GD9GDcBhC/GYE8htd3Mmz+6ZrBCdFMhYdM/gTY3UmP0WGtgKK8PVWlREUv8vxztQsBHL1YvEUg4mdMJZO/AX9gNLuX5bN3UGxrMkt9jP4AAAAASUVORK5CYII=');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have text "Sort"`, () => {
        cy.get('.DataTable_TitleContainer__6H6UI').contains('Sort');
      });
      it(`TC${testCaseID += 1} - TitleContainer should have icon "Filter"`, () => {
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
        it(`TC${testCaseID += 1} - HeadContainer should have text "Nội dung"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Nội dung');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Khu vực"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Khu vực');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Serial"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Serial');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Mức độ"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Mức độ');
        });
        it(`TC${testCaseID += 1} - HeadContainer should have text "Playbacks"`, () => {
          cy.get('[class^=DataTable_HeadContainer__]').contains('Playbacks');
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
