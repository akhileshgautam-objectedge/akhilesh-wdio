const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");

describe("TC 18 : View Category products", () => {

    it("1. View Category Products", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await expect(mainPage.category).toBeDisplayed();



        await mainPage.categoryWomen.click();
        await mainPage.dress.click();


        await expect(browser).toHaveUrlContaining('/category_products/1');
        await expect($('.title.text-center')).toHaveText('WOMEN - DRESS PRODUCTS');


        await mainPage.categoryMen.click();
        await mainPage.tshirt.click();
        await expect(browser).toHaveUrlContaining('/category_products/3');
    })
})