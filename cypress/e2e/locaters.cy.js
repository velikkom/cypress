/// <reference types="cypress" />
import * as child_process from 'child_process';

describe('find or get elements by using different locators ', () => {
  beforeEach(() => {
    // run before each test cases ,before Method in TestNG
    cy.clearCookies();
    cy.visit('/login');
  });

  // open cypress|set ".only"
  it('Check different locater strategies', () => {
    // by css locator
    cy.get("input[name='username']").type('CydeoStudent'); // type send keys demek
    cy.get("[type='text']").clear();
    cy.get('input').each((item, index, list) => {
      // asser the length of the list pf 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });
    // by attribute name
    cy.get('[type]');

    // by class attribute value
    cy.get('.btn.btn-primary');

    // by id
    cy.get('#wooden_spoon');

    // ı want to use text : no xpath in cypress but we need to install with different aproach
    cy.get('button').should('contain', 'Login').click();

    it('Check finding elements by traveling through DOM', () => {
      // travel to find login btn: locate username box
      cy.get('input[name="username"]')
        .parents('form')
        .find('button')
        .should('contain', 'Login')
        .click();
    });

    it.only('Check Different Type of assertion', () => {
      // cypress itself bundles assertions provided by Chai , sinon and JQuery libraries
      cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');
      // expect assertion
      cy.get('#wooden_spoon').then((buttonElement) => {
        expect(buttonElement).to.have.text('Login');
        expect(buttonElement).to.have.class('btn btn-primary');
      });
    });
  });
});
