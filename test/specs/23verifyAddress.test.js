const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
import userData from "../testData/userData";
describe("TC 23: Verify address details", () => {
    it("1  Verify address details in checkout page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        //Click on SignUp/Login button
        await mainPage.login.click();
        await console.log(loginPage.labelNewUser.isDisplayed());
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();
        const mainAddress = [];
        await $('div>h2>b').waitForDisplayed();//'ENTER ACCOUNT INFORMATION' is visible
        await expect(await $('div>h2>b')).toBeDisplayed();
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
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/view_cart');
        await cartPage.checkOutButton.click();         //propceed to checkout
    })
    it("verify Address and checkout", async () => {
        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();
        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await expect(cartPage.label).toHaveTextContaining('Congratulations!')
        await mainPage.deleteAccount.click();
        await $('h2>b').waitForDisplayed();
        await $('h2>b').isDisplayed();
        await mainPage.continueButton.click();
    })
})












// const address = await $$('ul#address_delivery>li[class="address_address1 address_address2"]').map(function (element) {
        //     return element.getText();
        // })
        // mainAddress.sort();
        // address.sort();
        // if (JSON.stringify(mainAddress) === JSON.stringify(address)) {
        //     console.log('Address verified')
        // }
        // else {
        //     throw 'Address mismatch!'
        // }