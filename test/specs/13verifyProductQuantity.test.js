const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
import cartPage from "../pages/cart.page";
describe("Product description Page", () => {
    it("TC 15 : Verify Product Quantity", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();
        await mainPage.verifyCurrentUrl('/products');
        await productPage.product1.click();
        await mainPage.verifyCurrentUrl('/product_details/1')
        await pdpPage.quantity.setValue('4');                     //Increase quantity to 4
        await pdpPage.addToCart.click();
        await mainPage.continueTo.waitForDisplayed();
        await mainPage.continueTo.click();
        await mainPage.cart.click();
        await expect(cartPage.quantity).toHaveText('4');
    })
})