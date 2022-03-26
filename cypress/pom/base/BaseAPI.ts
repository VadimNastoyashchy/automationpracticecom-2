export class BaseAPI {

    constructor() {
    }

    public GET(url: string): this {
        cy.allure().startStep('Send GET request and receive response');
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false
        }).as('response');
        cy.allure().endStep();
        return this;
    }

    public checkResponseStatusCode(expectedStatusCode: number): this {
        cy.allure().startStep(`Check Response is ${expectedStatusCode}`);
        cy.get('@response').its('status').should('eq', expectedStatusCode);
        cy.allure().endStep();
        return this;
    }

}