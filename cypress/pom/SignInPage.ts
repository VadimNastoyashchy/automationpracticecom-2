import { BasePage } from "./base/BasePage";

export class SignInPage extends BasePage {
    constructor() {
        super('#authentication', 'SignIn', 'index.php?controller=authentication&back=my-account')
    }
}