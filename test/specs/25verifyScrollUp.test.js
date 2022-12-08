const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");

describe("TC 25: Verify scroll up", () => {

    it("1  Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();

        // await mainPage.footer.scrollIntoView();
        await mainPage.scrollToBottom();

        await mainPage.subscriptionText.waitForDisplayed();
        await mainPage.subscriptionText.isDisplayed();
        await mainPage.scrollToTop();

        await expect(mainPage.mainText).toHaveText('Full-Fledged practice website for Automation Engineers');
    })

    it("2 Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.footer.scrollIntoView();

        await mainPage.subscriptionText.waitForDisplayed();
        await mainPage.subscriptionText.isDisplayed();

        await mainPage.scrollUp.click();
        await expect(mainPage.mainText).toHaveText('Full-Fledged practice website for Automation Engineers');
    })
})