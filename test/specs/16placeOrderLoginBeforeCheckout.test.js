import userData from "../testData/userData";
const mainPage = require("../pages/mainPage.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
describe("Place Order", () => {
    it("TC 18 : Place Order: Login before Checkout", async () => {
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
        await expect(browser).toHaveUrlContaining('/view_cart');

        await cartPage.checkOutButton.click();      //proceed to checkout
        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();
        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await mainPage.verifyTextOnElement(cartPage.label, 'Congratulations!');
        await mainPage.deleteAccount.click();
        await mainPage.continueButton.click();
    })
})