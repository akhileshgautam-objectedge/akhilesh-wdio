const mainPage = require("../pages/mainPage.page");
describe("Test Cases", () => {
    it("TC 7 : Verifying 'Test Cases' Page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.testCase.click();
        await mainPage.verifyCurrentUrl('/test_cases');
    })
})