const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
describe("Cart Page", () => {
    it("TC 14 :Verifty Add products to cart functionality", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();                                //Click products button
        await mainPage.verifyCurrentUrl('/products')
        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await productPage.product2Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await mainPage.cart.click();
        await expect(cartPage.cartElements).toBeElementsArrayOfSize(2)
    })
})