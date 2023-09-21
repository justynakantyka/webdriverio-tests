import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Login Page test', () => {
    
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(`${baseUrl}/inventory.html`);
    });

    it('should display error for blocked user', async () => {
        await LoginPage.open();

        await LoginPage.login('locked_out_user', 'secret_sauce');
        const errorMessage = await LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('should display error for wrong username', async () => {
        await LoginPage.open();

        await LoginPage.login('wrong_username', 'secret_sauce');
        const errorMessage = await LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display error for wrong password', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'wrong_password');
        const errorMessage = await LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display error when user tries to access inventory page without logging in', async () => {
        await InventoryPage.open();

        const errorMessage = await LoginPage.error;
        await expect(errorMessage).toHaveText('Epic sadface: You can only access "/inventory.html" when you are logged in.');
    });
})
