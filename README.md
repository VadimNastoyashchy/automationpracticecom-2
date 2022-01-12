# automationpractice.com

### The cypress end-to-end tests for the automationpractice.com.

### Getting started

> Before you follow the steps below, make sure you have the
[Node.js](https://nodejs.org/en/download/) installed _globally_ only your system

Add Allure report to project

1. Install allure and allure plugin: 

npm i -D @shelex/cypress-allure-plugin

2. Run tests with Allure
npx cypress run --env allure=true

3.Generate Allure report folder
allure generate allure-results --clean -o allure-report

4.Open report on browser
allure open