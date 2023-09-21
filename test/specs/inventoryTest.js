import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import * as menuItems from '../enums/menuItems';

describe('Inventory Page test', () => {
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
            const item = await InventoryPage.getMenuItem(expectedItem);
            await expect(item).toBeDisplayed();
        }
    });
});