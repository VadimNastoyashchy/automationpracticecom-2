import {ContactUsPage} from '../pom/ContactUsPage';
import {Footer} from '../pom/Footer';
import {Header} from '../pom/Header';
import {HomePage} from '../pom/HomePage';

const homePage = new HomePage();
const contactUsPage = new ContactUsPage();
const header = new Header();
const footer = new Footer();

describe('ContactUs Page tests', () => {
    it('Smoke - Contact Us page', () => {
        homePage
            .visit()
            .checkPageUrl()
            .checkContentVisibility();

        header
            .checkContactUsLink()
            .clickContactUsLink();

        contactUsPage
            .checkPageUrl()
            .checkContentVisibility();

        header
            .checkContentExisting()
            .checkContentVisibility();

        footer
            .checkContentExisting()
            .checkContentVisibility();
    });
});
