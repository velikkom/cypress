/// <reference types="cypress" />
describe("find or get elements by using different locators ", () => {

    beforeEach(() => {
        //run before each test cases ,before Method in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })



    //open cypress|set ".only"
    it('Check different locater strategies', () => {
        //by css locator
        cy.get("input[name='username']").type("CydeoStudent");//type send keys demek
        cy.get("[type='text']").clear();
        cy.get("input").each((item, index, list) => {
            //asser the length of the list pf 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

    })
})