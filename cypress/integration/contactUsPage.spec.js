import { ContactUsPage } from '../pom/contactUsPage';
import { Footer } from '../pom/footer';
import { Header } from '../pom/header';
import { HomePage } from '../pom/HomePage';

const homePage = new HomePage();
const contactUsPage = new ContactUsPage();
const header = new Header();
const footer = new Footer();

describe('ContactUs Page tests', () => {
  it('Smoke - Contact Us page', () => {
    homePage.visit().checkPageUrl().checkContentVisibility();

    header.checkContactUsLink().clickContactUsLink();

    contactUsPage.checkPageUrl().checkContentVisibility();

    header.checkContentExisting().checkContentVisibility();

    footer.checkContentExisting().checkContentVisibility();
  });
});
