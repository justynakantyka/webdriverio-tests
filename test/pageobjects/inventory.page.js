import { $ } from '@wdio/globals';
import Page from './page';


class InventoryPage extends Page {

    get menuButton () {
        return $('#menu_button_container .bm-burger-button');
    }

    async openMenuButton() {
        await this.menuButton.click();
    }

    async getMenuItem(item) {
        return $('.bm-menu').$(`.menu-item=${item}`);
    }

    open () {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();
