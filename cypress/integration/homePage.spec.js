describe("Checking Home Page", () => {
  before(() => {
    cy.visit("http://automationpractice.com/index.php");
  });
  it("Step 1. Opens Home Page", () => {
    cy.url().should("eq", "http://automationpractice.com/index.php");
    cy.get("#page").should("be.visible");
  });

  it("Step 2. Check Home page header", () => {
    cy.get(".header-container").should("be.visible").and("exist");
  });

  it("Step 3. Check Home page footer", () => {
    cy.get(".footer-container").should("be.visible").and("exist");
  });
});
