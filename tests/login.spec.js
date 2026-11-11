import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import Base from '../pages/Base';
import { userLoginData } from '../data/userLoginData';

for (let i = 0; i < userLoginData.length; i++) {
  const user = userLoginData[i];

  test(`user login successful ${i+1}`, async ({page}) => {
    const basePage = new Base(page);
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // open application
    await basePage.pageOpen();
    await page.pause();

    // enter user credentials
    await loginPage.enterUserName(user.username);
    await loginPage.enterPassword(user.password);
    await loginPage.loginButtonOnClick();

    // // verify login success
    // await inventoryPage.verifyLoginSuccess();
    // await page.pause();

    // // user logout
    // await inventoryPage.userLogout()
    // await page.pause();

    // Verify expected outcome
    if (user.expected === 'success') {

      expect(await inventoryPage.isLoaded()).toBe(true);
      // await inventoryPage.userLogout();

    } else if (user.expected === 'error') {

      const errorMessage = await loginPage.getErrorMessage();

      expect(errorMessage).toBeTruthy();
      expect(errorMessage.length).toBeGreaterThan(0);

    }
  }) 
}


