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
    //find element with class attribute and create a list then select 3rd element
    cy.get('.btn.btn-primary').then(($buttons)=>{
      cy.wrap($buttons).eq(1).click();//list buttons element and click index 1 element
      //assert the text
      cy.contains('Clicked on button two!').should('be.visible');
    })
  });
});
