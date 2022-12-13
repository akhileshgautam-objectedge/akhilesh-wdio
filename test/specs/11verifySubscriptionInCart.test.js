const mainPage = require("../pages/mainPage.page");
import userData from "../../testData/userData";
describe("Verify Subscription", () => {
    it("TC 13 : Verify Subscription on Cart Page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.cart.click();                              //Click cart button
        await mainPage.footer.scrollIntoView();                   //Scroll down to footer
        await expect(mainPage.subscriptionText).toBeDisplayed(); // Verify text 'SUBSCRIPTION' 
        await mainPage.subscribeEmail.setValue(userData.EMAIL);
        await mainPage.submitButton.click();
        await expect(mainPage.successMessage).toBeDisplayed();//'You have been successfully subscribed!' is visible
    })
})
