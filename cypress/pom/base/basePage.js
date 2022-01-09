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
    cy.location("href", { timeout: 10000 }).should("include", this.PAGE_URL);
    return this;
  }

  checkContentVisibility() {
    cy.get(this.CONTAINER).should("be.visible");
    return this;
  }

  checkHeader() {
    cy.get(".header-container").should("be.visible").and("exist");
    return this;
  }

  checkFooter() {
    cy.get(".footer-container").should("be.visible").and("exist");
    return this;
  }

  clickAndCheckContactUsLink() {
    cy.get("div.header-container").contains("Contact us").click();
    cy.url().should("contains", "controller=contact");
    return this;
  }
}
