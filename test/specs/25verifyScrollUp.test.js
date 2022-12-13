const mainPage = require("../pages/mainPage.page");
describe("Verify scroll up", () => {
    it("TC 27 : Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.scrollToBottom();    // await mainPage.footer.scrollIntoView();
        await mainPage.subscriptionText.waitForDisplayed();
        await mainPage.subscriptionText.isDisplayed();
        await mainPage.scrollToTop();
        await expect(mainPage.mainText).toHaveText('Full-Fledged practice website for Automation Engineers');
    })
    it("TC 28 : Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.footer.scrollIntoView();
        await mainPage.subscriptionText.waitForDisplayed();
        await mainPage.subscriptionText.isDisplayed();
        await mainPage.scrollUp.click();
        await expect(mainPage.mainText).toHaveText('Full-Fledged practice website for Automation Engineers');
    })
})