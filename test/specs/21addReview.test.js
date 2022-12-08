const mainPage = require("../pages/mainPage.page");
const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
const cartPage = require("../pages/cart.page");
import userData from "../testData/userData"
describe("TC 21 : Add Review", () => {

    it("1  Add review on product", async () => {
        await mainPage.getUrl();
        await mainPage.productsLink.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/products');


        await mainPage.firstProduct.click();
        await expect(pdpPage.reviewText).toHaveText('WRITE YOUR REVIEW');


        await pdpPage.reviewName.setValue(userData.NAME);
        await pdpPage.reviewEmail.setValue(userData.EMAIL);
        await pdpPage.review.setValue('this is review text');
        await pdpPage.reviewSubmit.click();
        await expect($('.alert-success.alert > span')).toBeDisplayed();
    })
})