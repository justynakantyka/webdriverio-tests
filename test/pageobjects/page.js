import { browser } from '@wdio/globals';

module.exports = class Page {
    
    async setUserCookie() {
        await browser.setCookies({
            name: 'session-username',
            value: 'standard_user'
        })
        browser.refresh();
    }

    async cleanLocalStorage() {
        await browser.execute('window.localStorage.clear()');
    }

    open (path) {
        return browser.url(`${baseUrl}/${path}`)
    }
}
