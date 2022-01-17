import { BasePage } from './base/BasePage';

export class ContactUsPage extends BasePage {
  constructor() {
    super('#contact', 'ContactUsPage', 'index.php?controller=contact');
  }
}
