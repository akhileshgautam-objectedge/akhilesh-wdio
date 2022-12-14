const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");
import userData from "../../testData/userData";
describe("Register User", () => {
    it("TC 5 : Register existing User", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();
        await console.log(loginPage.labelNewUser.isDisplayed());
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();
        await expect(registerPage.label_email_already_exist).toBeDisplayed();
        await loginPage.loginFunc();
        await expect(mainPage.loggedInAs).toBeDisplayed();
        await mainPage.deleteAccount.click();
    })
})