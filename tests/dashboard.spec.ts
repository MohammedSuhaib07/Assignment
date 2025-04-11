import { test, expect } from '../utils/testBase';
import loginData from '../data/loginData.json';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
});
test.describe('Validate Purchases', () => {
    test('Valid Purchases(Trading)', async ({ page, loginPage, purchasePage }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await purchasePage.navigateToPurchasesTrading();
    });

    test('Valid Purchases(Recycling)', async ({ page, loginPage, purchasePage }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await purchasePage.navigateToPurchasesRecycling();
    });

    test('Valid Contracts & Services', async ({ page, loginPage, purchasePage }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await purchasePage.navigateToContractsServices();
    });

    test('Valid Offers', async ({ page, loginPage, purchasePage }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await purchasePage.navigateToOffers();
    });

    test('Valid Sourcing Hub', async ({ page, loginPage, purchasePage }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await purchasePage.navigateToSourcingHub();
    });

    test('Valid Purchases Goals', async ({ page, loginPage, purchasePage }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await purchasePage.navigateToPurchasesGoals();
    });
});


test.describe('Validate Suppliers & Customers', () => {
    test('Valid Suppliers site', async ({ page, loginPage, suppliers_Customers }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await suppliers_Customers.navigateToSuppliersCategory();
    });

    test('Valid Customers site', async ({ page, loginPage, suppliers_Customers }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await suppliers_Customers.navigateToCustomersCategory();
    });

    test('Valid Contacts site', async ({ page, loginPage, suppliers_Customers }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await suppliers_Customers.navigateToContactsCategory();
    });
});


// Sales
test.describe('Validate Sales', () => {
    test('Valid Sales section', async ({ page, loginPage, sales }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await sales.navigateToSales();
    });
});

// Inventory
test.describe('Validate Inventory', () => {
    test('Valid Inbound Loads section', async ({ page, loginPage, inventory }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await inventory.navigateToInboundLoads();
    });

    test('Valid Stocks section', async ({ page, loginPage, inventory }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await inventory.navigateToStocks();
    });

    test('Valid Outbound Loads section', async ({ page, loginPage, inventory }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await inventory.navigateToOutboundLoads();
    });
});

// Risk Management
test.describe('Validate Risk Management', () => {
    test('Valid Hedging contracts', async ({ page, loginPage, riskManagement }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await riskManagement.navigateToHedgingContracts();
    });
    
    test('Valid Position report', async ({ page, loginPage, riskManagement }) => {
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await riskManagement.navigateToPositionReport();
    });
});