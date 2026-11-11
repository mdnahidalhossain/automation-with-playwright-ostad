import { expect } from "@playwright/test";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.userPassword = page.locator('#password')
        this.loginButton = page.locator('#login-button')

        this.errorMessage = page.locator("//div[@class='error-message-container error']")
    }

    async enterUserName(userName) {
        await this.userName.fill(userName);
    }

    async enterPassword(password) {
      await this.userPassword.fill(password);
    }

    async loginButtonOnClick() {
      await this.loginButton.click();
    }

    async getErrorMessage() {
      await expect(this.errorMessage).toBeVisible();
      return await this.errorMessage.innerText();
    }
}

export default LoginPage