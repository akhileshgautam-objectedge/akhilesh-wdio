const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
import userData from "../../testData/userData";
describe("Download Invoice", () => {
    it("TC 26 : Download Invoice after purchase order", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await mainPage.cart.waitForDisplayed();
        await mainPage.cart.click();
        await expect(browser).toHaveUrlContaining('/view_cart');
        await cartPage.checkOutButton.click();         //propceed to checkout
        await mainPage.loginContinue.waitForDisplayed();
        await mainPage.loginContinue.click();
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();

        await registerPage.createAccount();
        await $('h2>b').waitForDisplayed(); //'ACCOUNT CREATED!' is visible
        await mainPage.continueButton.click(); //click continue
        await expect(mainPage.loggedInAs).toBeDisplayed();//'Logged in as username' is visible
        //Proceed To Checkout
        await mainPage.cart.click();
        await cartPage.checkOutButton.click();
        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();
        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await mainPage.verifyTextOnElement(cartPage.label, 'Congratulations!')
        await mainPage.deleteAccount.click();
    })
})
