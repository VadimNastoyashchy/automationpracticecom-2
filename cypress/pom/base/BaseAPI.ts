
export class BaseAPI {
    protected END_POINT: string;

    constructor(end_point: string) {
        this.END_POINT = end_point;
    }


    GET(): this {
        cy.allure().startStep('Send request and receive response');
        cy.request(this.END_POINT).as('response')
        cy.allure().endStep;

        return this
    }

    checkResponseStatusCode(expectedStatusCode: number): this {
        cy.allure().startStep(`Check Response is ${expectedStatusCode}`);
        cy.get('@response').its('status').should('eq', expectedStatusCode);
        cy.allure().endStep;

        return this
    }

}