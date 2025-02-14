const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
