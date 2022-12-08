describe("dropdown handling",()=>{

    it("select drop own value by text",async()=>{
        await browser.url('https://www.facebook.com/');
        
        // await $('#email').setValue('qwe');
        await $('#u_0_0_\/6').click();
        
        await $('#day').selectByVisibleText('9');
        // await $('#day').selectByIndex(9);
        await browser.pause(3000);
    })
})