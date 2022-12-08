import Page from "./Page";
class ContactUs {
    get label_get_in_touch() { return $('.contact-form h2'); }

    get name() { return $("input[name='name']"); }
    get email() { return $("input[name='email']"); }
    get subject() { return $("input[name='subject']"); }
    get message() { return $('#message'); }
    get file() { return $("input[name='upload_file']"); }
    get submitButton() { return $("input[name='submit']") }
    get filePath() { return 'C:/webdriverio-test/pract/img.png'; }
}
module.exports = new ContactUs();