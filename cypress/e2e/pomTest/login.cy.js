import { auth } from '../../support/pages/auth'
import { NavigateTo } from '../../support/pages/navigation'

describe("Auth: login user with different ways", function() {
  //navigate to test page
  beforeEach('Navigate to login page',function(){
    cy.clearAllCookies();
    NavigateTo.loginPage();//this function we called it from our POM
  })
  it("Happy path", function() {
    //auth.login('hardcode variables ')-- not a god way
    cy.fixture('user').then(function(user){
      auth.login(user.user2.username, user.user2.password)
    })
    //lets call our custom command to verify the text
    cy.textExits('You logged into a secure area!');
    auth.logout();
    
  });
});
