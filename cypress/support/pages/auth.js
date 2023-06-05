class Auth {
    //difference then java , class name does not have to be same with file name
    // you can put more than one class in a file, and none of them have any superiority over each other.


    login(userName, password) {
        cy.get('[name="username"]').type(userName);
        cy.get('[name="password"]').type(password);
        cy.get('#wooden_spoon').click;
    }
    logout() {
        cy.contains('Logout').should('be.visible').click;
    }
}

const auth = new Auth(); //object of the class we create

module.exports = {
    auth
}