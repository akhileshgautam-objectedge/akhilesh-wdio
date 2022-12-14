const mainPage = require("../pages/mainPage.page");
describe("Category products", () => {
    it("TC 20: Verfify Category Products ae visible", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await expect(mainPage.category).toBeDisplayed();
        await mainPage.categoryWomen.click();
        await mainPage.dress.click();
        await mainPage.verifyCurrentUrl('/category_products/1');
        await mainPage.verifyTextOnElement($('.title.text-center'), 'WOMEN - DRESS PRODUCTS');
        await mainPage.categoryMen.click();
        await mainPage.tshirt.click();
        await mainPage.verifyCurrentUrl('/category_products/3');
    })
})