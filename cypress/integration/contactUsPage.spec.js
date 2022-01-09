import { ContactUs } from "../pom/contactUs";
import { HomePage } from "../pom/HomePage";

const homePage = new HomePage();
const contactUsPage = new ContactUs();

describe("ContactUs page tests", () => {
  it("Smoke - Contact Us page", () => {
    homePage
      .visit()
      .checkPageUrl()
      .checkContentVisibility()
      .clickAndCheckContactUsLink();

    contactUsPage.checkContentVisibility().checkHeader().checkFooter();
  });
});
