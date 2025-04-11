import { expect, Page, Locator } from '@playwright/test';

export class Suppliers_Customers {
  readonly page: Page;
  readonly suppliersCategory: Locator;
  readonly suppliersSites: Locator;
  readonly customersSite: Locator;
  readonly contacts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.suppliersCategory = page.locator('.sc-ftvSup').first();
    this.suppliersSites = page.getByRole('link', { name: 'Suppliers & Sites' });
    this.customersSite = page.getByRole('link', { name: 'Customers & Sites' });
    this.contacts = page.getByRole('link', { name: 'Contacts' });

  }

  async navigateToSuppliersCategory(): Promise<Suppliers_Customers> {
    await this.suppliersCategory.hover();
    await this.suppliersSites.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/supplier-board');
    return this;
  };

  async navigateToCustomersCategory(): Promise<Suppliers_Customers> {
    await this.suppliersCategory.hover();
    await this.customersSite.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/customer-board');
    return this;
  };

  async navigateToContactsCategory(): Promise<Suppliers_Customers> {
    await this.suppliersCategory.hover();
    await this.contacts.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/contacts');
    return this;
  }

}