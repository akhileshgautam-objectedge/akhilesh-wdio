import Page from "./Page";
import userData from "../testData/userData";
class registerPage {
    get firstName() { return $('#first_name'); }
    get lastName() { return $('#last_name'); }
    get company() { return $('#company'); }
    get address1() { return $('#address1'); }
    get address2() { return $('#address2'); }
    get country() { return $('#country'); }
    get state() { return $('#state'); }
    get city() { return $('#city'); }
    get zipcode() { return $('#zipcode'); }
    get mobile() { return $('#mobile_number'); }

    async createAccount() {
        await $('#password').setValue(userData.PASSWORD);
        await $('#days').selectByVisibleText('10');
        await $('#months').selectByVisibleText('March');
        await $('#years').selectByVisibleText('1999');
        await $('#id_gender1').click();

        await $('#first_name').setValue(userData.NAME);
        await $('#last_name').setValue(userData.LASTNAME);
        await $('#address1').setValue(userData.ADDRESS1);
        await $('#address2').setValue(userData.ADDRESS2);
        await $('#company').setValue(userData.COMPANY);
        await $('#state').setValue(userData.STATE);
        await $('#city').setValue(userData.CITY);
        await $('#zipcode').setValue(userData.ZIPCODE);
        await $('#mobile_number').setValue(userData.MOBILENUM);
        await $("button[data-qa='create-account']").click();

    }










    get nameOnfirst() {
        return $("input[data-qa='signup-name']")
    }
    get email() {
        return $("input[data-qa='signup-email'")
    }
    get title() {
        return $('#id_gender1');
    }
    get name() {
        return $('#name');
    }
    get password() {
        return $('#password');
    }
    get loginButton() {
        return $('button[data-qa=login-button]');
    }
    get signupButton() {
        return $('button[data-qa=signup-button]');
    }
    get cart() {
        return $("a[href='/view_cart']");
    }
    get label_email_already_exist() {
        return $('#form > div > div > div:nth-child(3) > div > form > p');
    }

    setVal(elem, val) {
        elem.setVaue(val);
    }
}
module.exports = new registerPage();