export class BasePage {

    protected SELECTOR: string;
    protected PAGE_NAME: string;
    protected PAGE_URL: string;

    constructor(selector: string, page_name: string, page_url?: string) {
        this.SELECTOR = selector;
        this.PAGE_NAME = page_name;
        this.PAGE_URL = page_url;

    }

    get container(): Cypress.Chainable {
        return cy.get(this.SELECTOR, {timeout: 10000});
    }

    public visit(): this {
        cy.allure().startStep(`Navigate and visit the page ${this.PAGE_URL}`);
        cy.visit(this.PAGE_URL);
        cy.allure().endStep();
        return this;
    }

    public checkPageUrl(): this {
        cy.allure().startStep(`Check page url to include: ${this.PAGE_URL}`);
        cy.location('href', {timeout: 10000}).should('include', this.PAGE_URL);
        cy.allure().endStep();
        return this;
    }

    public checkContentVisibility(): this {
        cy.allure().startStep(`Check ${this.PAGE_NAME} element is visible`);
        this.container.should('be.visible');
        cy.allure().endStep();
        return this;
    }

    public checkContentExisting(): this {
        cy.allure().startStep(`Check ${this.PAGE_NAME} element exists in the DOM`);
        this.container.should('exist');
        cy.allure().endStep();
        return this;
    }
}