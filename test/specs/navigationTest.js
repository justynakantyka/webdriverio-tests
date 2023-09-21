import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import NavigationMenu from '../pageobjects/navigationMenu.page';
import * as menuItems from '../enums/menuItems';

describe('Navigation Menu test', () => {
    beforeEach(async() => {
        await LoginPage.open();
        await LoginPage.setUserCookie();
        await InventoryPage.open();
    });
    
    it('should verify if specific items are displayed in navigation menu', async() => {
        const expectedItems = [
            menuItems.ALL_ITEMS,
            menuItems.ABOUT,
            menuItems.LOGOUT,
            menuItems.RESET_APP_STATE
        ];
        await InventoryPage.openMenuButton();
        for(const expectedItem of expectedItems){
            const item = await NavigationMenu.getMenuItem(expectedItem);
            await expect(item).toBeDisplayed();
        }
    });

    it('should verify redirection to page inventory after clicking All Items', async() => {
        await InventoryPage.openMenuButton();
        await NavigationMenu.clickMenuItem('#inventory_sidebar_link');
        await expect(browser).toHaveUrl(`${baseUrl}/inventory.html`);
    });

    it('should verify redirection to page saucelabs.com after clicking About', async() => {
        await InventoryPage.openMenuButton();
        await NavigationMenu.clickMenuItem('#about_sidebar_link');
        await expect(browser).toHaveUrl('https://saucelabs.com/');
    });

    it('should verify redirection to login page after clicking Logout', async() => {
        await InventoryPage.openMenuButton();
        await NavigationMenu.clickMenuItem('#logout_sidebar_link');
        await expect(browser).toHaveUrl(`${baseUrl}/`);
    });

    it('should verify if menu is closed after clicking X', async() => {
        await InventoryPage.openMenuButton();
        await NavigationMenu.clickCloseButton('#logout_sidebar_link');
        await NavigationMenu.menu.waitForDisplayed({reverse: true});
        await expect(NavigationMenu.menu).not.toBeDisplayed();
    });
});