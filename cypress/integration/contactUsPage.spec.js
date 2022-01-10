import { ContactUs } from "../pom/contactUs";
import { Header } from "../pom/header";
import { HomePage } from "../pom/HomePage";

const homePage = new HomePage();
const contactUsPage = new ContactUs();
const header = new Header();

describe('ContactUs page tests', () => {
  it('Smoke - Contact Us page', () => {
    homePage
      .visit()
      .checkPageUrl()
      .checkContentVisibility();

    header
      .checkContactUsLink()
      .clickContactUsLink()

    contactUsPage
      .checkPageUrl()
      .checkContentVisibility();
  });
});
