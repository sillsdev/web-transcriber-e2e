context('upload media', () => {
  beforeEach(() => {
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
    })

      it("should change the add card to two buttons", () => {
        cy.get('.MuiCardContent-root').click()
        cy.contains('Upload Media').click()
        cy.get('.MuiTypography-h6').contains('Upload Media').should('be.visible')
        // TODO: we may need https://www.inflectra.com/support/knowledgebase/kb268.aspx
        // which uses Rapise to get drag and drop to work.
        cy.contains('Drag and drop files here, or click here to browse for the files.').type('C:/Users/Trihus/Downloads/Matthew1-1-17_ESV.wav')
        cy.contains('Scripture Transcription').click();
        cy.get('#book-combobox').click().type('Matthew{Enter}');
        cy.get('#lang-bcp47').click();
        cy.get('.MuiTypography-h6').contains('Choose Language Details').should('be.visible')
        cy.get('#language').type('en')
        cy.contains('English').click()
        cy.contains('Save').click()
      });
    })
