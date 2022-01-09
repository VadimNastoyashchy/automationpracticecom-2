import { HomePage } from "../pom/HomePage";

const homePage = new HomePage();

describe("Home Page tests", () => {
  it("Smoke Home Page", () => {
    homePage
      .visit()
      .checkPageUrl()
      .checkContentVisibility()
      .checkHeader()
      .checkFooter();
  });
});
