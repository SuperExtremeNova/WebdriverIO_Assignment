
const Page = require('./page');
const path = 'customer/account/create/'

class SignupPage extends Page {

    get formTitle () {
        return $('h1.page-title');
    }

    get firstName () {
        return $('#firstname');
    }

    get lastName () {
        return $('#lastname');
    }

    get newsletterSelection () {
        return $('#is_subscribed');
    }

    get email () {
        return $('#email_address');
    } 

    get password () {
        return $('input#password');
    }

    get pwrdConfirmation () {
        return $('input#password-confirmation');
    }

    get pwrdConformationError () {
        return $('#password-confirmation-error');
    }

    get duplicationError () {
        return $(`//*[contains(text(),'already an account with this email address')]`)
    }
    
    get creatAccount () {
        return $('.action.submit.primary');
    }

    fieldSet(field) {
        inputForm = $$('.field.create')[field];

        return inputForm.$$('div.require');
    }

    async signUp (firstName, lastName, email, password, pwrdConfirmation) {
        
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.pwrdConfirmation.setValue(pwrdConfirmation);
        await this.creatAccount.click();
    }

    open() {
        return super.open(path);
    }

}

module.exports = new SignupPage();