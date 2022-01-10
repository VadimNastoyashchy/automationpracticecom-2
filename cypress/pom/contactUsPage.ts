import { BasePage } from './base/BasePage';

export class ContactUsPage extends BasePage {
  constructor() {
    super('#contact', 'ContactUs', 'index.php?controller=contact');
  }
}