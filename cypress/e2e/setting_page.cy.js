describe('Setting Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/setting');
  });

  describe('UI test', () => {
    it('Name of page is "Cài đặt"', () => {
      cy.get('.Header_Title__2gR-C').contains('Cài đặt');
    });

    it('Content view part of Setting Page is width right', () => {
      cy.get('.Whiteboard_Container__dyAjD').should(
        'have.css',
        'width',
        '1120px',
      );
    });

    it('Content view part of Setting Page is height right', () => {
      cy.get('.Whiteboard_Container__dyAjD').should(
        'have.css',
        'height',
        '905px',
      );
    });

    it('Content view part of Setting Page is background-color right', () => {
      cy.get('.Whiteboard_Container__dyAjD').should(
        'have.css',
        'background-color',
        'rgb(255, 255, 255)',
      );
    });

    it('Content view part of Setting Page is border right', () => {
      cy.get('.Whiteboard_Container__dyAjD').should(
        'have.css',
        'border',
        '1px solid rgb(223, 224, 235)',
      );
    });

    it('Content view part of Setting Page is border-radius right', () => {
      cy.get('.Whiteboard_Container__dyAjD').should(
        'have.css',
        'border-radius',
        '8px',
      );
    });

    it('Name of Label is "Cài đặt"', () => {
      cy.get('.Whiteboard_Title__HzRLe').contains('Cài đặt');
    });

    it('Label is width right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should('have.css', 'width', '398px');
    });

    it('Label is height right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should('have.css', 'height', '24px');
    });

    it('Label is top right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should('have.css', 'top', '32px');
    });

    it('Label is left right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should('have.css', 'left', '32px');
    });

    it('Label is right right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should('have.css', 'right', '690px');
    });

    it('Label is font-family right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should(
        'have.css',
        'font-family',
        'Mulish, sans-serif',
      );
    });

    it('Label is font-size right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should(
        'have.css',
        'font-size',
        '19px',
      );
    });

    it('Label is line-height right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should(
        'have.css',
        'line-height',
        '22px',
      );
    });

    it('Label is letter-spacing right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should(
        'have.css',
        'letter-spacing',
        '0.4px',
      );
    });

    it('Label is background-color right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)',
      );
    });

    it('Label is color right', () => {
      cy.get('.Whiteboard_Title__HzRLe').should(
        'have.css',
        'color',
        'rgb(0, 0, 0)',
      );
    });
  });
});
