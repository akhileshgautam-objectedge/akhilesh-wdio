const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");
const contactPage = require("../pages/contactUs.page");
const path = require("path");

import userData from "../testData/userData";
describe("TC 6 : Contact Us Page", () => {

    it("1 Verifying Contact Us Page", async () => {
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























// it("3 Verify success message is visible", async () => {
    //     await expect($('.status.alert')).toBeDisplayed();
    //     await $('.btn.btn-success').click(); //click Home
    //     await mainPage.verifyHome();
    // })