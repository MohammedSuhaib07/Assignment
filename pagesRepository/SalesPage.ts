import { expect, Page, Locator } from '@playwright/test';

export class Sales {
  readonly page: Page;
  readonly salesCategory: Locator;
  readonly sales: Locator;

  constructor(page: Page) {
    this.page = page;
    this.salesCategory = page.locator('div:nth-child(4) > .sc-ftvSup');
    this.sales = page.getByRole('link', { name: 'Sales' });
  }

  async navigateToSales(): Promise<Sales> {
    await this.salesCategory.hover();
    await this.sales.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/sales');
    return this;
  }
}