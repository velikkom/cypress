/// <reference types="cypress" />

describe('find or get elements by using different locators ', () => {
  beforeEach(() => {
    // run before each test cases ,before Method in TestNG
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  // open cypress|set ".only"
  it('Check Different Button Actions', () => {
    // select a button text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');
  });
});
