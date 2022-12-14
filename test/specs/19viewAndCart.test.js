const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
describe("Brand Products", () => {
    it("TC 21 : View & add to Cart Brand Products", async () => {
        await mainPage.getUrl();
        await expect(mainPage.brands).toBeDisplayed();
        await mainPage.brandPolo.click();
        await mainPage.verifyCurrentUrl('Polo');
        await expect(productPage.productList).toBeDisplayed();
        await mainPage.brandHM.click();
        await mainPage.verifyCurrentUrl('H&M');
    })
})