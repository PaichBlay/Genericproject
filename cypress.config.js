const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //baseUrl: 'https://staging.trymima.com/',
    specPattern:'cypress/e2e/testCases/*.js',
    viewportHeight:800,
    viewportWidth: 1500,
    defaultCommandTimeout: 10000,
    chromeWebSecurity:false,
    watchForFileChanges:false,
    // includeShadowDom,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },

  
});
