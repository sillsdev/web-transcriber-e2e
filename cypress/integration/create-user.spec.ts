describe("add user details", () => {
  it("should successfully log into app and add profile", () => {
    cy.login({});
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/loading')
      expect(location.search).to.be.empty
    })
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/profile')
      expect(location.search).to.be.empty
    })
    cy.get('#name').type('e2e testing').should('have.value', 'e2e testing');
    cy.get('#given').should('have.value', 'e2e');
    cy.get('#family').should('have.value', 'testing');
    cy.get('.MuiButton-containedPrimary').should('not.be.disabled').click()
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/team')
      expect(location.search).to.be.empty
    })
  });
});
