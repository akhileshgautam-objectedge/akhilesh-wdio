const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");

describe("TC 3 : Login User", () => {

    it("Login with Incorrect credentials", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();                       //Click on SignUp/Login button
        await expect(loginPage.loginLabel).toBeDisplayed(); // 'Login to your account' is visible

        await loginPage.enterUsername();
        await loginPage.enterPassword();

        await loginPage.clickLogin();
        await mainPage.incorrectEmailLabel.waitForDisplayed(); // incorrect username label
    })


})