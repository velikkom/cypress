import { negate } from "cypress/types/lodash";

export class NavigateTo{
    loginPage(){
        cy.visit(Cypress.env('login'));//takes the parameter of defined in the parenthesis

    }
}
export const NavigateTo = new NavigateTo();
