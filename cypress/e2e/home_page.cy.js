describe('HomePage Test', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login');
    cy.get('[name^=email]').type('admin@gmail.com');
    cy.get('[name^=password]').type('Admin123');
    cy.get('[class^=LoginPage_Button]').contains('Log In').click();
    cy.wait(3000).visit(Cypress.env('host') + '/');
  });

  describe('UI test', () => {
    it('Name of page is "Trang chủ"', () => {
      cy.get('[class^=Header_Title__]').contains('Trang chủ');
    });

    it('Content view part of HomePage is width right', () => {
      cy.get('[class^=HomePage_Container__]').should(
        'have.css',
        'width',
        '1120px',
      );
    });

    // it('Content view part of HomePage is height right', () => {
    //   cy.get('[class^=HomePage_Container__]').should(
    //     'have.css',
    //     'height',
    //     '880px',
    //   );
    // });

    it('Content view part of HomePage is background-color right', () => {
      cy.get('[class^=HomePage_Container__]').should(
        'have.css',
        'background-color',
        'rgb(255, 255, 255)',
      );
    });

    // it('Content view part of HomePage is top right', () => {
    //   cy.get('[class^=HomePage_Container__]').should('have.css', 'top', '128px');
    // });

    // it('Content view part of HomePage is left right', () => {
    //   cy.get('[class^=HomePage_Container__]').should('have.css', 'top', '285px');
    // });

    it('"Tổng Camera" is exist', () => {
      cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(1)').contains(
        'Tổng Camera',
      );
    });

    // it('"Tổng Camera" is width right', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(1)').should(
    //     'have.css',
    //     'width',
    //     '249px',
    //   );
    // });

    // it('"Tổng Camera" is height right', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(1)').should(
    //     'have.css',
    //     'height',
    //     '134px',
    //   );
    // });

    // it('"Tổng Camera" is border right', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(1)').should(
    //     'have.css',
    //     'border',
    //     '1px solid rgb(54, 55, 64)',
    //   );
    // });

    it('"Tổng Camera" is border-radius right', () => {
      cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(1)').should(
        'have.css',
        'border-radius',
        '8px',
      );
    });

    // it('"Tổng số Profile" is exist', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(2)').contains(
    //     'Tổng số Profile',
    //   );
    // });

    // it('"Tổng số Profile" is width right', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(2)').should(
    //     'have.css',
    //     'width',
    //     '253px',
    //   );
    // });

    // it('"Tổng số Profile" is height right', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(2)').should(
    //     'have.css',
    //     'height',
    //     '134px',
    //   );
    // });

    // it('"Tổng số Profile" is border right', () => {
    //   cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(2)').should(
    //     'have.css',
    //     'border',
    //     '1px solid rgb(54, 55, 64)',
    //   );
    // });

    it('"Tổng số Profile" is border-radius right', () => {
      cy.get('[class^=HomePage_ContainerDescription__] > :nth-child(2)').should(
        'have.css',
        'border-radius',
        '8px',
      );
    });

    it('ContainerCamera is width right', () => {
      cy.get('[class^=HomePage_ContainerCamera__]').should(
        'have.css',
        'width',
        '1120px',
      );
    });

    it('ContainerCamera is height right', () => {
      cy.get('[class^=HomePage_ContainerCamera__]').should(
        'have.css',
        'height',
        '676px',
      );
    });

    it('Count of Camera is full', () => {
      cy.get('[class^=HomePage_ContainerCamera__]')
        .find('div')
        .its('length')
        .should('eq', 4);
    });

    it('Camera is width right', () => {
      cy.get('[class^=HomePage_ContainerCamera__]')
        .find('div')
        .should('have.css', 'width', '540px');
    });

    // it('Camera is height right', () => {
    //   cy.get('[class^=HomePage_ContainerCamera__]')
    //     .find('div')
    //     .should('have.css', 'height', '320px');
    // });

    it('Camera is background-color right', () => {
      cy.get('[class^=HomePage_ContainerCamera__]')
        .find('div')
        .should('have.css', 'background-color', 'rgb(0, 0, 0)');
    });

    it('Camera is border-radius right', () => {
      cy.get('[class^=HomePage_ContainerCamera__]')
        .find('div')
        .should('have.css', 'border-radius', '8px');
    });
  });
});
