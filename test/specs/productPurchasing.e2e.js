
const userData = require('../data/userData');
const processOrderPage = require('../pageobjects/page.processOrder');
const productPage = require('../pageobjects/page.product');
const accountPage = require('../pageobjects/page.account');

describe.skip('Purchasing products', () => {
    for(const user of userData) {
        it(`should complete order process with ${user.firstname}'s information`, async() => {
            await productPage.open();
            await accountPage.login(user.email,user.password);


            selectedProduct = await productPage.itemsOnMainPage[1];
            await selectedProduct.click();
            currentQTY = await productPage.cartQty.getText();

            size = await productPage.itemSize;
            color = await productPage.itemColor;
            cartBtn = await productPage.cartButton;
            
            await expect(size).toExist();
            await size.click();
            await expect(color).toExist();
            await color.click()
            await expect(cartBtn).toExist();
            await cartBtn.click();
    
            await expect(productPage.successMsg).toBeExisting();
            await expect(productPage.smallCartButton).toBeExisting();
            await productPage.smallCartButton.click();
            await expect(productPage.checkOutButton).toBeExisting();
            await expect(productPage.checkOutButton).toBeClickable();
            await productPage.checkOutButton.click();
            //await expect(processOrderPage.pageHeader).toBeExisting();

            if(user.isCustomer === "yes") {
                await processOrderPage.fnInput.setValue(user.firstname);
                await processOrderPage.lnInput.setValue(user.lastname);
                await processOrderPage.streetInput.setValue(user.street);
                await processOrderPage.cityInput.setValue(user.city);
                await processOrderPage.stateInput.selectByAttribute('value', '3');
                await processOrderPage.zipInput.setValue(user.zip);
                await processOrderPage.phNumberInput.setValue(user.phoneNumber);

                await expect(processOrderPage.shippingOption).toBeExisting();
                await processOrderPage.shippingOption.click();
                await processOrderPage.nextButton.click();

            }
        })
    }
})