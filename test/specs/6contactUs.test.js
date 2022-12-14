const mainPage = require("../pages/mainPage.page");
const contactPage = require("../pages/contactUs.page");
import userData from "../testData/userData";
describe("Contact Us Page", () => {
    it("TC 6 : Verifying Contact Us Page", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.contactUs.click();
        await expect(contactPage.label_get_in_touch).toBeDisplayed();
        await contactPage.name.setValue(userData.NAME);
        await contactPage.email.setValue(userData.EMAIL);
        await contactPage.subject.setValue('anything');
        await contactPage.message.setValue('anything');
        //UPLOAD FILE
        const fileElement = await contactPage.file;
        const filePath = contactPage.filePath;
        const remoteFilePath = await browser.uploadFile(filePath);
        await fileElement.setValue(remoteFilePath);
        await contactPage.submitButton.click();
        await mainPage.enter();
    })
})



