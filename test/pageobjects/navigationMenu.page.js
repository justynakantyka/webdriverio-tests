import { $ } from '@wdio/globals';
import Page from './page';


class NavigationMenuPage extends Page {

    get menu() {
        return $('.bm-menu');
    }

    get menuButton() {
        return $('#menu_button_container .bm-burger-button');
    }

    get allItemsLink() {
        return $('#inventory_sidebar_link');
    }

    get aboutLink() {
        return $('#about_sidebar_link');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get closeButton() {
        return $('#react-burger-cross-btn');
    }

    async getMenuItem(item) {
        return $('.bm-menu').$(`.menu-item=${item}`);
    }

    async clickMenuItem(menuItem) {
        await menuItem.waitForClickable();
        await menuItem.click();
    }

    async clickCloseButton(){
        await this.closeButton.waitForClickable();
        await this.closeButton.click();
    }
}

module.exports = new NavigationMenuPage();
