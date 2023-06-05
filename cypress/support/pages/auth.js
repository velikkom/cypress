class Auth {
  //difference then java , class name does not have to be same with file name
  // you can put more than one class in a file, and none of them have any superiority over each other.


  login(userName, password) {
    cy.get("[name=\"username\"]").type(userName);
    cy.get("[name=\"password\"]").type(password);
    //cy.get("#wooden_spoon").click;
    cy.get('#wooden_spoon').click();
  }

  logout() {
    cy.contains('Logout').should('be.visible').click();
  }
}

const auth = new Auth(); //object of the class we create
class Locators {//how do we apply findBy annotation of Selenium with Cypress
  get userName() {
    return cy.get("[name=\"username\"]", { timeout: 5000 });//defining custom timeout for a specific element
  }

  get passWord() {
    return cy.get("[name=\"password\"]", { timeout: 5000 });
  }

}
const locators = new Locators();
module.exports = {
  auth,
  locators
};