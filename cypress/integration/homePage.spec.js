import { Header } from "../pom/header";
import { HomePage } from "../pom/HomePage";

const homePage = new HomePage();
const header = new Header();
// TODO: const footer

describe("Home Page tests", () => {
  it("Smoke Home Page", () => {
    homePage
      .visit()
      .checkPageUrl()
      .checkContentVisibility();

    header 
      .checkContentVisibility();

    // TODO:FOOTER.....
  });
});
