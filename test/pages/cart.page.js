import Page from "./Page";
import userData from "../../testData/userData";
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
        await this.nameOnCard.setValue(userData.NAME);
        await this.cardNumber.setValue(userData.CARDNUM);
        await this.cvc.setValue(userData.CVC);
        await this.monthExpiry.setValue('01');
        await this.yearExpiry.setValue('2026');
    }
    async fillPaymentDetails(name, cardnum, cvc, month, year) {
        await this.nameOnCard.setValue(name);
        await this.cardNumber.setValue(cardnum);
        await this.cvc.setValue(cvc);
        await this.monthExpiry.setValue(month);
        await this.yearExpiry.setValue(year);
    }
    async open() { return Page.open(); }
    //download
    get downloadInvoice() {
        return $("a[href='/download_invoice/0']");
    }
}
module.exports = new CartPageAndCheckout();