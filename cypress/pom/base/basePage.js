export class BasePage {
  CONTAINER;
  PAGE_NAME;
  PAGE_URL;

  constructor(container, page_name, page_url) {
    this.CONTAINER = container;
    this.PAGE_NAME = page_name;
    this.PAGE_URL = page_url;
  }

  get container() {
    return cy.get(this.CONTAINER, { timeout: 10000 });
  }

  visit() {
    cy.visit(this.PAGE_URL);

    return this;
  }

  checkPageUrl() {
    cy.location('href', { timeout: 10000 }).should('include', this.PAGE_URL);

    return this;
  }

  checkContentVisibility() {
    this.container.should('be.visible');

    return this;
  }

  checkContentExisting() {
    this.container.should('exist');

    return this;
  }
}
