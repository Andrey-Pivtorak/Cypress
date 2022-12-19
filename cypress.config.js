const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: true,
  viewportHeight: 950,
  viewportWidth: 1200,
  nodeVersion: 'system',
});
