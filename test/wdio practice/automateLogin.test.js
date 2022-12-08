const loginPage = require("../../pages/loginCred");

describe("Handling Login application",()=>{

    it("enter username",async()=>{
        await browser.url('https://the-internet.herokuapp.com/login');
        const elem = await $('h2');
        console.log(await elem.isDisplayedInViewport());
        await loginPage.enterUsername('tomsmith');
        // await assert.equal('',loginPage.username.getValue());
    })

    it("enter password",async()=>{
        await loginPage.enterPassword('SuperSecretPassword!');
        console.log(await elem.getText());
        // await assert.equal('',loginPage.password.getValue());
    })

    it("click login button",async()=>{
        await loginPage.clickLogin();
        browser.pause(5000);
    })
    
})