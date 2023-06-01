/// <reference types="cypress" />

describe('Input Forms Tests', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it.skip('Check different input box fields and verify', () => {
    // fill the form for username and other info
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Brown');
    cy.get('input[name="username"]').type('CrazyHeart');
    /**
     * Math.random(): creates a number between 0 - 1 ~ 0.005678
     * Math.floor : makes it a whole number
     *  */
    const email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);
    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);
    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`; // 4 digit extension number
    cy.get('input[name="phone"]').type(phoneNumber);
    cy.get('input[name="birthday"]').type('01/01/1999');
  });
  it.skip('Check different radio button actions', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radio) => {
        // get all radio buttons, select the first one and verify that it is checked
        cy.wrap(radio).first().check().should('be.checked'); // cypress works in a chainable functions structure
        /**
         * radio : is Jquery element,
         * cy.wrap(radio) : turns it into Cypress Object so that I can use cypress functions
         * first() : selects first element
         * check() : checks it out
         * should(): verifies whatever I provide as parameter 'be.checked'
         */
        // get all radio buttons, select the second one and verify that it is checked and confirmation label is visible
        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should('be.visible'); // common function used in tests
        // Third radio button is NOT checked
        cy.wrap(radio).eq(2).should('not.be.checked');
      });
  });
  it.skip('Check different checkbox actions', () => {
    // get all chechboxes, select JAVA and verify
    cy.get('[type="checkbox"]').then((checkbox) => {
      cy.wrap(checkbox).eq(1).check().should('be.checked');
      // uncheck JAVA
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
    });
  });
  it.skip('Check different checkbox actions', () => {
    // get all check boxes and check Java and verify
    cy.get('[type="checkbox"]').then((checkbox) => {
      cy.wrap(checkbox).eq(1).check().should('be.visible');
      // unchecked Java
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
      // Verify third one has a value and then check
      cy.wrap(checkbox).eq(2).should('have.value', 'javascript').check().should('be.checked');
    });
  });
  it.skip('Check selection of a choice from select dropdown', () => {
    cy.get('select[name="job_title"]').select('SDET');
    // assert that dropdown has correct text
    cy.get('select[name="job_title"]').contains('SDET');
  });
  it('Check selection of all select dropdown options', () => {
    // we will provide our test data through fixtures folder as Json object
    cy.fixture('departments').then((departments) => {
      // get all options in the menu, iterate through these options one by one
      cy.get('select[name="department"]>option').each((option, index) => {
        const optionText = option.text();
        // console.log(optionText);
        // console.log(index);
        // cy.log(departments[index])
        cy.get('select[name="department"]')
          .select(optionText)
          .should('have.value', option.val())
          .contains(departments[index]);
      });
    });
  });
});
