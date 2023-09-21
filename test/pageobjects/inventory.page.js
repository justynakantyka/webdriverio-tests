import { $ } from '@wdio/globals';
import Page from './page';


class InventoryPage extends Page {

    get menu() {
        return $('.bm-menu');
    }
    get menuButton() {
        return $('#menu_button_container .bm-burger-button');
    }

    get closeButton() {
        return $('#react-burger-cross-btn');
    }

    async openMenuButton() {
        await this.menuButton.click();
    }

    async getMenuItem(item) {
        return $('.bm-menu').$(`.menu-item=${item}`);
    }

    async clickMenuItem(menuItem) {
        await $(menuItem).waitForClickable();
        await $(menuItem).click();
    }

    async clickCloseButton(){
        await this.closeButton.waitForClickable();
        await this.closeButton.click();
    }

    open () {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();
