describe(testdeneme,function(){

    it('adds todos',function() {
        cy.visit('https://www.app.com/')
        cy.get('[data-testid="new-todo"]')
          .type('write code{enter}')
          .type('write tests{enter}')
        // confirm the application is showing two items
        cy.get('[data-testid="todos"]').should('have.length', 2)
      })
})