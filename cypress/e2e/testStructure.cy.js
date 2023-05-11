 ///  <reference types="cypress" />
  

//const cypress = NodeRequire("cypress");


describe("context : my first test ",() => {
    before(()=>{
//runs once before all test cases in this describe bloc, like beforeclass in TestNg

    })
    beforeEach(() => {
        //run before each test cases ,before Method in TestNG
        cy.clearCookies();
    })
    after(() => {
        //similar to after class in TestNG , runs after all test finished
    })
    afterEach(()=>{
        //similar to after method in TestNG
        
    })
    //open cypress|set ".only"
    it('Opening a web application', () => {
       cy.visit('/registration_form');
       })
    it('Test 2',()=>{
        expect(false).to.equal(false);
    })
    it('Test 3',()=>{
        expect(false).not.to.equal(true);
    })
    it('Test 4',()=>{
        expect(5).to.equal(5);
    })
    it.only('Test 5',()=>{
        expect(true).to.equal('5'==5);
    })
})