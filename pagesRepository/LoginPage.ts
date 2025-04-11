import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-test-id="input-email"]').getByRole('textbox');
    this.passwordInput = page.locator('[data-test-id="input-password"]').getByRole('textbox');
    this.loginButton = page.locator('[data-test-id="signin"]');
  }

  async goto() {
    await this.page.goto('https://demo.haroldwaste.com/');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}