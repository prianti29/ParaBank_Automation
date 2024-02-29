describe('SignUp spec', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    cy.contains('Register').click();
    cy.get('input[name="customer.firstName"]').type('Prianti')
    cy.get('input[name="customer.lastName"]').type('Banik')
    cy.get('input[name="customer.address.street"]').type('Banik Para')
    cy.get('input[name="customer.address.city"]').type('Chittagong')
    cy.get('input[name="customer.address.state"]').type('Bangladesh')
    cy.get('input[name="customer.address.zipCode"]').type('4042')
    cy.get('input[name="customer.phoneNumber"]').type('+880453656535')
    cy.get('input[name="customer.ssn"]').type('265646')
    cy.get('input[name="customer.username"]').type('prianti')
    cy.get('input[name="customer.password"]').type('Priantibanik.cse@123')
    cy.get('input[name="repeatedPassword"]').type('Priantibanik.cse@123')
    cy.get('input.button[value="Register"]').click();
    // cy.get('input.button[value="Register"]').click();

  })
})