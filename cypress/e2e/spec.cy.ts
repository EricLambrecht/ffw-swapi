describe('Navigation', () => {
  it('shows films, opens detail view(s) on click', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('A New Hope').click()
    cy.url().should('include', '/film')
    cy.get('h2').contains('A New Hope')

    cy.contains('Tatooine').click()
    cy.url().should('include', '/planet')

    cy.contains('Luke Skywalker').click()
    cy.url().should('include', '/character')
  })
})