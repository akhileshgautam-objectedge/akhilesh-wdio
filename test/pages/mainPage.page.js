class mainPage {
    getUrl() { return browser.url("http://automationexercise.com"); }
    getUrlText() { return "https://automationexercise.com"; }
    verifyHome() { return browser.execute(() => document.readyState === 'complete'); }

    get contactUs() { return $('.fa.fa-envelope'); }
    get login() { return $("a[href='/login']"); }
    get loginContinue() { return $("p>a[href='/login']") };
    get cart() { return $("a[href='/view_cart']"); }
    get productsLink() { return $("a[href='/products']"); }
    get header() { return $('#header'); }
    get footer() { return $('#footer'); }

    get incorrectEmailLabel() { return $('form > p[style="color: red;"]'); }
    get testCase() { return $("a[href='/test_cases']"); }
    get mainText() { return $('.col-sm-6>h2'); }
    get scrollUp() { return $('#scrollUp'); }

    get subscriptionText() { return $('.single-widget>h2 '); }
    get submitButton() { return $("#subscribe"); }
    get subscribeEmail() { return $('#susbscribe_email'); }
    get successMessage() { return $('div.alert-success.alert'); }

    get recommendedText() { return $('.recommended_items>.title.text-center'); }
    get recommendedProduct() { return $(".recommended_items a[data-product-id='4']"); }
    get firstProduct() { return $("a[href='/product_details/1']") }
    get category() { return $('.panel-group.category-products'); }
    get brands() { return $('.brands-name'); }
    get categoryWomen() { return $("a[href='#Women']"); }
    get categoryMen() { return $("a[href='#Men']"); }
    get subscriptionText() { return $('.single-widget > h2 '); }
    get dress() { return $('#Women > div > ul > li:nth-child(1) > a'); }
    get tshirt() { return $('#Men > div > ul > li:nth-child(1) > a'); }
    get brandPolo() { return $("a[href='/brand_products/Polo']"); }
    get brandHM() { return $("a[href='/brand_products/H&M']"); }
    //after login
    get loggedInAs() { return $('.fa.fa-user') };
    get deleteAccount() { return $("a[href='/delete_account']"); }
    get logout() { return $("a[href='/logout']"); }
    //additional
    get continueButton() { return $("a[data-qa='continue-button']"); }
    get continueTo() { return $("button[data-dismiss='modal']"); }
    async scrollToBottom() {
        var i = 0;
        while (i < 500) {
            await browser.keys('\uE05B');
            i++;
        }
    }
    async scrollToTop() {
        var k = 0;
        while (k < 500) {
            await browser.keys('\uE059');
            k++;
        }
    }
    async enter() {
        var k = 0;
        while (k < 20) {
            await browser.keys('\uE007');
            k++;
        }
    }
    async deleteAcc() {
        await this.deleteAccount.click();
        await $('h2>b').isDisplayed();               //'ACCOUNT DELETED!' is visible
        await $('.btn.btn-primary').click();         //click Continue
    }
    async verifyTextOnElement(element, text) {
        await expect(element).toHaveTextContaining(text);
    }
}
module.exports = new mainPage();