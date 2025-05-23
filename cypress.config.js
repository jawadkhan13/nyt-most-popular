import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {

    baseUrl: 'http://localhost:5173',

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      // e.g. code coverage plugin could go here
    },
  },
});
