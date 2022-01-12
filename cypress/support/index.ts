import './commands'
import '@shelex/cypress-allure-plugin';

before(() => {
    const allure = Cypress.Allure.reporter.getInterface();

    allure.writeEnvironmentInfo({
        'Url': Cypress.config('baseUrl')
    });

});