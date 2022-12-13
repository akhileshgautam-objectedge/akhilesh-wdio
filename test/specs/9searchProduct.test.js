const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");

describe("TC 9 :  Searching Products", () => {
    it("1 verify Search Products functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();                       //click on products button
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/products');
        await productPage.productList.waitForDisplayed();           //products list is visible
        await productPage.productList.isDisplayed();
        await productPage.search.setValue('Blue');
        await productPage.searchButton.click();
    })
    it("2 Verify all the products related to search are visible", async () => {
        await productPage.labelSearched.waitForDisplayed();
        await expect(productPage.labelSearched).toBeDisplayed();
        const elem = await productPage.productInfo;
        const products = await $$(".product-image-wrapper");
        await expect(elem).toHaveTextContaining('Blue');
    })
})




















// for (var i = 0; i < products.length; i++) {
//     // console.log('fakeImage: ', products);
// }