describe('TEST NAME: E2E Tests - Login/Logout Flow', () => {  

    it('Scenario name - Open URL', async() => {
        await browser.url('https://www.amazon.in/');
        const searchBox=await $('#twotabsearchtextbox');
        // // const searchBox=$('//*[@id="twotabsearchtextbox"]');
        await searchBox.setValue('Apple');
        const head = await $('.h0-80');
        // const search = $('#nav-search-submit-button');
        await console.log(head.getText());
        // search.click();
        await browser.pause(4000);
    })
  
    it('click on a field',async ()=>{
        browser.url('https://www.amazon.in/');
         await browser.setWindowSize(500,500);
        const icon =await $('#nav-search-submit-button');
        await icon.click();

        const label =await $('#M8qNVl1U7LK3yh-1wqQJ6g > div.a-cardui-header > h2');
       await  console.log(label.getText());
    })
    
    it('Scenario name - Close current window',async () => {

        const head = await $('.h0-80');
        const isDisplay  =await  head.isDisplayed();
        console.log();  // return true or false
        browser.closeWindow() // command to close the current window   

    })

    it("drag and drop",async ()=>{
        browser.url("/");
        const element = await $('#id');
        const target =await  $('#drop');

        await element.dragAndDrop(target);
    })
    
})
