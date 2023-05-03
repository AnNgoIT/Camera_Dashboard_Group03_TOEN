describe('Area Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('admin@gmail.com')
    cy.get('input[name="password"]').type('Admin123')
    cy.get('button[type="submit"]').click()
    cy.wait(3000).visit('http://localhost:3000/location');
  });

  describe('UI test', () => {
    it('Name of page is "Khu vực"', () => {
      cy.get('[class^=Header_Title__]').contains('Khu vực');
    });

    describe('Area Table Test', () => {
      it('Name of Table is "Home"', () => {
        cy.get('[class^=DataTable_Title__]').contains('Home');
      });

      it('Content view part of Area Table is width right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'width',
          '1122px',
        );
      });

      it('Content view part of Area Table is height right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'height',
          '279px',
        );
      });

      it('Content view part of Area Table is bottom right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'bottom',
          '626px',
        );
      });

      it('Content view part of Area Table is background-color right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'background-color',
          'rgb(255, 255, 255)',
        );
      });

      it('Content view part of Area Table is boder right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'border',
          '1px solid rgb(223, 224, 235)',
        );
      });

      it('Content view part of Area Table is border-radius right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'border-radius',
          '8px',
        );
      });

      it('Label Name of Table is width right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'width', '400px');
      });

      it('Label Name of Table is height right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'height', '24px');
      });

      it('Label Name of Table is left right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'left', '32px');
      });

      it('Label Name of Table is right right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'right', '690px');
      });

      it('Label Name of Table is top right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'top', '32px');
      });

      it('Label Name of Table is font-family right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'font-family',
          'Muli',
        );
      });

      it('Label Name of Table is font-size right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'font-size',
          '19px',
        );
      });

      it('Label Name of Table is line-height right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'line-height',
          '22px',
        );
      });

      it('Label Name of Table is letter-spacing right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'letter-spacing',
          '0.4px',
        );
      });

      it('Label Name of Table is background-color right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'background-color',
          'rgba(0, 0, 0, 0)',
        );
      });

      describe('Test Text Contains of Table', () => {
        it('Area Table must have "Sort"', () => {
          cy.get('[class^=DataTable_TitleContainer__]').contains('Sort');
        });

        it('Area Table must have "Filter"', () => {
          cy.get('[class^=DataTable_TitleContainer__]').contains('Filter');
        });

        it('Area Table must have "ID"', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]').contains('ID');
        });

        it('Area Table must have "Serial"', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]').contains('Serial');
        });

        it('Area Table must have "Profile"', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]').contains('Activate');
        });

        it('Area Table must have "Active"', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]').contains('Serial');
        });
      });

      it('Checkbox is exist', () => {
        cy.get('[class^=DataTable_HeadRowContainer__]').find(
          'input[type="checkbox"]',
        );
      });

      describe('Checkbox have format exactly', () => {
        it('Checkbox is width right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'width', '20px');
        });

        it('Checkbox is height right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'height', '20px');
        });

        it('Checkbox is top right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'top', '3px');
        });

        it('Checkbox is left right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'left', '38px');
        });

        it('Checkbox is border right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'border', '1px solid rgb(4, 4, 4)');
        });
      });

      it('Sort Icon and Filter Icon are exist', () => {
        cy.get('[class^=DataTable_TitleContainer__]')
          .find('img')
          .its('length')
          .should('eq', 2);
      });

      it('Divider is exist', () => {
        cy.get('[class^=DataTable_HeadDivider__]');
      });

      it('Divider is width right', () => {
        // eslint-disable-next-line no-undef
        cy.get('[class^=DataTable_HeadDivider__]').should(
          'have.css',
          'width',
          '1120px',
        );
      });

      it('Divider is border right', () => {
        cy.get('[class^=DataTable_HeadDivider__]').should(
          'have.css',
          'border',
          '1px solid rgb(223, 224, 235)',
        );
      });
    });
  });
});
