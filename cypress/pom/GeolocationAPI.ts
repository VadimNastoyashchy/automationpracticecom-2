import { BaseAPI } from "./base/BaseAPI";

export class GeolocationAPI extends BaseAPI {
    constructor() {
        super('https://freegeoip.app/json/')
    }

    checkCountryCode(): this {
        cy.allure().startStep('Check Country Code is UA');
        cy.get('@response').its('body.country_code').should('eq', 'UA');
        cy.allure().endStep;

        return this
    }

    checkCountryName(): this {
        cy.allure().startStep('Check Country Name is Ukraine');
        cy.get('@response').its('body.country_name').should('eq', 'Ukraine');
        cy.allure().endStep;

        return this
    }
}