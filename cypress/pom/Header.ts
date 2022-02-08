import { find } from "cypress/types/lodash";
import { BasePage } from "./base/BasePage";
import { SignInPage } from "./SignInPage";

export class Header extends BasePage {
    private menuSectionList: Array<string> = ['Women', 'Dresses', 'T-shirts'];

    public constructor() {
        super('#header', 'Header');
    }

    private get contactUsLink(): Cypress.Chainable {
        return this.container.find('#contact-link', { timeout: 10000 });
    }

    private get signInLink(): Cypress.Chainable {
        return this.container.find('.header_user_info', { timeout: 10000 });
    }

    private get menuSection(): Cypress.Chainable {
        return this.container.find('[class*="menu-content"]', { timeout: 10000 });
    }

    private get saleBanner(): Cypress.Chainable {
        return this.container.find('.banner img.img-responsive', { timeout: 10000 });
    }
    private get shopPhone(): Cypress.Chainable {
        return this.container.find('.shop-phone', { timeout: 10000 });
    }

    private get headerLogo(): Cypress.Chainable {
        return this.container.find('img.logo', { timeout: 10000 });
    }

    private get searchButton(): Cypress.Chainable {
        return this.container.find('#searchbox', { timeout: 10000 });
    }

    private get searchInput(): Cypress.Chainable {
        return this.container.find('input#search_query_top', { timeout: 10000 });
    }

    private get cartSection(): Cypress.Chainable {
        return this.container.find('div.shopping_cart', { timeout: 10000 });
    }

    public checkContactUsLink(): this {
        cy.allure().startStep('Check "Contact Us" link is present on Header');
        this.contactUsLink.should('be.visible');
        cy.allure().endStep();

        return this;
    }

    public clickContactUsLink(): this {
        cy.allure().startStep('Check "Contact Us" link is clickable');
        this.contactUsLink.click();
        cy.allure().endStep();

        return this;
    }

    public checkSignInLink(): this {
        cy.allure().startStep('Check "SignIn" link is present on Header');
        this.signInLink.should('be.visible');
        cy.allure().endStep();

        return this;
    }

    public clickSignInLink(): SignInPage {
        cy.allure().startStep('Check "SignIn" link is clickable');
        this.signInLink.click();
        cy.allure().endStep;

        return new SignInPage();
    }

    public checkSaleBanner(): this {
        cy.allure().startStep('Check Sale banner is exist and visible');
        this.saleBanner
            .should('exist')
            .and('be.visible');
        cy.allure().endStep();

        return this;
    }

    public checkShopPhone(): this {
        cy.allure().startStep('Check the Shope phone title includs "Call us now" and "0123-456-789"');
        this.shopPhone
            .should('exist')
            .and('be.visible')
            .contains('Call us now')
            .contains('0123-456-789');
        cy.allure().endStep();

        return this;
    }

    public checkHeaderLogo(): this {
        cy.allure().startStep('Check the Header contains Logo image');
        this.headerLogo
            .should('exist')
            .and('be.visible');
        cy.allure().endStep();

        return this;
    }

    public checkLinksOpenInTheCurrentTab(): this {
        cy.allure().startStep(`Check that ContactUsLink and SignInLink open in the current tab`);
        this.contactUsLink
            .children()
            .should('not.have.attr', 'target');
        this.signInLink
            .children()
            .should('not.have.attr', 'target');
        cy.allure().endStep();

        return this;

    }

    public checkSearchField(): this {
        cy.allure().startStep('Check the Header contains Search field and button');
        cy.get('#header #searchbox').should('exist').and('be.visible');
        this.searchButton
            .should('exist')
            .and('be.visible');
        this.searchInput
            .invoke('attr', 'placeholder')
            .should('contain', 'Search')
        cy.allure().endStep();

        return this;
    }

    public checkCartSection(): this {
        cy.allure().startStep('Check Cart section is present');
        this.cartSection
            .should('exist')
            .and('be.visible');
        cy.allure().endStep();

        return this;
    }

    public checkMenuSection(): this {
        cy.allure().startStep(`Check that Menu section consists ${this.menuSectionList}`);
        this.menuSection.children().each(($section, index) => {
            cy.wrap($section)
                .should('contain.text', this.menuSectionList[index])
                .should('be.visible');
        });
        cy.allure().endStep();

        return this;
    }
}