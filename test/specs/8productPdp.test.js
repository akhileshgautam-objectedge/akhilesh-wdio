const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
describe("Product Description Page", () => {
    it("TC 8 : Verify PDP page is visible successfully", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();                       //click on products button
        await expect(browser).toHaveUrlContaining('/products');
        await productPage.productList.waitForDisplayed();           //products list is visible
        await productPage.productList.isDisplayed();
        await productPage.firstProduct.click();
        await mainPage.verifyCurrentUrl('/product_details/1')
    })
    it("TC 9: Verify that product detail is visible: product name, category, price, availability, condition, brand", async () => {
        await expect(pdpPage.productName).toBeDisplayed();
        await expect(pdpPage.productCategory).toBeDisplayed();
        await expect(pdpPage.productPrice).toBeDisplayed();
        await expect(pdpPage.productAvailability).toBeDisplayed();
        await mainPage.verifyTextOnElement(pdpPage.conditionDetail, 'Condition');
    })
})