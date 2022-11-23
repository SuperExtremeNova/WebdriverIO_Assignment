const SignupPage = require('../pageobjects/page.signup');
const AccountPage = require('../pageobjects/page.account');

describe('My account creation application', () => {

    

    it.skip('should be able to create an account with all the information.', async () => {
        await SignupPage.open();
        
        await SignupPage.signUp('Derrick','Jackson','artcrazyderrick@gmail.com','Dracula@009','Dracula@009');
        await expect(AccountPage.registerAlert).toBeExisting();
    });

    it('should fail create account with the wrong password confirmation', async () => {
        await SignupPage.open();
      
        await SignupPage.signUp('donio','kazuna','donkazuna@gmail.com','donnie2@','dannie1@');
        await expect(SignupPage.pwrdConformationError).toBeExisting();
    });

    it('should preven duplicate account creation', async () => {
        await SignupPage.open();

        await SignupPage.signUp('Derrick','Jackson','artcrazyderrick@gmail.com','Dracula@009','Dracula@009');
        await expect(SignupPage.duplicationError).toBeExisting();
    });

    it('news leter subscription checkbox should be clickable', async () => {
        await SignupPage.open();

        await expect(SignupPage.newsletterSelection).toBeExisting();
        await expect(SignupPage.newsletterSelection).toBeClickable();
        await SignupPage.newsletterSelection.click();
        await expect(SignupPage.newsletterSelection).toBeSelected();
    });

    it('should provide the error \"This is a required field\" and prevent account creation', async () => {
        await SignupPage.open();
        //await SignupPage.signUp();
        await SignupPage.signUp('donio','kazuna','donkazuna@gmail.com','donnie2@','dannie1@');

        formValidate = $('#form-validate');
        emptyCount = 0;

        for(check = 0; check < formValidate.childElementCount(); check++) {
            inputDiv = SignupPage.fieldSet(check)

            for(select=0; select < inputDiv.childElementCount(); select++) {
                entryValue = inputDiv[select].$('div+input');

                if(entryValue === "") {
                    emptyCount += 1;
                }
            }
            
        }

        if(emptyCount === 0) {
            await expect($('.mage-error')).toBeExisting();
        }else {
            await expect($('.mage-error')).not.toBeExisting();
        }
    });

});