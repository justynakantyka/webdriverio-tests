import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Inventory Page test', () => {
    beforeEach(async() => {
        await LoginPage.open();
        await LoginPage.setUserCookie();
        await InventoryPage.open();
    });
    
    it('should verify if badge 1 is added to shopping basket after clicking "Add to cart"', async() => {
        await InventoryPage.clickAddToCartButton();
        const shoppingBadge = InventoryPage.shoppingCartBadge;
        await expect(shoppingBadge).toHaveText('1');
    });

    it('should verify if the "Add to cart" button has changed to "Remove" after clicking it', async() => {
        await InventoryPage.clickAddToCartButton();
        await InventoryPage.addToCartBackpackButton.waitForDisplayed({reverse: true});
        const removeButtonText = await InventoryPage.removeBackpackButton;
        await expect(removeButtonText).toHaveText('Remove');
    });

    it('should verify if badge 1 is removed from shopping basket after clicking "Remove" button', async() => {
        await InventoryPage.clickAddToCartButton();
        await InventoryPage.addToCartBackpackButton.waitForDisplayed({reverse: true});
        await InventoryPage.clickRemoveFromCartButton();
        await InventoryPage.shoppingCartBadge.waitForDisplayed({reverse: true});
        await expect(InventoryPage.shoppingCartBadge).not.toBeDisplayed();
    });

    afterEach(async() => {
        await InventoryPage.cleanCartContent();
    })
});