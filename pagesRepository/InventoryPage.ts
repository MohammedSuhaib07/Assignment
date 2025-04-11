import { expect, Page, Locator } from '@playwright/test';

export class Inventory {
    readonly page: Page;
    readonly inventorCategory: Locator;
    readonly inboundLoads: Locator;
    readonly stocks: Locator;
    readonly outboundLoads: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventorCategory = page.locator('div:nth-child(5) > .sc-ftvSup');
        this.inboundLoads = page.getByRole('link', { name: 'Inbound loads' });
        this.stocks = page.getByRole('link', { name: 'Stocks' });
        this.outboundLoads = page.getByRole('link', { name: 'Outbound loads' });

    }
    async navigateToInboundLoads(): Promise<Inventory> {
        await this.inventorCategory.hover();
        await this.inboundLoads.click();
        await expect(this.page).toHaveURL('https://demo.haroldwaste.com/warehouse_inbounds');
        return this;
    }
    async navigateToStocks(): Promise<Inventory> {
        await this.inventorCategory.hover();
        await this.stocks.click();
        await expect(this.page).toHaveURL('https://demo.haroldwaste.com/warehouse_inventory');
        return this;
    }
    async navigateToOutboundLoads(): Promise<Inventory> {
        await this.inventorCategory.hover();
        await this.outboundLoads.click();
        await expect(this.page).toHaveURL('https://demo.haroldwaste.com/warehouse_outbounds');
        return this;
    }
}