const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const cartPage = require("../pages/cart.page");
describe("Cart page", () => {
    it("TC 19 : Remove Products From Cart", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();                         //Click products button
        await expect(browser).toHaveUrlContaining('/products');
        await productPage.product1Cart.click();
        await productPage.continueButton.waitForDisplayed();
        await productPage.continueButton.click();
        await mainPage.cart.click();
        await expect($$('tbody>tr')).toBeElementsArrayOfSize(1);
        await cartPage.removeButton.click();
        await $('span>p>b').waitForDisplayed();
        await mainPage.verifyTextOnElement($('span>p>b'), 'Cart is empty!')
    })
})