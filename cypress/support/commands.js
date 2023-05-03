import '@testing-library/cypress/add-commands';

let testCaseId = 1;
let testCaseID = 1;

Cypress.Commands.add('clickLink', () => {
  const newTestCaseId = `TC${testCaseId}`;
  testCaseId += 1;
  return newTestCaseId;
});
Cypress.Commands.add('testId', () => {
  cy.clickLink().then(value => console.log(`${testCaseID = value}`));
});
