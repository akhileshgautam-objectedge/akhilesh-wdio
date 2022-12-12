const registerPage = require("../pages/register.page");
const loginPage = require("../pages/loginUser.page");
const mainPage = require("../pages/mainPage.page");

import userData from "../../testData/userData";
describe("TC 1 : Register User", () => {

    it("1 Register User", async () => {
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










// it("4 Enter username and password", async () => {
//     const name = await $('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)');
//     const email = await $('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)');
//     const button = await $('#form > div > div > div:nth-child(3) > div > form > button');
//     await name.setValue('Test User');
//     await email.setValue('testuser@mailinator.com');
//     await button.click();
// })

// const check_1 = await $('form > div:nth-child(7) > label');
// const check_2 = await $('form > div:nth-child(8) > label');