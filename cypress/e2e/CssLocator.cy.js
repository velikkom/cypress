describe('CSSLocators', () => {
  it('csslocators', () => {
    cy.visit('https://www.amazon.com.tr/');

    cy.get('#twotabsearchtextbox').type('T-Shirts');

    cy.get("div[class='nav-search-submit nav-sprite']").click();

    cy.get("[class='a-color-state a-text-bold']").contains('T-Shirt');
  });
});
