class productPage {
    get search() { return $("input[name='search']"); }
    get searchButton() { return $('button#submit_search'); }
    get labelSearched() { return $('h2.title.text-center'); }
    get productList() { return $('.features_items'); }
    get firstProduct() { return $("a[href='/product_details/1']"); }
    get productInfo() { return $('.productinfo.text-center > p'); }
    get product1() { return $("a[href='/product_details/1']"); }
    get product1Cart() { return $('a[data-product-id="1"]'); }
    get product2Cart() { return $('a[data-product-id="2"]'); }
    get continueButton() { return $('.btn.btn-success.close-modal.btn-block'); }
    get products() { return $('.col-sm-4'); }
}
module.exports = new productPage();