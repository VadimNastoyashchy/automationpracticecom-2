const { HomePage } = require("../pom/homePage");

const homePage = new HomePage();

describe("Home Page tests", () => {
  it("Smoke Home Page", () => {
    homePage
      .visit()
      .checkPageUrl();
      
    // cy.get("#page").should("be.visible");
    cy.get(".header-container").should("be.visible").and("exist");
    cy.get(".footer-container").should("be.visible").and("exist");
  });

});
