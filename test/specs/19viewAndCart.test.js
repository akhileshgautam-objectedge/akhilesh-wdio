const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");

describe("TC 19 : View & Cart Brand Products", () => {

    it("1. View & Cart Brand Products", async () => {
        await mainPage.getUrl();
        await expect(mainPage.brands).toBeDisplayed();
        await mainPage.brandPolo.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/brand_products/Polo');

        await expect(productPage.productList).toBeDisplayed();

        await mainPage.brandHM.click();
        await expect(browser).toHaveUrlContaining('/brand_products/H&M');
    })
})