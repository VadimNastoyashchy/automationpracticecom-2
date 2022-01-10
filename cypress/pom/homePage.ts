import { BasePage } from "./base/basePage";

export class HomePage extends BasePage {
  constructor() {
    super('#index', 'HomePage', 'index.php');
  }
}
