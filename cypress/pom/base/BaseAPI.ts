
export class BaseAPI {
    protected END_POINT: string;

    constructor(end_point: string) {
        this.END_POINT = end_point;
    }


    public GET(): this {
        cy.allure().startStep('Send GET request and receive response');
        cy.request({
            method: 'GET',
            url: this.END_POINT,
            failOnStatusCode: false
          }).as('response');
        cy.allure().endStep;
       
        return this
    }

    public checkResponseStatusCode(expectedStatusCode: number): this {
        cy.allure().startStep(`Check Response is ${expectedStatusCode}`);
        cy.get('@response').its('status').should('eq', expectedStatusCode);
        cy.allure().endStep;

        return this
    }

}