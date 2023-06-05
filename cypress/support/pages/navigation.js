
export class NavigateTo{
    loginPage(){
        cy.visit(Cypress.env('login'));//takes the parameter of defined in the parenthesis

    }
}
export const navigateTo = new NavigateTo();
