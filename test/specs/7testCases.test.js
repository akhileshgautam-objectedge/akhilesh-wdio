const mainPage = require("../pages/mainPage.page");
describe("TC 7 :Test Cases", () => {

    it("Verifying 'Test Cases' Page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.testCase.click();
        await expect(browser).toHaveUrlContaining('/test_cases');
    })

})