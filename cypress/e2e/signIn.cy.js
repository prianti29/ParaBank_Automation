describe('SignIn spec', () => {
    it('passes', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.contains('login').click();
        cy.get('input[name="username"]').type('prianti')
        cy.get('input[name="password"]').type('Priantibanik.cse@123')
        cy.get('input.button[value="Log In"]').click();

    })
})