import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Inventory Page test', () => {
    beforeEach(async() => {
        await LoginPage.open();
        await LoginPage.setUserCookie();
        await InventoryPage.open();
    });
    
    it('should verify if badge 1 is added to shopping basket after clicking Add to card', async() => {
        await InventoryPage.clickAddToCartButton();
        const shoppingBadge = InventoryPage.shoppingCartBadge;
        await expect(shoppingBadge).toHaveText('1');
    });

    it('should verify if the "Add to Cart" button has changed to "Remove" after clicking it', async() => {
        await InventoryPage.clickAddToCartButton();
        await InventoryPage.addToCartBackpackButton.waitForDisplayed({reverse: true});
        const removeButtonText = await InventoryPage.removeBackpackButton;
        await expect(removeButtonText).toHaveText('Remove');
    });
});