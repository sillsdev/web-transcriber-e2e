// See: https://stackoverflow.com/questions/51694218/cypress-custom-typescript-command-is-not-a-function

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable;
  }
}
