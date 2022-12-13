const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");
import userData from "../../testData/userData";
describe("Register User", () => {
    it("TC 1: Register a new User", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();                           //Click on SignUp/Login button
        await console.log(loginPage.labelNewUser.isDisplayed());
        await loginPage.nameRegister.setValue(userData.NAME);
        await loginPage.emailRegister.setValue(userData.EMAIL);
        await loginPage.buttonRegister.click();
        await $('div>h2>b').waitForDisplayed();                 //'ENTER ACCOUNT INFORMATION' is visible
        await registerPage.createAccount();
        await $('h2>b').waitForDisplayed();                     //'ACCOUNT CREATED!' is visible
        await mainPage.continueButton.click();                  //click continue
        await expect(mainPage.loggedInAs).toBeDisplayed();      //'Logged in as username' is visible
        await mainPage.deleteAcc();
    })
})
