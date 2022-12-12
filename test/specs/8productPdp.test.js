const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");

describe("TC 8 : Product Description Page", () => {

    it("1 Verify PDP page is visible successfully", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.productsLink.click();                       //click on products button
        await expect(browser).toHaveUrlContaining('/products');
        await productPage.productList.waitForDisplayed();           //products list is visible
        await productPage.productList.isDisplayed();
        await productPage.firstProduct.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/product_details/1');
    })


    it("2 Verify that product detail is visible: product name, category, price, availability, condition, brand", async () => {
        // await pdpPage.productName.waitForDisplayed();
        await expect(pdpPage.productName).toBeDisplayed();
        await expect(pdpPage.productCategory).toBeDisplayed();
        await expect(pdpPage.productPrice).toBeDisplayed();
        await expect(pdpPage.productAvailability).toBeDisplayed();

        await expect($$('div>p>b')[1]).toHaveText('Condition:');
    })

})