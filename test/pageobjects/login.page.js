import { $ } from '@wdio/globals';
import Page from './page';


class LoginPage extends Page {
    get inputUsername () {
        return $('[data-test="username"]');
    }

    get inputPassword () {
        return $('[data-test="password"]');
    }

    get btnSubmit () {
        return $('[data-test="login-button"]');
    }

    get error () {
        return $('[data-test="error"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async setUserCookie() {
        await super.setUserCookie();
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
