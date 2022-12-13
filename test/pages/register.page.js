import userData from "../../testData/userData";
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
    get days() { return $('#days'); }
    get months() { return $('#months'); }
    get years() { return $('#years'); }
    get gender() { return $('#id_gender1'); }

    async createAccount() {
        await this.password.setValue(userData.PASSWORD);
        await this.days.selectByVisibleText('10');
        await this.months.selectByVisibleText('March');
        await this.years.selectByVisibleText('1999');
        await this.gender.click();
        await this.firstName.setValue(userData.NAME);
        await this.lastName.setValue(userData.LASTNAME);
        await this.address1.setValue(userData.ADDRESS1);
        await this.address2.setValue(userData.ADDRESS2);
        await this.company.setValue(userData.COMPANY);
        await this.state.setValue(userData.STATE);
        await this.city.setValue(userData.CITY);
        await this.zipcode.setValue(userData.ZIPCODE);
        await this.mobile.setValue(userData.MOBILENUM);
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