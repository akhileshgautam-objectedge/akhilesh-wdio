import Page from "./Page";
import userData from "../testData/userData";
class CartPageAndCheckout {

    get quantity() { return $(".cart_quantity>button"); }
    get removeButton() { return $('.fa.fa-times'); }
    get checkOutButton() { return $('.btn.btn-default.check_out'); }
    get textArea() { return $('textarea'); }
    get placeOrderButton() { return $("a[href='/payment']"); }

    //payments
    get nameOnCard() { return $("input[data-qa='name-on-card']"); }
    get cardNumber() { return $("input[data-qa='card-number']"); }
    get cvc() { return $("input[data-qa='cvc']"); }
    get monthExpiry() { return $(".form-control.card-expiry-month"); }
    get yearExpiry() { return $(".form-control.card-expiry-year"); }
    get submitButton() { return $('#submit'); }

    //order placed
    get label() { return $('#form>div>div>div>p'); }
    async fillPayment() {
        await $("input[data-qa='name-on-card']").setValue(userData.NAME);
        await $("input[data-qa='card-number']").setValue(userData.CARDNUM);
        await $("input[data-qa='cvc']").setValue(userData.CVC);
        await $(".form-control.card-expiry-month").setValue('01');
        await $(".form-control.card-expiry-year").setValue('2026');
    }
    async fillPaymentDetails(name, cardnumber, cvc, month, year) {
        await $("input[data-qa='name-on-card']").setValue(name);
        await $("input[data-qa='card-number']").setValue(cardnumber);
        await $("input[data-qa='cvc']").setValue(cvc);
        await $(".form-control.card-expiry-month").setValue(month);
        await $(".form-control.card-expiry-year").setValue(year);
    }
    async open() { return Page.open(); }
    //download
    get downloadInvoice() {
        return $("a[href='/download_invoice/0']");
    }
}
module.exports = new CartPageAndCheckout();