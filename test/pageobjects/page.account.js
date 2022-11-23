
const Page = require('./page');


class AccountPage extends Page {

    get signInButton() {
        return $('div.panel.header>ul>li.authorization-link>a');
    }

    get registerAlert() {
        return $(`//*[contains(text(),'registering')]`);
    }
    get emailInput() {
        return $('input[name="login[username]"]');
    }
    get passwordInput() {
        return $('input[name="login[password]"]');
    }
    get submit() {
        return $('button.action.login[name="send"]');
    }

    async login(email,password) {
        await expect(this.signInButton).toBeExisting();
        await this.signInButton.click();

        await expect(this.emailInput).toBeExisting();
        await this.emailInput.setValue(email);
        await expect(this.passwordInput).toBeExisting();
        await this.passwordInput.setValue(password);

        await this.submit.click();
    }
}

module.exports = new AccountPage();