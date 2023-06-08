import { auth } from "../../support/pages/auth";
import { navigateTo, NavigateTo } from "../../support/pages/navigation";

const LoginLocators = require("../../support/pages/auth");
describe("Auth: login user with different ways", function() {
  //navigate to test page
  beforeEach("Navigate to login page", function() {
    cy.clearAllCookies();
    navigateTo.loginPage();
    //NavigateTo.loginPage();//this function we called it from our POM
  });
  it.skip("Happy path scenario with POM Function", function() {

    cy.fixture("user").then(function(user) {
      auth.login(user.user2.username, user.user2.password);
      //ı need t import locatorsobject
      // auth.login();
    });
    //lets call our custom command to verify the text
    cy.textExist(" You logged into a secure area!");
    auth.logout();
    //auth.logout();

  });
  it.skip("Happy path scenario using POM Locators", function() {
    //auth.login('hardcode variables ')-- not a god way
    cy.fixture("user").then((user) => {
      LoginLocators.locators.userName.type(user.user2.username);
      /**
       * ===================01:17:00 da kaldım DEVAM
       */
      LoginLocators.locators.passWord.type(user.user2.password);
      LoginLocators.locators.submit.click();

     });
    cy.textExist(" You logged into a secure area!");
    auth.logout();

    });
  it("Check invalid user credentials ", function() {
    auth.login('invalid234','invalid234')//beauty of reusibilty
    //verify error message
    cy.textExist('Your username is invalid!')
  });
});
