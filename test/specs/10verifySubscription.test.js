const mainPage = require("../pages/mainPage.page");
const productPage = require("../pages/product.page");
const pdpPage = require("../pages/pdp.page");
import userData from "../testData/userData"

describe("TC 10 : Verify Subscription", () => {

    it("1 Verify Subscription", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();

        await mainPage.footer.scrollIntoView();                   //Scroll down to footer
        await expect(mainPage.subscriptionText).toBeDisplayed(); // Verify text 'SUBSCRIPTION' 
        await mainPage.subscribeEmail.setValue(userData.EMAIL);
        await mainPage.submitButton.click();
        await expect(mainPage.successMessage).toBeDisplayed();//'You have been successfully subscribed!' is visible
    })

})