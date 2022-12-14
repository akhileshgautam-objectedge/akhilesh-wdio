import userData from "../testData/userData";
const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
describe("Place Order", () => {
    it("TC 16 : Place Order: Register while Checkout", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await mainPage.cart.click();
        await mainPage.verifyCurrentUrl('/view_cart');
        await cartPage.checkOutButton.click();

        await mainPage.loginContinue.waitForDisplayed();
        await mainPage.loginContinue.click();
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();

        await $('div>h2>b').waitForDisplayed();             //'ENTER ACCOUNT INFORMATION' is visible
        await expect(await $('div>h2>b')).toBeDisplayed();
        await registerPage.createAccount();
        await mainPage.verifyCurrentUrl('/account_created');

        await $('h2>b').waitForDisplayed();                 //'ACCOUNT CREATED!' is visible
        await mainPage.continueButton.click();              //click continue
        await expect(mainPage.loggedInAs).toBeDisplayed();  //'Logged in as username' is visible
        await mainPage.cart.click();
        await cartPage.checkOutButton.click();

        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();
        await cartPage.fillPaymentDetails(userData.NAME, userData.CARDNUM, userData.CVC, '01', '2026');
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await expect(cartPage.label).toHaveTextContaining('Congratulations!')
        await mainPage.deleteAcc();
        await mainPage.continueButton.click();
    })
})