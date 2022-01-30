import { BasePage } from "./base/BasePage";

export class SignInPage extends BasePage {
    constructor() {
        super('#authentication', 'SignInPage', 'authentication?back=my-account')
    }
}