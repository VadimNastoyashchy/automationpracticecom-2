
export class BaseAPI {
    protected END_POINT: string;
    response: object;

    constructor(end_point: string) {
        this.END_POINT = end_point;
    }


    getResponse(): this {
        cy.allure().startStep('Send request and receive response');
        cy.request(this.END_POINT).then((responseObj) => {
            this.response = responseObj;
        });
        cy.allure().endStep;

        return this
    }

    checkResponseStatusIs200(): this {
        cy.allure().startStep('Check Response is 200 OK');
        cy.wrap(this).its('response').its('status').should('eq', 200);
        cy.allure().endStep;

        return this
    }

}