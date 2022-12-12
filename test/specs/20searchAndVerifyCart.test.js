const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");

describe("TC 20 : Search and verify cart", () => {

    it("1 Search Products and Verify Cart After Login", async () => {
        await mainPage.getUrl();
        await mainPage.productsLink.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/products');

        await productPage.search.setValue('Blue');
        await productPage.searchButton.click();

        await productPage.labelSearched.waitForDisplayed();
        await expect(productPage.labelSearched).toHaveTextContaining("SEARCHED PRODUCTS");
        await expect(productPage.products).toBeDisplayed();

    })
})













// // const elements = await $$('.product-overlay>div>p');
// await $('.product-overlay>div>p').waitForDisplayed();
// await expect($('.product-overlay>div>p')).toHaveTextContaining('Blue');
//         // for (let i in elements) {
//         //     await expect(elements[i]).toHaveTextContaining('Blue');
//         // }