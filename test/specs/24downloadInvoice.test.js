const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");
const { default: userData } = require("../testData/userData");


describe("TC 24: Download Invoice", () => {

    it("1  Download Invoice after purchase order", async () => {
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



        await $('div>h2>b').waitForDisplayed();//'ENTER ACCOUNT INFORMATION' is visible
        await expect(await $('div>h2>b')).toBeDisplayed();
        await registerPage.createAccount();

        await $('h2>b').waitForDisplayed(); //'ACCOUNT CREATED!' is visible
        await mainPage.continueButton.click(); //click continue
        await expect(mainPage.loggedInAs).toBeDisplayed();//'Logged in as username' is visible


        await mainPage.cart.click();
        await cartPage.checkOutButton.click();    //Proceed To Checkout

        await cartPage.textArea.setValue('aaaaa');
        await cartPage.placeOrderButton.click();


        await cartPage.fillPayment();
        await cartPage.submitButton.click();
        await cartPage.label.waitForDisplayed();
        await expect(cartPage.label).toHaveTextContaining('Congratulations!')

        // await $('#submit').click();
        // await cartPage.downloadInvoice.toBeDisplayed();

        await mainPage.deleteAccount.click();
        await $('h2>b').waitForDisplayed();
    })


})



















// await cartPage.downloadInvoice.click();
        // await $("a[href='/']").click();