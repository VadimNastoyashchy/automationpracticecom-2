import { BasePage } from "./base/BasePage";

export class Header extends BasePage {
    constructor() {
        super('#header', 'Header');
    }

    get contactUsLink() {
        return this.container.find('#contact-link', { timeout: 10000 });
    }

    checkContactUsLink() {
        this.contactUsLink.should('be.visible');

        return this;
    }

    clickContactUsLink() {
        this.contactUsLink.click();
    }
}