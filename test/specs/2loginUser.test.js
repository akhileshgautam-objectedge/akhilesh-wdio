const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");

describe("TC 2 : Login User", () => {

    it("1 Login with correct credentials", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();                       //Click on SignUp/Login button
        await expect(loginPage.loginLabel).toBeDisplayed(); // 'Login to your account' is visible
        await loginPage.loginFunc();
        await expect(mainPage.loggedInAs).toBeDisplayed();   //'Logged in as username' is visible
        await mainPage.deleteAcc();
    })


})