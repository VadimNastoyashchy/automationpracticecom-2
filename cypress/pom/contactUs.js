import { BasePage } from "./base/BasePage";

export class ContactUs extends BasePage {
  constructor() {
    super("#contact", "ContactUs", "index.php?controller=contact");
  }
}
