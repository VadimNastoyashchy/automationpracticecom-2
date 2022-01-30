import { Header } from '../pom/Header';
import { Footer } from '../pom/Footer';
import { HomePage } from '../pom/HomePage';

const homePage = new HomePage();
const header = new Header();
const footer = new Footer();

describe('Home Page tests', () => {
  it('Smoke Home Page', () => {
    homePage
      .visit()
      .checkPageUrl()
      .checkContentVisibility();

    header
      .checkContentVisibility()
      .checkContentExisting();

  
    footer
      .checkContentVisibility()
      .checkContentExisting();
  });
});