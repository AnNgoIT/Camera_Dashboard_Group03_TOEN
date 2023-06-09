describe('Setting Page Test', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login');
    cy.get('[name^=email]').type('admin@gmail.com');
    cy.get('[name^=password]').type('Admin123');
    cy.get('[class^=LoginPage_Button]').contains('Log In').click();
    cy.wait(5000).visit(Cypress.env('host') + '/setting');
  });

  describe('SettingPage Test', () => {
    it('Name of page is "Cài đặt"', () => {
      cy.get('[class^=Header_Title__]').contains('Cài đặt');
    });

    it('Content view part of Setting Page is width right', () => {
      cy.get('[class^=Whiteboard_Container__]').should(
        'have.css',
        'width',
        '680px',
      );
    });

    it('Content view part of Setting Page is height right', () => {
      cy.get('[class^=Whiteboard_Container__]').should(
        'have.css',
        'height',
        '460px',
      );
    });

    it('Content view part of Setting Page is background-color right', () => {
      cy.get('[class^=Whiteboard_Container__]').should(
        'have.css',
        'background-color',
        'rgb(255, 255, 255)',
      );
    });

    it('Content view part of Setting Page is border right', () => {
      cy.get('[class^=Whiteboard_Container__]').should(
        'have.css',
        'border',
        '0.8px solid rgb(223, 224, 235)',
      );
    });

    it('Content view part of Setting Page is border-radius right', () => {
      cy.get('[class^=Whiteboard_Container__]').should(
        'have.css',
        'border-radius',
        '8px',
      );
    });

    it('Name of Label is "Cài đặt"', () => {
      cy.get('[class^=Whiteboard_Title__]').contains('Cài đặt');
    });



    it('Label is height right', () => {
      cy.get('[class^=Whiteboard_Title__]').should('have.css', 'height', '28px');
    });

    it('Label is top right', () => {
      cy.get('[class^=Whiteboard_Title__]').should('have.css', 'top', 'auto');
    });

    it('Label is left right', () => {
      cy.get('[class^=Whiteboard_Title__]').should('have.css', 'left', 'auto');
    });

    it('Label is right right', () => {
      cy.get('[class^=Whiteboard_Title__]').should('have.css', 'right', 'auto');
    });

    it('Label is font-family right', () => {
      cy.get('[class^=Whiteboard_Title__]').should(
        'have.css',
        'font-family',
        'Muli',
      );
    });

    it('Label is font-size right', () => {
      cy.get('[class^=Whiteboard_Title__]').should(
        'have.css',
        'font-size',
        '19px',
      );
    });

    it('Label is line-height right', () => {
      cy.get('[class^=Whiteboard_Title__]').should(
        'have.css',
        'line-height',
        'normal',
      );
    });

    it('Label is letter-spacing right', () => {
      cy.get('[class^=Whiteboard_Title__]').should(
        'have.css',
        'letter-spacing',
        '0.4px',
      );
    });

    it('Label is background-color right', () => {
      cy.get('[class^=Whiteboard_Title__]').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)',
      );
    });

    it('Label is color right', () => {
      cy.get('[class^=Whiteboard_Title__]').should(
        'have.css',
        'color',
        'rgb(37, 39, 51)',
      );
    });
  });
});