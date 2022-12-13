const mainPage = require("../pages/mainPage.page");
describe("Test Cases", () => {
    it("TC 7 : Verifying 'Test Cases' Page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.testCase.click();
        await expect(browser).toHaveUrlContaining('/test_cases');
    })
})