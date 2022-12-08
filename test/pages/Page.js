export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    async open() {
        return await browser.url("http://automationexercise.com");
    }

    get continueButton() { return $("a[data-qa='continue-button']"); }

    async delete() {
        this.deleteAccount.click();
        await $('h2>b').isDisplayed();        //'ACCOUNT DELETED!' is visible
        await $('.btn.btn-primary').click();
    }
}