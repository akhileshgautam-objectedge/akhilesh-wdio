const mainPage = require("../pages/mainPage.page");
describe("TC 7 : Verifying 'Test Cases' Page", () => {

    it("1 Navigate to URL", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.testCase.click();
        await expect(browser).toHaveUrlContaining('/test_cases');
    })

})