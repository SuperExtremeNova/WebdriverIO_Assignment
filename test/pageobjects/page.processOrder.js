
const Page = require('./page');
const path = ('');

class ProcessOrder extends Page {

    get pageHeader() {
        return $('div.step-title');
    }
    get emailInput() {
        return $('div.control._with-tooltip>#customer-email[name="username"]');
    }
    get passwordInput() {
        return $('input#customer-password')
    }
    get login() {
        return $('button.action.login.primary').click();
    }
    get fnInput() {
        return $('input[name="firstname"]');
    }
    get lnInput() {
        return $('input[name="lastname"]');
    }
    get companyInput() {
        return $('input[name="company"]');
    }
    get streetInput() {
        return $('input[name="street[0]"]');
    }
    get cityInput() {
        return $('input[name="city"]');
    }
    get stateInput() {
        return $('#shipping-new-address-form > div:nth-child(6) > div > select');
    }
    get zipInput() {
        return $('input[name="postcode"]');
    }
    get countryInput() {
        return $('input[name="country_id"]');
    }
    get phNumberInput() {
        return $('input[name="telephone"]');
    }
    get nextButton() {
        return $('button.button.action.continue.primary');
    }
    get passwordFieldset() {
        return $('.fieldset.hidden-fields');
    }
    shippingOption(choice) {
        return $(`tbody>tr:nth-child(${choice})`);
    }
}

module.exports = new ProcessOrder()