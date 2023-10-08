import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Login Page test', () => {
    const VALID_USERNAME = 'standard_user';
    const VALID_PASSWORD = 'secret_sauce';

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(VALID_USERNAME, VALID_PASSWORD);
        await expect(browser).toHaveUrl(`${baseUrl}/inventory.html`);
    });

    it('should display error for blocked user', async () => {
        const BLOCKED_USERNAME = 'locked_out_user';
        const BLOCKED_PASSWORD = 'secret_sauce';
        await LoginPage.open();

        await LoginPage.login(BLOCKED_USERNAME, BLOCKED_PASSWORD);
        const errorMessage = LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('should display error for wrong username', async () => {
        const WRONG_USERNAME = 'wrong_username';
        await LoginPage.open();

        await LoginPage.login(WRONG_USERNAME, VALID_PASSWORD);
        const errorMessage = LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display error for wrong password', async () => {
        const WRONG_PASSWORD = 'wrong_password';
        await LoginPage.open();

        await LoginPage.login(VALID_USERNAME, WRONG_PASSWORD);
        const errorMessage = LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display error when user tries to access inventory page without logging in', async () => {
        await InventoryPage.open();

        const errorMessage = LoginPage.error;
        await expect(errorMessage).toHaveText(`Epic sadface: You can only access '/inventory.html' when you are logged in.`);
    });
})
