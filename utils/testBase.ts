import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pagesRepository/LoginPage';
import { PurchasePage } from '../pagesRepository/PurchasePage';
import { Suppliers_Customers } from '../pagesRepository/Suppliers_CustomersPage';
import { Sales } from '../pagesRepository/SalesPage';
import { Inventory } from '../pagesRepository/InventoryPage';
import { RiskManagement } from '../pagesRepository/RiskManagementPage';

type Fixtures = {
  loginPage: LoginPage;
  purchasePage: PurchasePage;
  suppliers_Customers: Suppliers_Customers
  sales: Sales;
  inventory: Inventory;
  riskManagement: RiskManagement;

};

export const test = baseTest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  purchasePage: async ({ page }, use) => {
    await use(new PurchasePage(page));
  },
  suppliers_Customers: async ({ page }, use) => {
    await use(new Suppliers_Customers(page));
  },
  sales: async ({ page }, use) => {
    await use(new Sales(page));
  },
  inventory: async ({ page }, use) => {
    await use(new Inventory(page));
  },
  riskManagement: async ({ page }, use) => {
    await use(new RiskManagement(page));
  }
});

export { expect } from '@playwright/test';