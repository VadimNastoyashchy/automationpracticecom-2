import { Header } from "../pom/Header";
import { HomePage } from "../pom/HomePage";

const header = new Header();
const homePage = new HomePage();


describe('Heder test', () => {
    it('Smoke Heder page', () => {
         homePage
            .visit()
            .checkPageUrl()
            .checkContentExisting()
            .checkContentVisibility()
        header
            .checkContentExisting()
            .checkContentVisibility()
            .checkSaleBanner()
            .checkShopPhone()
            .checkContactUsLink()
            .clickContactUsLink()
            .checkSignInLink()
            .clickSignInLink()

        header
            .checkHeaderLogo()
            .checkSearchField()
            .checkCartSection()
            .checkMenuSection()
    })
})