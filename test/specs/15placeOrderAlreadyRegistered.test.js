const mainPage = require("../pages/mainPage.page");
import userData from "../../testData/userData";
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
describe("Place Order", () => {
    it("TC 17 : Place Order: Register before Checkout", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();

        await registerPage.createAccount();
        await mainPage.verifyCurrentUrl('/account_created');
        await $('h2>b').waitForDisplayed();
        await mainPage.continueButton.click();
        await expect(mainPage.loggedInAs).toBeDisplayed();

        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await mainPage.cart.waitForDisplayed();
        await mainPage.cart.click();
        await mainPage.verifyCurrentUrl('/view_cart');
        await cartPage.checkOutButton.click();         //propceed to checkout

        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();
        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await mainPage.verifyTextOnElement(cartPage.label, 'Congratulations!');
        await mainPage.deleteAccount.click();
    })
})