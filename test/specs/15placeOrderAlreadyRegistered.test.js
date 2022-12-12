const mainPage = require("../pages/mainPage.page");
import userData from "../../testData/userData";
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");
describe("TC 15 :Place Order", () => {

    it("1 Place Order: Register before Checkout", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();

        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();

        await $('div>h2>b').waitForDisplayed();
        await expect(await $('div>h2>b')).toBeDisplayed();
        await registerPage.createAccount();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/account_created');
        await $('h2>b').waitForDisplayed();
        await mainPage.continueButton.click();
        await expect(mainPage.loggedInAs).toBeDisplayed();

        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();

        await mainPage.cart.waitForDisplayed();
        await mainPage.cart.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/view_cart');
        await cartPage.checkOutButton.click();         //propceed to checkout

        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();

        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await expect(cartPage.label).toHaveTextContaining('Congratulations!')

        await mainPage.deleteAccount.click();
        await $('h2>b').waitForDisplayed();
        await $('h2>b').isDisplayed();
    })

})