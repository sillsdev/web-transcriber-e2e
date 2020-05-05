# web-transcriber-e2e

End to End testing project for web-transcriber-admin

This project was created for end to end testing of
[web-transcriber-admin](https://github.com/sillsdev/web-transcriber-admin). It is separatate based on the recommendations of [Deep Dive Into Typescript](https://basarat.gitbook.io/typescript/intro-1/cypress). The login process was designed based on the [Auth0 blog post](https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/)

## Installing dependencies

- npm install

## Preparing environment

1. Rename `.env.sample` to `.env` and fill in the values.
2. Rename `cypress.env.json.sample` to `cypress.env.json` and fill in the values.

## Launching app to test

For the tests to succeed, the [web-transcriber-admin](https://github.com/sillsdev/web-transcriber-admin) has to be running on port 3000. So in that project's folder use these commands:

- npm run dev
- npm start

> NB: the tests have been set up to run against the development channel.

## Testing interactively

- npx cypress open

## Testing as a batch

- npx cypress run
