import { Header } from '../pom/header';
import { Footer } from '../pom/footer';
import { HomePage } from '../pom/HomePage';

const homePage = new HomePage();
const header = new Header();
const footer = new Footer();

describe('Home Page tests', () => {
  it('Smoke Home Page', () => {
    homePage.visit().checkPageUrl().checkContentVisibility();

    header.checkContentVisibility().checkContentExisting();

    footer.checkContentVisibility().checkContentExisting();
  });
});
