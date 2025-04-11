import { chromium } from '@playwright/test';
import loginData from './data/loginData.json';
import { LoginPage } from './pagesRepository/LoginPage'; 

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(loginData.validUser.email, loginData.validUser.password);
  await page.waitForURL('https://demo.haroldwaste.com/purchases');
  // Save the authentication state
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;