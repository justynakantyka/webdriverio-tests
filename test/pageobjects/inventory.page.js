import { $ } from '@wdio/globals';
import Page from './page';


class InventoryPage extends Page {

    get menuButton() {
        return $('#menu_button_container .bm-burger-button');
    }

    get addToCardBackpackButton() {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    async openMenuButton() {
        await this.menuButton.click();
    }

    open () {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();
