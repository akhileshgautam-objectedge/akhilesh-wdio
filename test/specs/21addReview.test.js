const mainPage = require("../pages/mainPage.page");
const pdpPage = require("../pages/pdp.page");
import userData from "../testData/userData"
describe("Add Review", () => {
    it("TC 23 : Add review on product", async () => {
        await mainPage.getUrl();
        await mainPage.productsLink.click();
        await expect(browser).toHaveUrl(mainPage.getUrlText() + '/products');
        await mainPage.firstProduct.click();
        await expect(pdpPage.reviewText).toHaveText('WRITE YOUR REVIEW');
        await pdpPage.reviewName.setValue(userData.NAME);
        await pdpPage.reviewEmail.setValue(userData.EMAIL);
        await pdpPage.review.setValue('this is review text');
        await pdpPage.reviewSubmit.click();
        await expect(mainPage.success_message).toBeDisplayed();
    })
})