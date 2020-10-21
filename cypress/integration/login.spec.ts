describe("login unverified", () => {
  it("should successfully log into app and display unverified screen", () => {
    cy.login({email: Cypress.env("auth_username_unverified"), pw: Cypress.env("auth_password_unverified")});
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/emailunverified')
      expect(location.search).to.be.empty
    })
  });
});

describe("login and load", () => {
  it("should successfully log into app and display loading", () => {
    cy.login({});
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/loading')
      expect(location.search).to.be.empty
    })
  });
});

describe("login, load and profile", () => {
  it("should successfully log into app and display profile", () => {
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
    cy.get('.MuiButton-containedPrimary').should('be.disabled')
  });
});

describe("enter user name", () => {
  it("should successfully log into app and enter name in profile", () => {
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
    cy.get('.MuiButton-containedPrimary').should('not.be.disabled')
  });
});

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

describe("delete user", () => {
  it("should successfully log into app and delete the current user", () => {
    cy.login({});
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/loading')
      expect(location.search).to.be.empty
    })
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/team')
      expect(location.search).to.be.empty
    })
    cy.get('.MuiAvatar-circle').click()
    cy.contains('My Account').click()
    cy.contains('Advanced').click()
    cy.get('.MuiButton-containedSecondary').click()
    cy.contains('Yes').click()
  });
});
