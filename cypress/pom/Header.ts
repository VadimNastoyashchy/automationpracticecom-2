import { BasePage } from "./base/BasePage";

export class Header extends BasePage {
    constructor() {
        super('#header', 'Header');
    }

    get contactUsLink(): Cypress.Chainable {
        return this.container.find('#contact-link', { timeout: 10000 });
    }

    checkContactUsLink(): this {
        cy.allure().startStep('Check "Contact Us" link is present on Header');
        this.contactUsLink.should('be.visible');
        cy.allure().endStep();

        return this;
    }

    clickContactUsLink(): void {
        cy.allure().startStep('Check "Contact Us" link is clickable');
        this.contactUsLink.click();
        cy.allure().endStep();
    }

    get signInLink(): Cypress.Chainable {
        return this.container.find('.header_user_info', { timeout: 10000 });
    }

    checkSignInLink(): this {
        cy.allure().startStep('Check "SignIn" link is present on Header');
        this.signInLink.should('be.visible');
        cy.allure().endStep();

        return this
    }

    clickSignInLink(): void {
        cy.allure().startStep('Check "SignIn" link is clickable');
        this.signInLink.click();
        cy.allure().endStep;
    }
}
