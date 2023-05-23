describe('Area Test', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/login');
    cy.get('[name^=email]').type('admin@gmail.com');
    cy.get('[name^=password]').type('Admin123');
    cy.get('[class^=LoginPage_Button]').contains('Log In').click();
    cy.wait(5000).visit(Cypress.env('host') + '/location');
  });

  describe('AreaPage Test', () => {
    it('Name of page is "Khu vực"', () => {
      cy.get('[class^=Header_Title__]').contains('Khu vực');
    });

    describe('Area Table Test', () => {
      it('Name of Table is "Home"', () => {
        cy.get('[class^=DataTable_Title__]').contains('Home');
      });

      it('Content view part of Area Table is bottom right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'bottom',
          'auto'
        );
      });

      it('Content view part of Area Table is background-color right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'background-color',
          'rgb(255, 255, 255)'
        );
      });

      it('Content view part of Area Table is boder right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'border',
          '0.8px solid rgb(223, 223, 235)'
        );
      });

      it('Content view part of Area Table is border-radius right', () => {
        cy.get('[class^=DataTable_Container__]').should(
          'have.css',
          'border-radius',
          '8px'
        );
      });

      it('Label Name of Table is height right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'height',
          '24px'
        );
      });

      it('Label Name of Table is left right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'left', 'auto');
      });

      it('Label Name of Table is right right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'right',
          'auto'
        );
      });

      it('Label Name of Table is top right', () => {
        cy.get('[class^=DataTable_Title__]').should('have.css', 'top', 'auto');
      });

      it('Label Name of Table is font-family right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'font-family',
          'Muli'
        );
      });

      it('Label Name of Table is font-size right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'font-size',
          '19px'
        );
      });

      it('Label Name of Table is line-height right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'line-height',
          'normal'
        );
      });

      it('Label Name of Table is letter-spacing right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'letter-spacing',
          '0.4px'
        );
      });

      it('Label Name of Table is background-color right', () => {
        cy.get('[class^=DataTable_Title__]').should(
          'have.css',
          'background-color',
          'rgba(0, 0, 0, 0)'
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
          'input[type="checkbox"]'
        );
      });

      describe('Checkbox have format exactly', () => {
        it('Checkbox is height right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'height', '20px');
        });

        it('Checkbox is top right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'top', 'auto');
        });

        it('Checkbox is left right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'left', 'auto');
        });

        it('Checkbox is border right', () => {
          cy.get('[class^=DataTable_HeadRowContainer__]')
            .find('input[type="checkbox"]')
            .should('have.css', 'border', '0px none rgb(0, 0, 0)');
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

      it('Divider is border right', () => {
        cy.get('[class^=DataTable_HeadDivider__]').should(
          'have.css',
          'border',
          '0.8px solid rgb(223, 224, 235)'
        );
      });
    });
  });
});
