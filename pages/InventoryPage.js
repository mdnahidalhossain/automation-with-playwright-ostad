import { expect } from "@playwright/test";

class InventoryPage {
    constructor(page) {
        this.page = page;
        // this.logoutButton = page.locator("#logout_sidebar_link")
        this.pageTitle = page.locator("//div[@class='app_logo']");
        this.inventoryList = page.locator("//div[@class='inventory_list']");
    }

    async isLoaded() {
        await this.inventoryList.isVisible();
        return true;
    }

    // async verifyLoginSuccess() {
    //     await expect(this.page).toHaveURL(process.env.INVENTORY_PAGE_URL);
    //     await expect(this.logoutButton).toBeVisible('Logout');
    //     await expect(this.pageTitle).toHaveText('Swag Labs');
    //     await expect(this.inventoryList).toBeVisible();
    // }

    // async userLogout() {
    //     await this.logoutButton.click();
    // }
}

export default InventoryPage