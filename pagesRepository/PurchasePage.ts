import { expect, Page, Locator } from '@playwright/test';

export class PurchasePage {
  readonly page: Page;
  readonly headerMenuButton: Locator;
  readonly logoutButton: Locator;
  readonly purchaseCategory: Locator;
  readonly purchaseTrading: Locator;
  readonly purchaseRecycling: Locator;
  readonly contracts_Services: Locator;
  readonly offers: Locator;
  readonly offerScreen: Locator;
  readonly SourcingHub: Locator;
  readonly sourcingScreen: Locator;
  readonly PurchasesGoals: Locator;
  readonly purchaseGoalsScreen: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerMenuButton = page.locator('[data-test-id="header-menu"]').getByRole('button');
    this.logoutButton = page.locator('[data-test-id="header-logout"]');
    this.purchaseCategory = page.locator('div:nth-child(3) > .sc-ftvSup');
    this.purchaseTrading = page.locator('div').filter({ hasText: 'DemoPurchase' }).nth(1);
    this.purchaseRecycling = page.getByRole('link', { name: 'Purchases (Recycling)' });
    this.contracts_Services = page.getByRole('link', { name: 'Contracts & Services' });
    this.offers = page.getByRole('link', { name: 'Offers' });
    this.offerScreen = page.locator('div').filter({ hasText: 'DemoOffers ⌘ +' }).nth(1);
    this.SourcingHub = page.getByRole('link', { name: 'Sourcing hub' });
    this.sourcingScreen = page.locator('div').filter({ hasText: 'DemoSourcing hub ⌘ +' }).nth(1);
    this.PurchasesGoals = page.getByRole('link', { name: 'Purchase goals' });
    this.purchaseGoalsScreen = page.locator('div').filter({ hasText: 'DemoPurchase goals & Target' }).nth(1);
  }

  async logout() {
    await this.headerMenuButton.click();
    await this.logoutButton.click();
  }
  async navigateToPurchasesTrading(): Promise<PurchasePage> {
    await expect(this.purchaseTrading).toBeVisible();
    await expect(this.purchaseTrading).toContainText('DemoPurchase');
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/purchases');
    return this;
  }
  async navigateToPurchasesRecycling(): Promise<PurchasePage> {
    await this.purchaseCategory.hover();
    await this.purchaseRecycling.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/purchases/recycling');
    return this;
  }
  async navigateToContractsServices(): Promise<PurchasePage> {
    await this.purchaseCategory.hover();
    await this.contracts_Services.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/wm-buy-recurring');
    return this;
  }
  async navigateToOffers(): Promise<PurchasePage> {
    await this.purchaseCategory.hover();
    await this.offers.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/offers');
    return this;
  }
  async navigateToSourcingHub(): Promise<PurchasePage> {
    await this.purchaseCategory.hover();
    await this.SourcingHub.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/sourcing-hub');
    return this;
  }
  async navigateToPurchasesGoals(): Promise<PurchasePage> {
    await this.purchaseCategory.hover();
    await this.PurchasesGoals.click();
    await expect(this.page).toHaveURL('https://demo.haroldwaste.com/purchase-goals');
    return this;
  }

}