const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");
describe("TC 17 : Remove products from cart", () => {

    it("1 Remove Products From Cart", async () => {
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
        await expect($('span>p>b')).toHaveText('Cart is empty!');  //product is removed
    })

})