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
    cy.get('button').each((item,index,list)=>{
      expect(list).to.have.length(6);
      expect(item).to.have.attr("onclick");
    })
    // I will gett all buttons like previous approach get only the item then check for
    //text of each item if its equal to button 4 then click on it

    cy.get('button').each((item)=>{
      if (item.text()==='Button 4'){
        cy.log(item.text());//write the text console
       // item.click(); we can not use cypress click func on jquery element
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    })

    //npx cypress run --headless -b chrome



  });
});
