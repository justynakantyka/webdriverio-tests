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
    
    it('should verify if badge 1 is added to shopping basket after clicking Add to card', async() => {
        const addToCardButton = InventoryPage.addToCardBackpackButton;
        await addToCardButton.click();
        const shoppingBadge = InventoryPage.shoppingCartBadge;
        await expect(shoppingBadge).toHaveText('1');
    });
});