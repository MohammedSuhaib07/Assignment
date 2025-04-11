import { expect, Page, Locator } from '@playwright/test';

export class RiskManagement {
    readonly page: Page;
    readonly riskManagement: Locator;
    readonly hedgingContracts: Locator;
    readonly positionReport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.riskManagement = page.locator('div:nth-child(6) > .sc-ftvSup');
        this.hedgingContracts = page.getByRole('link', { name: 'Hedging contracts' });
        this.positionReport = page.getByRole('link', { name: 'Position report' });
    }
    async navigateToHedgingContracts(): Promise<RiskManagement> {
        await this.riskManagement.hover();
        await this.hedgingContracts.click();
        await expect(this.page).toHaveURL('https://demo.haroldwaste.com/hedging-contracts');
        return this;
    }
    async navigateToPositionReport(): Promise<RiskManagement> {
        await this.riskManagement.hover();
        await this.positionReport.click();
        await expect(this.page).toHaveURL('https://demo.haroldwaste.com/position-report');
        return this;
    }

}