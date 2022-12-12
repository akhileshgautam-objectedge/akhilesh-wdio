import Page from "./Page";
import userData from "../../testData/userData";
class loginUser {
    get nameRegister() { return $("input[data-qa='signup-name']"); }
    get emailRegister() { return $("input[data-qa='signup-email']"); }
    get buttonRegister() { return $("button[data-qa='signup-button']"); }

    get username() { return $('input[data-qa=login-email]'); }
    get password() { return $('input[data-qa=login-password]'); }
    get loginButton() { return $("button[data-qa='login-button'"); }

    get loginLabel() { return $('.login-form h2 '); }
    get signupLabel() { return $('.signup-form h2'); }

    get logoutButton() { return $("a[href='/logout']"); }

    get labelNewUser() { return $(".signup-form > h2"); }
    async enterUsername(text) {
        await this.username.setValue(text);
    }
    async enterPassword(text) {
        await this.password.setValue(text);
    }
    async clickLogin() {
        await this.loginButton.click();
    }
    async enterUsername() {
        await this.username.setValue(userData.EMAIL);
    }
    async enterPassword() {
        await this.password.setValue(userData.PASSWORD);
    }
    async loginFunc() {
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLogin();
    }

}
module.exports = new loginUser();