import { BasePage } from "./base/BasePage";
import { ContactUsPage } from "./ContactUsPage";
import { SignInPage } from "./SignInPage";

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

    clickContactUsLink(): ContactUsPage {
        cy.allure().startStep('Check "Contact Us" link is clickable');
        this.contactUsLink.click();
        cy.allure().endStep();

        return new ContactUsPage();
    }

    get signInLink(): Cypress.Chainable {
        return this.container.find('.header_user_info', { timeout: 10000 });
    }

    checkSignInLink(): this {
        cy.allure().startStep('Check "SignIn" link is present on Header');
        this.signInLink.should('be.visible');
        cy.allure().endStep();

        return this;
    }

    clickSignInLink(): SignInPage {
        cy.allure().startStep('Check "SignIn" link is clickable');
        this.signInLink.click();
        cy.allure().endStep;

        return new SignInPage();
    }

    checkSaleBanner(): this {
        cy.allure().startStep('Check Sale banner is exist and visible');
        cy.get('.banner img.img-responsive').should('exist').and('be.visible');
        cy.allure().endStep();

        return this;
    }

    checkShopPhone(): this {
        cy.allure().startStep('Check the Shope phone title includs "Call us now" and "0123-456-789"');
        cy.get('.shop-phone').should('exist').and('be.visible').contains('Call us now').contains('0123-456-789');
        cy.allure().endStep();

        return this;
    }

}
