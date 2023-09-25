const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "93khj6",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/swagger.json",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
