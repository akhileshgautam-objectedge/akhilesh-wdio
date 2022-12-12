import userData from "../testData/userData";
const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");
describe("TC 16 : Place Order", () => {

    it("1 Place Order: Login before Checkout", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();                       //Click on SignUp/Login button
        await expect(loginPage.loginLabel).toBeDisplayed(); // 'Login to your account' is visible

        await loginPage.enterUsername(userData.EMAIL);
        await loginPage.enterPassword(userData.PASSWORD);
        await loginPage.clickLogin();
        await expect(mainPage.loggedInAs).toBeDisplayed();   //'Logged in as username' is visible

        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();

        await mainPage.cart.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/view_cart');
        await cartPage.checkOutButton.click();      //proceed to checkout

        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();

        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await expect(cartPage.label).toHaveTextContaining('Congratulations! Your order has been confirmed!')

        await mainPage.deleteAccount.click();
        await $('h2>b').waitForDisplayed();
        await $('h2>b').isDisplayed();
        await mainPage.continueButton.click();
    })

})