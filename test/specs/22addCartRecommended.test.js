const mainPage = require("../pages/mainPage.page");
const cartPage = require("../pages/cart.page");
describe("Add to cart", () => {
    it("TC 24 : Add to cart from Recommended items", async () => {
        await mainPage.getUrl();
        await mainPage.recommendedText.scrollIntoView();
        await mainPage.verifyTextOnElement(mainPage.recommendedText, 'RECOMMENDED ITEMS')
        await mainPage.recommendedProduct.waitForDisplayed();
        await mainPage.recommendedProduct.click();
        await mainPage.continueTo.waitForDisplayed();
        await mainPage.continueTo.click();
        await mainPage.cart.click();
        await expect(cartPage.cartElements).toBeDisplayed();  //products are visible in cart
    })
})