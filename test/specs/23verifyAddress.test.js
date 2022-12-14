const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
import { cart } from "../pages/mainPage.page";
import userData from "../testData/userData";
describe("Checkout Page", () => {
    it("TC 25 : Verify address details in checkout page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        //Click on SignUp/Login button
        await mainPage.login.click();
        await console.log(loginPage.labelNewUser.isDisplayed());
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();
        const mainAddress = [];
        await registerPage.createAccount();
        mainAddress.push(userData.COMPANY);
        mainAddress.push(userData.ADDRESS1);
        mainAddress.push(userData.ADDRESS2);
        await $('h2>b').waitForDisplayed(); //'ACCOUNT CREATED!' is visible
        await mainPage.continueButton.click(); //click continue
        await expect(mainPage.loggedInAs).toBeDisplayed();//'Logged in as username' is visible
        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await mainPage.cart.waitForDisplayed();
        await mainPage.cart.click();
        await mainPage.verifyCurrentUrl('/view_cart')
        await cartPage.checkOutButton.click();         //propceed to checkout
        //verify Address and checkout
        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();
        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await mainPage.verifyTextOnElement(cartPage.label, 'Congratulations!')
        await mainPage.deleteAccount.click();
        await mainPage.continueButton.click();
    })
})
