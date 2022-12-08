describe("test casees",()=>{
    
    it("test case 1",async()=>{
        await browser.url('https://www.freshworks.com/') ;
        const elem = await $('h1.h0-80')
        await elem.setValue('test123')

        const value =await elem.getValue()
        await console.log(value) // returns 'test123'

        // elem.clearValue()
        // value = elem.getValue()
        browser.pause(4000);

    })

    it("test case #",async()=>{
        // browser.url('https://www.freshworks.com/');
        const elem_id=await $('#freeTrials');
        await elem_id.click();
        browser.pause(3000);
    })

    it("main heading didplayed",()=>{

    })

    it("check browser url",async()=>{
        // browser.url("https://www.freshworks.com/");
        await expect(browser.getUrl()).equals("https://www.freshworks.com/");
    })
})