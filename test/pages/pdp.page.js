class pdpPage {
    get productName() { return $('.product-information > h2'); }
    get productCategory() { return $('.product-information > p:first-of-type '); }
    get productPrice() { return $(".product-information > span>span"); }
    get productAvailability() { return $$('div>p>b'); }
    get quantity() { return $('#quantity'); }
    get addToCart() { return $('.btn.btn-default.cart'); }
    get reviewText() { return $("a[href='#reviews']"); }
    get reviewName() { return $('#name'); }
    get reviewEmail() { return $('#email'); }
    get review() { return $('#review'); }
    get reviewSubmit() { return $('#button-review'); }
    get conditionDetail() { return $$('div>p>b')[1]; }
}
module.exports = new pdpPage();