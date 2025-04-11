import { test, expect } from '../utils/testBase';
import loginData from '../data/loginData.json';

test.describe('Login and Logout Flow', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('Valid Login and Logout', async ({ page, loginPage, purchasePage }) => {
    await loginPage.loggedIn();
    await expect(page).toHaveURL('https://demo.haroldwaste.com/purchases');

    await purchasePage.logout();
    await expect(page).toHaveURL('https://demo.haroldwaste.com/authentication');
  });
});