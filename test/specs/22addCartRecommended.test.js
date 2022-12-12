const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");

describe("TC 22 : Add to cart ", () => {

    it("1 Add to cart from Recommended items", async () => {
        await mainPage.getUrl();

        await mainPage.recommendedText.scrollIntoView();
        await expect(mainPage.recommendedText).toHaveText('RECOMMENDED ITEMS');

        await mainPage.recommendedProduct.waitForDisplayed();
        await mainPage.recommendedProduct.click();
        await mainPage.continueTo.waitForDisplayed();
        await mainPage.continueTo.click();
        await mainPage.cart.click();
        await expect($('tbody > tr')).toBeDisplayed();  //products are visible in cart
    })
})