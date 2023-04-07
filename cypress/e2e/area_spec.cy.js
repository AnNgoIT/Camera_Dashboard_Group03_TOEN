describe('Area Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/location');
  });

  describe('UI test', () => {
    it('Name of page is "Khu vực"', () => {
      cy.get('.Header_Title__2gR-C').contains('Khu vực');
    });

    describe('Area Table Test', () => {
      it('Name of Table is "Home"', () => {
        cy.get('.DataTable_Title__ABnjj').contains('Home');
      });

      it('Content view part of Area Table is width right', () => {
        cy.get('.DataTable_Container__19dhn').should(
          'have.css',
          'width',
          '1122px',
        );
      });

      it('Content view part of Area Table is height right', () => {
        cy.get('.DataTable_Container__19dhn').should(
          'have.css',
          'height',
          '279px',
        );
      });

      it('Content view part of Area Table is bottom right', () => {
        cy.get('.DataTable_Container__19dhn').should(
          'have.css',
          'bottom',
          '626px',
        );
      });

      it('Content view part of Area Table is background-color right', () => {
        cy.get('.DataTable_Container__19dhn').should(
          'have.css',
          'background-color',
          'rgb(255, 255, 255)',
        );
      });

      it('Content view part of Area Table is boder right', () => {
        cy.get('.DataTable_Container__19dhn').should(
          'have.css',
          'border',
          '1px solid rgb(223, 224, 235)',
        );
      });

      it('Content view part of Area Table is border-radius right', () => {
        cy.get('.DataTable_Container__19dhn').should(
          'have.css',
          'border-radius',
          '8px',
        );
      });

      it('Label Name of Table is width right', () => {
        cy.get('.DataTable_Title__ABnjj').should('have.css', 'width', '400px');
      });

      it('Label Name of Table is height right', () => {
        cy.get('.DataTable_Title__ABnjj').should('have.css', 'height', '24px');
      });

      it('Label Name of Table is left right', () => {
        cy.get('.DataTable_Title__ABnjj').should('have.css', 'left', '32px');
      });

      it('Label Name of Table is right right', () => {
        cy.get('.DataTable_Title__ABnjj').should('have.css', 'right', '690px');
      });

      it('Label Name of Table is top right', () => {
        cy.get('.DataTable_Title__ABnjj').should('have.css', 'top', '32px');
      });

      it('Label Name of Table is font-family right', () => {
        cy.get('.DataTable_Title__ABnjj').should(
          'have.css',
          'font-family',
          'Muli',
        );
      });

      it('Label Name of Table is font-size right', () => {
        cy.get('.DataTable_Title__ABnjj').should(
          'have.css',
          'font-size',
          '19px',
        );
      });

      it('Label Name of Table is line-height right', () => {
        cy.get('.DataTable_Title__ABnjj').should(
          'have.css',
          'line-height',
          '22px',
        );
      });

      it('Label Name of Table is letter-spacing right', () => {
        cy.get('.DataTable_Title__ABnjj').should(
          'have.css',
          'letter-spacing',
          '0.4px',
        );
      });

      it('Label Name of Table is background-color right', () => {
        cy.get('.DataTable_Title__ABnjj').should(
          'have.css',
          'background-color',
          'rgba(0, 0, 0, 0)',
        );
      });

      describe('Test Text Contains of Table', () => {
        it('Area Table must have "Sort"', () => {
          cy.get('.DataTable_TitleContainer__kdQJZ').contains('Sort');
        });

        it('Area Table must have "Filter"', () => {
          cy.get('.DataTable_TitleContainer__kdQJZ').contains('Filter');
        });

        it('Area Table must have "ID"', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk').contains('ID');
        });

        it('Area Table must have "Serial"', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk').contains('Serial');
        });

        it('Area Table must have "Profile"', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk').contains('Activate');
        });

        it('Area Table must have "Active"', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk').contains('Serial');
        });
      });

      it('Checkbox is exist', () => {
        cy.get('.DataTable_HeadRowContainer__ojaxk').find(
          'input[type="checkbox"]',
        );
      });

      describe('Checkbox have format exactly', () => {
        it('Checkbox is width right', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk')
            .find('input[type="checkbox"]')
            .should('have.css', 'width', '20px');
        });

        it('Checkbox is height right', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk')
            .find('input[type="checkbox"]')
            .should('have.css', 'height', '20px');
        });

        it('Checkbox is top right', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk')
            .find('input[type="checkbox"]')
            .should('have.css', 'top', '3px');
        });

        it('Checkbox is left right', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk')
            .find('input[type="checkbox"]')
            .should('have.css', 'left', '38px');
        });

        it('Checkbox is border right', () => {
          cy.get('.DataTable_HeadRowContainer__ojaxk')
            .find('input[type="checkbox"]')
            .should('have.css', 'border', '1px solid rgb(4, 4, 4)');
        });
      });

      it('Sort Icon and Filter Icon are exist', () => {
        cy.get('.DataTable_TitleContainer__kdQJZ')
          .find('img')
          .its('length')
          .should('eq', 2);
      });

      it('Divider is exist', () => {
        cy.get('.DataTable_HeadDivider__SFHPN');
      });

      it('Divider is width right', () => {
        cy.get('.DataTable_HeadDivider__SFHPN').should(
          'have.css',
          'width',
          '1120px',
        );
      });

      it('Divider is border right', () => {
        cy.get('.DataTable_HeadDivider__SFHPN').should(
          'have.css',
          'border',
          '1px solid rgb(223, 224, 235)',
        );
      });
    });
  });
});
