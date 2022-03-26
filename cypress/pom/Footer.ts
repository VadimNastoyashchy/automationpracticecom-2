import {BasePage} from './base/BasePage';

export class Footer extends BasePage {

    private followUsIconsList: Array<string> = ['facebook', 'twitter', 'rss', 'google-plus'];
    private followUsLinkList: Array<string> = [
        'http://www.facebook.com/prestashopk',
        'http://www.twitter.com/',
        'http://www.prestashop.com/blog/en/',
        'https://www.google.com/'
    ];

    private informationUrlsList: Array<string> = ['Specials', 'New products',
        'Best sellers', 'Our stores', 'Contact us', 'Порядок и условия использования',
        'О компании', 'Specials', 'Sitemap'];

    private myAccountUrsList: Array<string> = ['My orders', 'My credit slips',
        'My addresses', 'My personal info'];

    private storeInformationData: Array<string> =
        ['QA Test Company', 'Call us now:', 'Email'];

    constructor() {
        super('#footer', 'Footer');
    }

    private get newsletterSection(): Cypress.Chainable {
        return this.container.find('#newsletter_block_left');
    }

    private get followUsSection(): Cypress.Chainable {
        return this.container.find('#social_block');
    }

    private get categoriesSection(): Cypress.Chainable {
        return this.container.find('.blockcategories_footer');
    }

    private get informationSection(): Cypress.Chainable {
        return this.container.find('#block_various_links_footer');
    }

    private get myAccountFooterLink(): Cypress.Chainable {
        return this.container.find('section.footer-block a[title="Manage my customer account"]');
    }

    private get myAccountList(): Cypress.Chainable {
        return this.container.find('ul.bullet');
    }

    private get storeInformationLink(): Cypress.Chainable {
        return this.container.find('#block_contact_infos');
    }

    public checkNewsletterSection(): this {
        cy.allure().startStep('Check Newsletter Section');
        this.newsletterSection
            .should('exist')
            .and('be.visible');
        this.newsletterSection
            .find('#newsletter-input')
            .invoke('attr', 'value')
            .should('contain', 'Enter your e-mail');
        this.newsletterSection
            .find('button.button-small')
            .should('exist');
        cy.allure().endStep();
        return this;
    }

    public checkFollowUsSection(): this {
        cy.allure().startStep('Check Follow Us section');
        this.followUsSection
            .should('exist')
            .and('be.visible');
        this.followUsSection
            .children()
            .children()
            .each(($section, index) => {
                cy.wrap($section)
                    .should('have.class', this.followUsIconsList[index])
                    .should('be.visible');
                cy.wrap($section.children())
                    .invoke('attr', 'target')
                    .should('eq', '_blank');
                cy.wrap($section.children())
                    .invoke('attr', 'href')
                    .should('eq', this.followUsLinkList[index]);
            });
        cy.allure().endStep();
        return this;
    }

    checkCategoriesSection(): this {
        cy.allure().startStep('Check Categories Section');
        this.categoriesSection
            .should('exist')
            .and('be.visible')
            .contains('Women')
            .should('exist');
        cy.allure().endStep();
        return this;
    }

    checkInformationSection(): this {
        cy.allure().startStep('Check Information Section');
        this.informationSection
            .children().children()
            .each(($element, index) => {
                cy.wrap($element)
                    .contains(this.informationUrlsList[index]);
            });
        return this;
    }

    checkMyAccountSection(): this {
        cy.allure().startStep('Check My Account Section');
        this.myAccountFooterLink
            .should('exist')
            .and('be.visible');
        this.myAccountList.children()
            .each(($element, index) => {
                cy.wrap($element).contains(this.myAccountUrsList[index]);
            });
        return this;
    }

    checkStoreInformationSection(): this {
        cy.allure().startStep('Check Store Information Section');
        this.storeInformationLink
            .should('exist')
            .and('be.visible');
        this.storeInformationLink
            .find('ul.toggle-footer')
            .children()
            .each(($element, index) => {
                cy.wrap($element).contains(this.storeInformationData[index]);
            });
        return this;
    }

    checkCorporateSection(): this {
        cy.allure().startStep('Check Corporate Section');
        cy.get('.bottom-footer')
            .contains('© 2014')
            .contains('Ecommerce software by PrestaShop™');
        return this;
    }
}