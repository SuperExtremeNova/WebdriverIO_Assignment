
const Page = require('./page');
const path = ('');

class ProductPage extends Page {

    get itemSize() {
        return $('#option-label-size-143-item-166');
    }
    get itemColor() {
        return $('#option-label-color-93-item-57');
    }
    get quantity() {
        return $('#qty');
    }
    get cartButton() {
        return $('#product-addtocart-button');
    }
    get primaryCartButton() {
        return $('action.tocart.primary');
    }
    get requiredError() {
        return $('//*[contains(text(),"required field")]');
    }
    get qtyError() {
        return $('#qty-error');
    }
    get itemsOnMainPage() {
        return $$('ol.product-items>li');
    }
    get successMsg() {
        return $(`//*[contains(text(),"You added")]`)
    }
    // //a[contains(text(),"Breathe-Easy")]

    get cartQty() {
        return $('.counter-number');
    }
    get smallCartButton() {
        return $('a.action.showcart');
    }
    get selectedSize() {
        return $('.swatch-option.selected');
    }
    get selectedColor() {
        return $('.swatch-option.color.selected');
    }
    get checkOutButton() {
        return $('button#top-cart-btn-checkout');
    }
    open () {
        return browser.url('https://magento.softwaretestingboard.com/')
    }
}

module.exports = new ProductPage();