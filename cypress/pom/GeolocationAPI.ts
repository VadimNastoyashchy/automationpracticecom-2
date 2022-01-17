import { CountryCode, CountryName } from "../plugins/Enums";
import { BaseAPI } from "./base/BaseAPI";

export class GeolocationAPI extends BaseAPI {
    constructor() {
        super('https://freegeoip.app/json/');
    }

    checkCountryCode(): this {
        cy.allure().startStep(`Check Country Code is ${CountryCode.UA}`);
        cy.get('@response').its('body.country_code').should('eq', CountryCode.UA);
        cy.allure().endStep;

        return this
    }

    checkCountryName(): this {
        cy.allure().startStep(`Check Country Name is ${CountryName.Ukraine}`);
        cy.get('@response').its('body.country_name').should('eq', CountryName.Ukraine);
        cy.allure().endStep;

        return this
    }
}