import { HomePage } from "../pom/HomePage";
import { SignInPage } from "../pom/SignInPage";
import { Header } from "../pom/Header";
import { Footer } from "../pom/Footer";

const homePage = new HomePage();
const signInPage = new SignInPage();
const header = new Header();
const footer = new Footer();


describe('SignIn Page tests', () => {
    it('Smoke - Sign in page ', () => {
        homePage
            .visit()
            .checkPageUrl()
            .checkContentVisibility();

        header
            .checkSignInLink()
            .clickSignInLink();

        signInPage
            .checkPageUrl()
            .checkContentVisibility();

        header
            .checkContentExisting()
            .checkContentVisibility();

        footer
            .checkContentExisting()
            .checkContentVisibility();
    })
})



