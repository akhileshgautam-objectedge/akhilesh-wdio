const mainPage = require("../pages/mainPage.page");
describe("TC 18 :Category products", () => {
    it("1. Verfify Category Products ae visible", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await expect(mainPage.category).toBeDisplayed();
        await mainPage.categoryWomen.click();
        await mainPage.dress.click();

        await expect(browser).toHaveUrlContaining('/category_products/1');
        await expect($('.title.text-center')).toHaveText('WOMEN - DRESS PRODUCTS');
        await mainPage.categoryMen.click();
        await mainPage.tshirt.click();
        await expect(browser).toHaveUrlContaining('/category_products/3');
    })
})