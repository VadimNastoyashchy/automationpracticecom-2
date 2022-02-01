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

    clickContactUsLink(): this {
        cy.allure().startStep('Check "Contact Us" link is clickable');
        this.contactUsLink.click();
        cy.allure().endStep();

        return this;
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

    checkHeaderLogo(): this {
        cy.allure().startStep('Check the Header contains Logo image');
        cy.get('#header .logo').should('exist').and('be.visible');
        cy.allure().endStep();

        return this;
    }

    checkSearchField(): this {
        cy.allure().startStep('Check the Header contains Search field and button');
        cy.get('#header #searchbox').should('exist').and('be.visible');
        cy.get('#searchbox button.button-search').should('exist').and('be.visible');
        cy.get('#searchbox input#search_query_top').invoke('attr', 'placeholder').should('contain', 'Search')
        cy.allure().endStep();

        return this;
    }

    checkCartSection(): this {
        cy.allure().startStep('Check Cart section is present');
        cy.get('div.shopping_cart').should('exist').and('be.visible');
        cy.allure().endStep();

        return this;
    }


    get mainMenuList(): Cypress.Chainable {
        return this.container.find('ul.menu-content>li', { timeout: 1000 });
    }
    

    checkMenuSection(): this {
        cy.allure().startStep('Check that Menu sectionconsists: "Woman", "Dresses", "T-Shirts"');
        cy.get('div#block_top_menu ul.menu-content').should('exist').and('be.visible')
        this.mainMenuList.find('>a[title="Women"]').contains('Women');
        this.mainMenuList.find('>a[title="Dresses"]').contains('Dresses');
        this.mainMenuList.find('>a[title="T-shirts"]').contains('T-shirts')
        // cy.get('ul.menu-content a[title="Women"]').contains('Women');
        // cy.get('ul.menu-content a[title="Dresses"]').contains('Dresses');
        // cy.get('ul.menu-content>li>a[title="T-shirts"]').contains('T-shirts')
        cy.allure().endStep();

        return this;
    }

  

}
