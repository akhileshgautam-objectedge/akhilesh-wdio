const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
describe("TC 12 : Cart Page", () => {

    it("1 Add products to cart", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();

        await mainPage.productsLink.click();                                //Click products button
        await expect(browser).toHaveUrlContaining('/products');

        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();

        await productPage.product2Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();

        await mainPage.cart.click();
        await expect($$('tbody>tr')).toBeElementsArrayOfSize(2)
    })

})