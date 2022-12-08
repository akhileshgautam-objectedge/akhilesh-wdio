const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");
import userData from "../testData/userData";
describe("TC 4 : Logout User", () => {

    it("Logout User", async () => {
        await mainPage.getUrl();
        await mainPage.verifyHome();
        await mainPage.login.click();                       //Click on SignUp/Login button
        await expect(loginPage.loginLabel).toBeDisplayed(); // 'Login to your account' is visible

        await loginPage.enterUsername(userData.EMAIL);
        await loginPage.enterPassword(userData.PASSWORD);
        await loginPage.clickLogin();
        await expect(mainPage.loggedInAs).toBeDisplayed();   //'Logged in as username' is visible
        await mainPage.logout.click();
        await expect(browser).toHaveUrlContaining(mainPage.getUrlText());
    })


})

