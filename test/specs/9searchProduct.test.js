const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
describe("Searching Products", () => {
    it("TC 10 : verify Search Text functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();                       //click on products button
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/products');
        await productPage.productList.waitForDisplayed();           //products list is visible
        await productPage.productList.isDisplayed();
        await productPage.search.setValue('Blue');
        await productPage.searchButton.click();
    })
    it("TC 11: Verify all the products related to search are visible", async () => {
        await productPage.labelSearched.waitForDisplayed();
        await expect(productPage.labelSearched).toBeDisplayed();
        const elem = await productPage.productInfo;
        await expect(elem).toHaveTextContaining('Blue');
    })
})

