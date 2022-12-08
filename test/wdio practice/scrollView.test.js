const crmPage= require("../../pages/crm.page");

describe("scrool to element", ()=>{
    
    it("scroll to forgrt link",async ()=>{
        
        await browser.url("https://classic.crmpro.com/index.html");
        // await browser.startRecordingScreen();
        await browser.saveScreenshot("./pages/img.png");
        // console.log("in viewport" ,crmPage.forgetLink.isDisplayedInViewport());
        await crmPage.forgetLink.click();
        // await browser.saveRecordingScreen('./pages/video.mp4');

    })
})