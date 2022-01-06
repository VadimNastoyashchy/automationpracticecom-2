describe("Task 3. Cotact Us page", () => {
  //   before(() => {
  //     cy.visit("http://automationpractice.com/index.php");
  //   });

  it("Step 1. Opens Home Page", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.url().should("include", "http://automationpractice.com/index.php");
    cy.get("#index").should("be.visible");
  });

  it("Step 2. Clicks “Contact Us", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("div.nav").contains("Contact us").click();
    cy.url().should(
      "eq",
      "http://automationpractice.com/index.php?controller=contact"
    );
    cy.get("#page").should("be.visible");
  });

  it("Step 3. Checks Contact Us page header", () => {
    cy.visit("http://automationpractice.com/index.php?controller=contact");
    cy.get("#header").should("exist").and("be.visible");
  });

  it("Step 4. Checks Contact Us page footer", () => {
    cy.visit("http://automationpractice.com/index.php?controller=contact");
    cy.get(".footer-container").should("exist").and("be.visible");
  });
});
