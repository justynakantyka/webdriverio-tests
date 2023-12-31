import { $ } from '@wdio/globals';
import Page from './page';


class InventoryPage extends Page {

    get menuButton() {
        return $('#menu_button_container .bm-burger-button');
    }

    get addToCartBackpackButton() {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get removeBackpackButton() {
        return $('[data-test="remove-sauce-labs-backpack"]');
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    async openMenuButton() {
        await this.menuButton.click();
    }

    async clickAddToCartButton() {
        const addToCartButton = this.addToCartBackpackButton;
        await addToCartButton.waitForClickable();
        await addToCartButton.click();
    }

    async clickRemoveFromCartButton() {
        const removeFromCartButton = this.removeBackpackButton;
        await removeFromCartButton.waitForClickable();
        await removeFromCartButton.click();
    }

    async cleanCartContent() {
        await super.cleanLocalStorage('cart-contents');
    }

    open () {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();
