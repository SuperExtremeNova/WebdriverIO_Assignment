
const ProductPage = require('../pageobjects/page.product');
const AccountPage = require('../pageobjects/page.account');


describe ('Adding item to the cart option', () => {

    it('adding item from the main page with all options selected', async () => {
        await ProductPage.open();
        desiredProduct = await ProductPage.itemsOnMainPage[0];

        size = await desiredProduct.$(`[option-id="166"]`);
        color = await desiredProduct.$(`[option-id="50"]`);
        cartBtn = await desiredProduct.$('.action.tocart.primary');

        await expect(size).toExist();
        await size.click();
        await expect(color).toExist();
        await color.click()
        await expect(cartBtn).toExist();
        await cartBtn.click();
        await expect(ProductPage.successMsg).toBeExisting();;
        
    });

    it('adding item from the product page with all option selected', async() => {
        await ProductPage.open();

        selectedProduct = await ProductPage.itemsOnMainPage[1];
        
        await expect(selectedProduct).toBeClickable();
        await selectedProduct.click();
        
        size = await ProductPage.itemSize;
        color = await ProductPage.itemColor;
        cartBtn = await ProductPage.cartButton;
        currentQTY = await +ProductPage.cartQty.getText();


        await expect(size).toExist();
        await size.click();
        await expect(color).toExist();
        await color.click()
        await expect(cartBtn).toExist();
        await cartBtn.click();
        await expect(ProductPage.successMsg).toBeExisting();

    });

    it('add to cart should fail if all the options are not selected', async() => {
        await ProductPage.open();
        cartBtn = await ProductPage.cartButton;
        itemQty = await ProductPage.quantity;

        selectedProduct = await ProductPage.itemsOnMainPage[2];
        await expect(selectedProduct).toExist();
        await expect(selectedProduct).toBeClickable();
        
        await selectedProduct.click();
        await cartBtn.click();
        await ProductPage.quantity.setValue(0);

        await expect(ProductPage.requiredError).toBeExisting();
        if(itemQty.getValue === 0) {
            await expect(ProductPage.qtyError).toBeExisting();
        }

    });
});