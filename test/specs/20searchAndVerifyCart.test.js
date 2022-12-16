const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
describe("Search and verify cart", () => {
    it("TC 22 : Search Products and Verify Cart After Login", async () => {
        await mainPage.getUrl();
        await mainPage.productsLink.click();
        await mainPage.verifyCurrentUrl('/products');
        await productPage.search.setValue('Blue');
        await productPage.searchButton.click();
        await productPage.labelSearched.waitForDisplayed();
        await mainPage.verifyTextOnElement(productPage.labelSearched, "SEARCHED PRODUCTS")
        await expect(productPage.products).toBeDisplayed();
    })
})

