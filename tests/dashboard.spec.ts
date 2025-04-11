import { test, expect } from '../utils/testBase';
import loginData from '../data/loginData.json';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.loggedIn();
});
test.describe('Validate Purchases', () => {
    test('Valid Purchases(Trading)', async ({ purchasePage }) => {
        
        await purchasePage.navigateToPurchasesTrading();
    });

    test('Valid Purchases(Recycling)', async ({ purchasePage }) => {
        
        await purchasePage.navigateToPurchasesRecycling();
    });

    test('Valid Contracts & Services', async ({ purchasePage }) => {
        
        await purchasePage.navigateToContractsServices();
    });

    test('Valid Offers', async ({ purchasePage }) => {
        
        await purchasePage.navigateToOffers();
    });

    test('Valid Sourcing Hub', async ({ purchasePage }) => {
        
        await purchasePage.navigateToSourcingHub();
    });

    test('Valid Purchases Goals', async ({ purchasePage }) => {
        
        await purchasePage.navigateToPurchasesGoals();
    });
});


test.describe('Validate Suppliers & Customers', () => {
    test('Valid Suppliers site', async ({ suppliers_Customers }) => {
        
        await suppliers_Customers.navigateToSuppliersCategory();
    });

    test('Valid Customers site', async ({ suppliers_Customers }) => {
        
        await suppliers_Customers.navigateToCustomersCategory();
    });

    test('Valid Contacts site', async ({ suppliers_Customers }) => {
        
        await suppliers_Customers.navigateToContactsCategory();
    });
});


// Sales
test.describe('Validate Sales', () => {
    test('Valid Sales section', async ({ sales }) => {
        
        await sales.navigateToSales();
    });
});

// Inventory
test.describe('Validate Inventory', () => {
    test('Valid Inbound Loads section', async ({ inventory }) => {
        
        await inventory.navigateToInboundLoads();
    });

    test('Valid Stocks section', async ({ inventory }) => {
        
        await inventory.navigateToStocks();
    });

    test('Valid Outbound Loads section', async ({ inventory }) => {
        
        await inventory.navigateToOutboundLoads();
    });
});

// Risk Management
test.describe('Validate Risk Management', () => {
    test('Valid Hedging contracts', async ({ riskManagement }) => {
        
        await riskManagement.navigateToHedgingContracts();
    });
    
    test('Valid Position report', async ({ riskManagement }) => {
        
        await riskManagement.navigateToPositionReport();
    });
});