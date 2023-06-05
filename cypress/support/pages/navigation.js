import { negate } from "cypress/types/lodash";

export class NavigateTo{
    loginPage(){
        cy.visit(Cypress.env('login'));

    }
}
export const NavigateTo = new NavigateTo();
